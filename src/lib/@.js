'use strict';

const { from } = Buffer;

const gzipEmpty = function(){
	const { assign, create } = Object;
	const { gzipSync, unzipSync } = require('zlib');
	const empty = Buffer.alloc(0);
	return new Array(10).fill(null).map((_,index)=> index===0 ?
		new Promise((resolve)=>resolve(unzipSync(empty))) :
		Promise.resolve(gzipSync(empty,assign(create(null),{ level:index, memLevel:9 })))
	);
}();
const unzipEmpty = gzipEmpty[0];
const typeBuffer = Promise.reject(new TypeError('{@ltd/j-gzip} gzipBuffer 和 gzipAsync 仅接受 Buffer 作为第一个参数。'));
const typeString = Promise.reject(new TypeError('{@ltd/j-gzip} gzipString 仅接受 string 作为第一个参数。'));
const typeNumber = Promise.reject(new TypeError('{@ltd/j-gzip} gzipBuffer 和 gzipString 仅接受 1 至 9 作为第二个参数。'));
{
	const catcher = $=>{};
	unzipEmpty.catch(catcher);
	typeBuffer.catch(catcher);
	typeString.catch(catcher);
	typeNumber.catch(catcher);
}

const LEVEL = new Array(10).fill(null).map((_,index)=>from(index+''));
const UNZIP = LEVEL[0];

const queue = [];
let task = null;

let dead = false;
let deadError = null;
let deadPromise = null;

const { stdin } = function({ onError, onDataError, onData }){
	const subProcess = require('child_process').spawn(
		process.execPath,
		[__dirname+require('path').sep+'worker.js'],
		{ windowsHide:true }
	);
	subProcess.on('error',onError);
	subProcess.stdin.on('error',onError);
	subProcess.stderr.on('error',onError);
	subProcess.stderr.on('data',onDataError);
	subProcess.stdout.on('error',onError);
	subProcess.stdout.on('data',onData);
	return subProcess;
}({

	onError(error){
		if( dead ){ return; }
		dead = true;
		deadError = new Error('{@ltd/j-gzip} 服务因为之前的错误，已经终止。历史错误信息：\n\n'+error.stack);
		deadPromise = Promise.reject(deadError); deadPromise.catch($=>{});
		if( task===null ){ return; }
		task.reject(deadError);
		task = null;
		for( const { reject } of queue ){ reject(deadError); }
		queue.length = 0;
	},

	onDataError(errorData){
		if( dead ){ return; }
		task.reject(new Error(errorData.toString()));
		if( queue.length===0 ){ task = null; return; }
		task = queue.shift();
		stdin.write(task.level);
		stdin.write(task.data);
	},

	onData(data){
		if( dead ){ return; }
		task.resolve(data);
		if( queue.length===0 ){ task = null; return; }
		task = queue.shift();
		stdin.write(task.level);
		stdin.write(task.data);
	},

});

module.exports = {

	gzipBuffer(buffer,gzipLevel){
		if( dead ){ return deadPromise; }
		if(!(buffer instanceof Buffer)){ return typeBuffer; }
		return gzip(buffer,gzipLevel);
	},

	gzipString(string,gzipLevel){
		if( dead ){ return deadPromise; }
		if( typeof string!=='string' ){ return typeString; }
		return gzip(from(string),gzipLevel);
	},

	unzipBuffer(buffer){
		if( dead ){ return deadPromise; }
		if(!(buffer instanceof Buffer)){ return typeBuffer; }
		if( buffer.length===0 ){ return unzipEmpty; }
		return send(buffer,UNZIP);
	},

};

function gzip(data,level){
	switch( level ){
		case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:
			if( data.length===0 ){ return gzipEmpty[level]; }
			return send(data,LEVEL[level]);
		default:
			return typeNumber;
	}
}

function send(data,level){
	return new Promise(function(resolve,reject){
		if( task===null ){
			task = { resolve, reject, data, level };
			stdin.write(level);
			stdin.write(data);
		}
		else{
			queue.push({ resolve, reject, data, level });
		}
	});
}
