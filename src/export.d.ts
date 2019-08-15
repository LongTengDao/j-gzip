export const version :string;

export function gzipAsync (data :Buffer | string, level :Level) :Promise<Buffer>;
export function gzipSync (data :Buffer | string, level :Level) :Buffer;
export function gzip (data :Buffer | string, level :Level, callback :Callback) :void;

export function unzipAsync (data :Buffer) :Promise<Buffer>;
export function unzipSync (data :Buffer) :Buffer;
export function unzip (data :Buffer, callback :Callback) :void;

export default exports;
declare const exports :{
	version :typeof version,
	gzipAsync :typeof gzipAsync,
	gzipSync :typeof gzipSync,
	gzip :typeof gzip,
	unzipAsync :typeof gzipAsync,
	unzipSync :typeof unzipSync,
	unzip :typeof unzip,
	default :typeof exports,
};

type Level = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

interface Callback {
	(error :null, data :Buffer) :void
	(error :Error) :void
}
