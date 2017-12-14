'use strict';

const { from } = Buffer;

const { gzipSync, unzipSync } = require('zlib');

const { stdout } = process;

const UNZIP = Object.create(null);
const OPTIONS = function(){
	const { assign, create } = Object;
	const Options = (level)=> assign(create(null),{ level, memLevel:9 });
	return assign(create(null),{
		0x30: UNZIP,
		0x31: Options(1),
		0x32: Options(2),
		0x33: Options(3),
		0x34: Options(4),
		0x35: Options(5),
		0x36: Options(6),
		0x37: Options(7),
		0x38: Options(8),
		0x39: Options(9),
	});
}();

let options = null;

process.stdin.on('data',function(data){

	if( options===null ){
		options = OPTIONS[data[0]];
		options===undefined && process.exit();
		if( data.length===1 ){ return; }
		data = data.slice(1);
	}

	try{
		data = options===UNZIP ?
			unzipSync(data) :
			gzipSync(data,options);
	}
	catch({ message }){
		options = null;
		stderr.write(from(message));
		return;
	}
	options = null;
	stdout.write(data);

});
