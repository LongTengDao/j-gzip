'use strict';

const version = '2.2.0';

const create = Object.create;

const assign = Object.assign;

const hasOwnProperty = Object.prototype.hasOwnProperty;

const toStringTag = typeof Symbol!=='undefined' ? Symbol.toStringTag : undefined;

const defineProperty = Object.defineProperty;

const freeze = Object.freeze;

const seal = Object.seal;

const Default = (
	/*! j-globals: default (internal) */
	function Default (exports, addOnOrigin) {
		return /*#__PURE__*/ function Module (exports, addOnOrigin) {
			if ( !addOnOrigin ) { addOnOrigin = exports; exports = create(null); }
			if ( assign ) { assign(exports, addOnOrigin); }
			else { for ( var key in addOnOrigin ) { if ( hasOwnProperty.call(addOnOrigin, key) ) { exports[key] = addOnOrigin[key]; } } }
			exports['default'] = exports;
			typeof exports==='function' && exports.prototype && seal(exports.prototype);
			if ( toStringTag ) {
				var descriptor = create(null);
				descriptor.value = 'Module';
				defineProperty(exports, toStringTag, descriptor);
			}
			return freeze(exports);
		}(exports, addOnOrigin);
	}
	/*¡ j-globals: default (internal) */
);

const {
	gzipSync: zlib_gzipSync,
	gzip: zlib_gzip,
	unzipSync,
	unzip,
} = /*#__PURE__*/ require('zlib');
const OPTIONS                                                      = /*#__PURE__*/ function () {
	const OPTIONS = create(null);
	for ( let level        = 1; level<=9; ++level ) {
		OPTIONS[level] = assign(create(null), { level, memLevel: 9 });
	}
	return OPTIONS;
}();

function gzipAsync (data                 , level       )                  {
	return new Promise(function executor (resolve                        , reject                        )       {
		zlib_gzip(data, OPTIONS[level], function callback (error       , data        )       {
			error===null ? resolve(data) : reject(error);
		});
	});
}

function gzipSync (data                 , level       )         {
	return zlib_gzipSync(data, OPTIONS[level]);
}

function gzip (data                 , level       , callback                                                             )       {
	zlib_gzip(data, OPTIONS[level], callback);
}

function unzipAsync (data        )                  {
	return new Promise(function executor (resolve                        , reject                        )       {
		unzip(data, function callback (error       , data        )       {
			error===null ? resolve(data) : reject(error);
		});
	});
}
const _export = Default({
	version,
	gzipAsync,
	gzipSync,
	gzip,
	unzipAsync,
	unzipSync,
	unzip,
});

module.exports = _export;

//# sourceMappingURL=index.js.map