/*!
 * 模块名称：j-gzip
 * 模块版本：2.1.0
 * 许可条款：LGPL-3.0
 * 所属作者：龙腾道 <LongTengDao@LongTengDao.com> (www.LongTengDao.com)
 * 问题反馈：https://GitHub.com/LongTengDao/j-gzip/issues
 * 项目主页：https://GitHub.com/LongTengDao/j-gzip/
 */

const version = '2.1.0';

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

export default _export;
export { gzip, gzipAsync, gzipSync, unzip, unzipAsync, unzipSync, version };

/*¡ j-gzip */

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnNpb24/dGV4dCIsImV4cG9ydC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAnMi4xLjAnOyIsImltcG9ydCB2ZXJzaW9uIGZyb20gJy4vdmVyc2lvbj90ZXh0JztcbmV4cG9ydCB7IHZlcnNpb24gfTtcblxuY29uc3Qge1xuXHRnemlwU3luYzogemxpYl9nemlwU3luYyxcblx0Z3ppcDogemxpYl9nemlwLFxuXHR1bnppcFN5bmMsXG5cdHVuemlwLFxufSA9IC8qI19fUFVSRV9fKi8gcmVxdWlyZSgnemxpYicpO1xuXG5pbXBvcnQgUHJvbWlzZSBmcm9tICcuUHJvbWlzZSc7XG5cbmltcG9ydCBjcmVhdGUgZnJvbSAnLk9iamVjdC5jcmVhdGUnO1xuaW1wb3J0IGFzc2lnbiBmcm9tICcuT2JqZWN0LmFzc2lnbic7XG5jb25zdCBPUFRJT05TICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAvKiNfX1BVUkVfXyovIGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgT1BUSU9OUyA9IGNyZWF0ZShudWxsKTtcblx0Zm9yICggbGV0IGxldmVsICAgICAgICA9IDE7IGxldmVsPD05OyArK2xldmVsICkge1xuXHRcdE9QVElPTlNbbGV2ZWxdID0gYXNzaWduKGNyZWF0ZShudWxsKSwgeyBsZXZlbCwgbWVtTGV2ZWw6IDkgfSk7XG5cdH1cblx0cmV0dXJuIE9QVElPTlM7XG59KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnemlwQXN5bmMgKGRhdGEgICAgICAgICAgICAgICAgICwgbGV2ZWwgICAgICAgKSAgICAgICAgICAgICAgICAgIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGV4ZWN1dG9yIChyZXNvbHZlICAgICAgICAgICAgICAgICAgICAgICAgLCByZWplY3QgICAgICAgICAgICAgICAgICAgICAgICApICAgICAgIHtcblx0XHR6bGliX2d6aXAoZGF0YSwgT1BUSU9OU1tsZXZlbF0sIGZ1bmN0aW9uIGNhbGxiYWNrIChlcnJvciAgICAgICAsIGRhdGEgICAgICAgICkgICAgICAge1xuXHRcdFx0ZXJyb3I9PT1udWxsID8gcmVzb2x2ZShkYXRhKSA6IHJlamVjdChlcnJvcik7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3ppcFN5bmMgKGRhdGEgICAgICAgICAgICAgICAgICwgbGV2ZWwgICAgICAgKSAgICAgICAgIHtcblx0cmV0dXJuIHpsaWJfZ3ppcFN5bmMoZGF0YSwgT1BUSU9OU1tsZXZlbF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3ppcCAoZGF0YSAgICAgICAgICAgICAgICAgLCBsZXZlbCAgICAgICAsIGNhbGxiYWNrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgICAgICAge1xuXHR6bGliX2d6aXAoZGF0YSwgT1BUSU9OU1tsZXZlbF0sIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuemlwQXN5bmMgKGRhdGEgICAgICAgICkgICAgICAgICAgICAgICAgICB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBleGVjdXRvciAocmVzb2x2ZSAgICAgICAgICAgICAgICAgICAgICAgICwgcmVqZWN0ICAgICAgICAgICAgICAgICAgICAgICAgKSAgICAgICB7XG5cdFx0dW56aXAoZGF0YSwgZnVuY3Rpb24gY2FsbGJhY2sgKGVycm9yICAgICAgICwgZGF0YSAgICAgICAgKSAgICAgICB7XG5cdFx0XHRlcnJvcj09PW51bGwgPyByZXNvbHZlKGRhdGEpIDogcmVqZWN0KGVycm9yKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmV4cG9ydCB7IHVuemlwU3luYywgdW56aXAgfTtcblxuaW1wb3J0IERlZmF1bHQgZnJvbSAnLmRlZmF1bHQnO1xuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdCh7XG5cdHZlcnNpb24sXG5cdGd6aXBBc3luYyxcblx0Z3ppcFN5bmMsXG5cdGd6aXAsXG5cdHVuemlwQXN5bmMsXG5cdHVuemlwU3luYyxcblx0dW56aXAsXG59KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsZ0JBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUFDLHhCQ0dsQixNQUFDO0NBQ0wsUUFBUSxFQUFFLGFBQWE7Q0FDdkIsSUFBSSxFQUFFLFNBQVM7Q0FDZixTQUFTO0NBQ1QsS0FBSztDQUNMLGlCQUFpQixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbEMsQUFLQSxNQUFNLE9BQU8sc0VBQXNFLFlBQVk7Q0FDOUYsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQzdCLE1BQU0sSUFBSSxLQUFLLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLEdBQUc7RUFDL0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDOUQ7Q0FDRCxPQUFPLE9BQU8sQ0FBQztDQUNmLEVBQUUsQ0FBQzs7QUFFSixBQUFPLFNBQVMsU0FBUyxFQUFFLElBQUksbUJBQW1CLEtBQUssMEJBQTBCO0NBQ2hGLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxRQUFRLEVBQUUsT0FBTywwQkFBMEIsTUFBTSxnQ0FBZ0M7RUFDNUcsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsU0FBUyxRQUFRLEVBQUUsS0FBSyxTQUFTLElBQUksZ0JBQWdCO0dBQ3BGLEtBQUssR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUM3QyxDQUFDLENBQUM7RUFDSCxDQUFDLENBQUM7Q0FDSDs7QUFFRCxBQUFPLFNBQVMsUUFBUSxFQUFFLElBQUksbUJBQW1CLEtBQUssaUJBQWlCO0NBQ3RFLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztDQUMzQzs7QUFFRCxBQUFPLFNBQVMsSUFBSSxFQUFFLElBQUksbUJBQW1CLEtBQUssU0FBUyxRQUFRLHFFQUFxRTtDQUN2SSxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztDQUMxQzs7QUFFRCxBQUFPLFNBQVMsVUFBVSxFQUFFLElBQUksMkJBQTJCO0NBQzFELE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxRQUFRLEVBQUUsT0FBTywwQkFBMEIsTUFBTSxnQ0FBZ0M7RUFDNUcsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLFFBQVEsRUFBRSxLQUFLLFNBQVMsSUFBSSxnQkFBZ0I7R0FDaEUsS0FBSyxHQUFHLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQzdDLENBQUMsQ0FBQztFQUNILENBQUMsQ0FBQztDQUNIO0FBQ0QsQUFJQSxnQkFBZSxPQUFPLENBQUM7Q0FDdEIsT0FBTztDQUNQLFNBQVM7Q0FDVCxRQUFRO0NBQ1IsSUFBSTtDQUNKLFVBQVU7Q0FDVixTQUFTO0NBQ1QsS0FBSztDQUNMLENBQUMsQ0FBQzs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIuLi8uLi9zcmMvIn0=