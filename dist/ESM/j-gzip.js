/*!
 * 模块名称：j-gzip
 * 模块版本：2.4.0
 * 许可条款：LGPL-3.0
 * 所属作者：龙腾道 <LongTengDao@LongTengDao.com> (www.LongTengDao.com)
 * 问题反馈：https://GitHub.com/LongTengDao/j-gzip/issues
 * 项目主页：https://GitHub.com/LongTengDao/j-gzip/
 */

const version = '2.4.0';

const create = Object.create;

const NULL = (
	/*! j-globals: null.prototype (internal) */
	Object.create
		? /*#__PURE__*/ Object.preventExtensions(Object.create(null))
		: null
	/*¡ j-globals: null.prototype (internal) */
);

const hasOwnProperty = Object.prototype.hasOwnProperty;

const freeze = Object.freeze;

const Null = (
	/*! j-globals: null.constructor (internal) */
	/*#__PURE__*/ function () {
		var assign = Object.assign || function assign (target, source) {
			for ( var key in source ) {
				if ( hasOwnProperty.call(source, key) ) { target[key] = source[key]; }
			}
			return target;
		};
		var NULL$1 = function (object) {
			if ( object ) {
				return /*#__PURE__*/ assign(/*#__PURE__*/ create(NULL), object);
			}
		};
		delete NULL$1.name;
		//try { delete NULL.length; } catch (error) {}
		NULL$1.prototype = null;
		freeze(NULL$1);
		return NULL$1;
	}()
	/*¡ j-globals: null.constructor (internal) */
);

const assign = Object.assign;

const toStringTag = typeof Symbol!=='undefined' ? Symbol.toStringTag : undefined;

const defineProperty = Object.defineProperty;

const seal = Object.seal;

