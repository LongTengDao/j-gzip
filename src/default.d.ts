export = exports;
declare const exports :{
	
	version :string,
	
	gzipAsync (data :Buffer | string, level :Level) :Promise<Buffer>,
	gzipSync (data :Buffer | string, level :Level) :Buffer,
	gzip (data :Buffer | string, level :Level, callback :Callback) :void,
	
	unzipAsync (data :Buffer) :Promise<Buffer>,
	unzipSync (data :Buffer) :Buffer,
	unzip (data :Buffer, callback :Callback) :void,
	
	default :typeof exports,
	
};

type Level = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

interface Callback {
	(error :null, data :Buffer) :void
	(error :Error) :void
}
