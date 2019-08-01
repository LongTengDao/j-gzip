import version from './version?text';
export { version };

const {
	gzipSync: zlib_gzipSync,
	gzip: zlib_gzip,
	unzipSync,
	unzip,
} = /*#__PURE__*/ require('zlib');

import Promise from '.Promise';

import create from '.Object.create';
import assign from '.Object.assign';
const OPTIONS :{ [level in Level] :{ level :level, memLevel :9 } } = /*#__PURE__*/ function () {
	const OPTIONS = create(null);
	for ( let level :Level = 1; level<=9; ++level ) {
		OPTIONS[level] = assign(create(null), { level, memLevel: 9 });
	}
	return OPTIONS;
}();

export function gzipAsync (data :Buffer | string, level :Level) :Promise<Buffer> {
	return new Promise(function executor (resolve :(data :Buffer) => void, reject :(error :Error) => void) :void {
		zlib_gzip(data, OPTIONS[level], function callback (error :Error, data :Buffer) :void {
			error===null ? resolve(data) : reject(error);
		});
	});
}

export function gzipSync (data :Buffer | string, level :Level) :Buffer {
	return zlib_gzipSync(data, OPTIONS[level]);
}

export function gzip (data :Buffer | string, level :Level, callback :{ (error :Error) :void, (error :null, data :Buffer) :void }) :void {
	zlib_gzip(data, OPTIONS[level], callback);
}

export function unzipAsync (data :Buffer) :Promise<Buffer> {
	return new Promise(function executor (resolve :(data :Buffer) => void, reject :(error :Error) => void) :void {
		unzip(data, function callback (error :Error, data :Buffer) :void {
			error===null ? resolve(data) : reject(error);
		});
	});
}

export { unzipSync, unzip };

import Default from '.default';
export default Default({
	version,
	gzipAsync,
	gzipSync,
	gzip,
	unzipAsync,
	unzipSync,
	unzip,
});

type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;