const Default = (
	/*! j-globals: default (internal) */
	function Default (exports, addOnOrigin) {
		return /*#__PURE__*/ function Module (exports, addOnOrigin) {
			if ( !addOnOrigin ) { addOnOrigin = exports; exports = create(NULL); }
			if ( assign ) { assign(exports, addOnOrigin); }
			else { for ( var key in addOnOrigin ) { if ( hasOwnProperty.call(addOnOrigin, key) ) { exports[key] = addOnOrigin[key]; } } }
			exports['default'] = exports;
			typeof exports==='function' && exports.prototype && seal(exports.prototype);
			if ( toStringTag ) {
				var descriptor = create(NULL);
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
	const OPTIONS = create(NULL)       ;
	for ( let level = -1; level<=9; ++level ) {
		OPTIONS[level] = Null({ level, memLevel: 9 });
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

export default _export;
export { gzip, gzipAsync, gzipSync, unzip, unzipAsync, unzipSync, version };

/*¡ j-gzip */

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnNpb24/dGV4dCIsImV4cG9ydC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAnMi40LjAnOyIsImltcG9ydCB2ZXJzaW9uIGZyb20gJy4vdmVyc2lvbj90ZXh0JztcbmV4cG9ydCB7IHZlcnNpb24gfTtcblxuY29uc3Qge1xuXHRnemlwU3luYzogemxpYl9nemlwU3luYyxcblx0Z3ppcDogemxpYl9nemlwLFxuXHR1bnppcFN5bmMsXG5cdHVuemlwLFxufSA9IC8qI19fUFVSRV9fKi8gcmVxdWlyZSgnemxpYicpO1xuXG5pbXBvcnQgUHJvbWlzZSBmcm9tICcuUHJvbWlzZSc7XG5cbmltcG9ydCBjcmVhdGUgZnJvbSAnLk9iamVjdC5jcmVhdGUnO1xuaW1wb3J0IE5VTEwgZnJvbSAnLm51bGwucHJvdG90eXBlJztcbmltcG9ydCBOdWxsIGZyb20gJy5udWxsJztcbmNvbnN0IE9QVElPTlMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IC8qI19fUFVSRV9fKi8gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBPUFRJT05TID0gY3JlYXRlKE5VTEwpICAgICAgIDtcblx0Zm9yICggbGV0IGxldmVsID0gLTE7IGxldmVsPD05OyArK2xldmVsICkge1xuXHRcdE9QVElPTlNbbGV2ZWxdID0gTnVsbCh7IGxldmVsLCBtZW1MZXZlbDogOSB9KTtcblx0fVxuXHRyZXR1cm4gT1BUSU9OUztcbn0oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGd6aXBBc3luYyAoZGF0YSAgICAgICAgICAgICAgICAgLCBsZXZlbCAgICAgICApICAgICAgICAgICAgICAgICAge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZXhlY3V0b3IgKHJlc29sdmUgICAgICAgICAgICAgICAgICAgICAgICAsIHJlamVjdCAgICAgICAgICAgICAgICAgICAgICAgICkgICAgICAge1xuXHRcdHpsaWJfZ3ppcChkYXRhLCBPUFRJT05TW2xldmVsXSwgZnVuY3Rpb24gY2FsbGJhY2sgKGVycm9yICAgICAgICwgZGF0YSAgICAgICAgKSAgICAgICB7XG5cdFx0XHRlcnJvcj09PW51bGwgPyByZXNvbHZlKGRhdGEpIDogcmVqZWN0KGVycm9yKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnemlwU3luYyAoZGF0YSAgICAgICAgICAgICAgICAgLCBsZXZlbCAgICAgICApICAgICAgICAge1xuXHRyZXR1cm4gemxpYl9nemlwU3luYyhkYXRhLCBPUFRJT05TW2xldmVsXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnemlwIChkYXRhICAgICAgICAgICAgICAgICAsIGxldmVsICAgICAgICwgY2FsbGJhY2sgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAgICAgICB7XG5cdHpsaWJfZ3ppcChkYXRhLCBPUFRJT05TW2xldmVsXSwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW56aXBBc3luYyAoZGF0YSAgICAgICAgKSAgICAgICAgICAgICAgICAgIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGV4ZWN1dG9yIChyZXNvbHZlICAgICAgICAgICAgICAgICAgICAgICAgLCByZWplY3QgICAgICAgICAgICAgICAgICAgICAgICApICAgICAgIHtcblx0XHR1bnppcChkYXRhLCBmdW5jdGlvbiBjYWxsYmFjayAoZXJyb3IgICAgICAgLCBkYXRhICAgICAgICApICAgICAgIHtcblx0XHRcdGVycm9yPT09bnVsbCA/IHJlc29sdmUoZGF0YSkgOiByZWplY3QoZXJyb3IpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZXhwb3J0IHsgdW56aXBTeW5jLCB1bnppcCB9O1xuXG5pbXBvcnQgRGVmYXVsdCBmcm9tICcuZGVmYXVsdCc7XG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0KHtcblx0dmVyc2lvbixcblx0Z3ppcEFzeW5jLFxuXHRnemlwU3luYyxcblx0Z3ppcCxcblx0dW56aXBBc3luYyxcblx0dW56aXBTeW5jLFxuXHR1bnppcCxcbn0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxnQkFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUFDLHhCQ0dsQixNQUFDO0NBQ0wsUUFBUSxFQUFFLGFBQWE7Q0FDdkIsSUFBSSxFQUFFLFNBQVM7Q0FDZixTQUFTO0NBQ1QsS0FBSztDQUNMLGlCQUFpQixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbEMsQUFNQSxNQUFNLE9BQU8sc0VBQXNFLFlBQVk7Q0FDOUYsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRO0NBQ3BDLE1BQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssR0FBRztFQUN6QyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzlDO0NBQ0QsT0FBTyxPQUFPLENBQUM7Q0FDZixFQUFFLENBQUM7O0FBRUosQUFBTyxTQUFTLFNBQVMsRUFBRSxJQUFJLG1CQUFtQixLQUFLLDBCQUEwQjtDQUNoRixPQUFPLElBQUksT0FBTyxDQUFDLFNBQVMsUUFBUSxFQUFFLE9BQU8sMEJBQTBCLE1BQU0sZ0NBQWdDO0VBQzVHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLFNBQVMsUUFBUSxFQUFFLEtBQUssU0FBUyxJQUFJLGdCQUFnQjtHQUNwRixLQUFLLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7R0FDN0MsQ0FBQyxDQUFDO0VBQ0gsQ0FBQyxDQUFDO0NBQ0g7O0FBRUQsQUFBTyxTQUFTLFFBQVEsRUFBRSxJQUFJLG1CQUFtQixLQUFLLGlCQUFpQjtDQUN0RSxPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FDM0M7O0FBRUQsQUFBTyxTQUFTLElBQUksRUFBRSxJQUFJLG1CQUFtQixLQUFLLFNBQVMsUUFBUSxxRUFBcUU7Q0FDdkksU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7Q0FDMUM7O0FBRUQsQUFBTyxTQUFTLFVBQVUsRUFBRSxJQUFJLDJCQUEyQjtDQUMxRCxPQUFPLElBQUksT0FBTyxDQUFDLFNBQVMsUUFBUSxFQUFFLE9BQU8sMEJBQTBCLE1BQU0sZ0NBQWdDO0VBQzVHLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxRQUFRLEVBQUUsS0FBSyxTQUFTLElBQUksZ0JBQWdCO0dBQ2hFLEtBQUssR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUM3QyxDQUFDLENBQUM7RUFDSCxDQUFDLENBQUM7Q0FDSDtBQUNELEFBSUEsZ0JBQWUsT0FBTyxDQUFDO0NBQ3RCLE9BQU87Q0FDUCxTQUFTO0NBQ1QsUUFBUTtDQUNSLElBQUk7Q0FDSixVQUFVO0NBQ1YsU0FBUztDQUNULEtBQUs7Q0FDTCxDQUFDLENBQUM7Ozs7Ozs7OzsiLCJzb3VyY2VSb290IjoiLi4vLi4vc3JjLyJ9