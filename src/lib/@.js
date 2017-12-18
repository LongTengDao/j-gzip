'use strict';

const { gzip, unzip, gzipSync, unzipSync } = require('zlib');

const OPTIONS = Object.create(null);{
	const { assign, create } = Object;
	let level = 9;
	while( level ){
		OPTIONS[level] = assign(create(null),{ level, memLevel:9 });
		--level;
	}
}

module.exports = {

	gzipAsync(data,level){
		return new Promise((resolve,reject)=>
			gzip(data,OPTIONS[level],(error,data)=>
				error===null ? resolve(data) : reject(error)
			)
		);
	},

	gzipSync(data,level){
		return gzipSync(data,OPTIONS[level]);
	},

	gzip(data,level,callback){
		return gzip(data,OPTIONS[level],callback);
	},

	unzipAsync(data){
		return new Promise((resolve,reject)=>
			unzip(data,(error,data)=>
				error===null ? resolve(data) : reject(error)
			)
		);
	},

	unzipSync,

	unzip,

};
