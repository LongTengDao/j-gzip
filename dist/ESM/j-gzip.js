/*!
 * 模块名称：j-gzip
 * 模块版本：2.3.0
 * 许可条款：LGPL-3.0
 * 所属作者：龙腾道 <LongTengDao@LongTengDao.com> (www.LongTengDao.com)
 * 问题反馈：https://GitHub.com/LongTengDao/j-gzip/issues
 * 项目主页：https://GitHub.com/LongTengDao/j-gzip/
 */

const version = '2.3.0';

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
	for ( let level        = -1; level<=9; ++level ) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnNpb24/dGV4dCIsImV4cG9ydC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAnMi4zLjAnOyIsImltcG9ydCB2ZXJzaW9uIGZyb20gJy4vdmVyc2lvbj90ZXh0JztcbmV4cG9ydCB7IHZlcnNpb24gfTtcblxuY29uc3Qge1xuXHRnemlwU3luYzogemxpYl9nemlwU3luYyxcblx0Z3ppcDogemxpYl9nemlwLFxuXHR1bnppcFN5bmMsXG5cdHVuemlwLFxufSA9IC8qI19fUFVSRV9fKi8gcmVxdWlyZSgnemxpYicpO1xuXG5pbXBvcnQgUHJvbWlzZSBmcm9tICcuUHJvbWlzZSc7XG5cbmltcG9ydCBjcmVhdGUgZnJvbSAnLk9iamVjdC5jcmVhdGUnO1xuaW1wb3J0IGFzc2lnbiBmcm9tICcuT2JqZWN0LmFzc2lnbic7XG5jb25zdCBPUFRJT05TICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAvKiNfX1BVUkVfXyovIGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgT1BUSU9OUyA9IGNyZWF0ZShudWxsKTtcblx0Zm9yICggbGV0IGxldmVsICAgICAgICA9IC0xOyBsZXZlbDw9OTsgKytsZXZlbCApIHtcblx0XHRPUFRJT05TW2xldmVsXSA9IGFzc2lnbihjcmVhdGUobnVsbCksIHsgbGV2ZWwsIG1lbUxldmVsOiA5IH0pO1xuXHR9XG5cdHJldHVybiBPUFRJT05TO1xufSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ3ppcEFzeW5jIChkYXRhICAgICAgICAgICAgICAgICAsIGxldmVsICAgICAgICkgICAgICAgICAgICAgICAgICB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBleGVjdXRvciAocmVzb2x2ZSAgICAgICAgICAgICAgICAgICAgICAgICwgcmVqZWN0ICAgICAgICAgICAgICAgICAgICAgICAgKSAgICAgICB7XG5cdFx0emxpYl9nemlwKGRhdGEsIE9QVElPTlNbbGV2ZWxdLCBmdW5jdGlvbiBjYWxsYmFjayAoZXJyb3IgICAgICAgLCBkYXRhICAgICAgICApICAgICAgIHtcblx0XHRcdGVycm9yPT09bnVsbCA/IHJlc29sdmUoZGF0YSkgOiByZWplY3QoZXJyb3IpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd6aXBTeW5jIChkYXRhICAgICAgICAgICAgICAgICAsIGxldmVsICAgICAgICkgICAgICAgICB7XG5cdHJldHVybiB6bGliX2d6aXBTeW5jKGRhdGEsIE9QVElPTlNbbGV2ZWxdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd6aXAgKGRhdGEgICAgICAgICAgICAgICAgICwgbGV2ZWwgICAgICAgLCBjYWxsYmFjayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICAgICAgIHtcblx0emxpYl9nemlwKGRhdGEsIE9QVElPTlNbbGV2ZWxdLCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnppcEFzeW5jIChkYXRhICAgICAgICApICAgICAgICAgICAgICAgICAge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZXhlY3V0b3IgKHJlc29sdmUgICAgICAgICAgICAgICAgICAgICAgICAsIHJlamVjdCAgICAgICAgICAgICAgICAgICAgICAgICkgICAgICAge1xuXHRcdHVuemlwKGRhdGEsIGZ1bmN0aW9uIGNhbGxiYWNrIChlcnJvciAgICAgICAsIGRhdGEgICAgICAgICkgICAgICAge1xuXHRcdFx0ZXJyb3I9PT1udWxsID8gcmVzb2x2ZShkYXRhKSA6IHJlamVjdChlcnJvcik7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5leHBvcnQgeyB1bnppcFN5bmMsIHVuemlwIH07XG5cbmltcG9ydCBEZWZhdWx0IGZyb20gJy5kZWZhdWx0JztcbmV4cG9ydCBkZWZhdWx0IERlZmF1bHQoe1xuXHR2ZXJzaW9uLFxuXHRnemlwQXN5bmMsXG5cdGd6aXBTeW5jLFxuXHRnemlwLFxuXHR1bnppcEFzeW5jLFxuXHR1bnppcFN5bmMsXG5cdHVuemlwLFxufSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGdCQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFBQyx4QkNHbEIsTUFBQztDQUNMLFFBQVEsRUFBRSxhQUFhO0NBQ3ZCLElBQUksRUFBRSxTQUFTO0NBQ2YsU0FBUztDQUNULEtBQUs7Q0FDTCxpQkFBaUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLEFBS0EsTUFBTSxPQUFPLHNFQUFzRSxZQUFZO0NBQzlGLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUM3QixNQUFNLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLEdBQUc7RUFDaEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDOUQ7Q0FDRCxPQUFPLE9BQU8sQ0FBQztDQUNmLEVBQUUsQ0FBQzs7QUFFSixBQUFPLFNBQVMsU0FBUyxFQUFFLElBQUksbUJBQW1CLEtBQUssMEJBQTBCO0NBQ2hGLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxRQUFRLEVBQUUsT0FBTywwQkFBMEIsTUFBTSxnQ0FBZ0M7RUFDNUcsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsU0FBUyxRQUFRLEVBQUUsS0FBSyxTQUFTLElBQUksZ0JBQWdCO0dBQ3BGLEtBQUssR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUM3QyxDQUFDLENBQUM7RUFDSCxDQUFDLENBQUM7Q0FDSDs7QUFFRCxBQUFPLFNBQVMsUUFBUSxFQUFFLElBQUksbUJBQW1CLEtBQUssaUJBQWlCO0NBQ3RFLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztDQUMzQzs7QUFFRCxBQUFPLFNBQVMsSUFBSSxFQUFFLElBQUksbUJBQW1CLEtBQUssU0FBUyxRQUFRLHFFQUFxRTtDQUN2SSxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztDQUMxQzs7QUFFRCxBQUFPLFNBQVMsVUFBVSxFQUFFLElBQUksMkJBQTJCO0NBQzFELE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxRQUFRLEVBQUUsT0FBTywwQkFBMEIsTUFBTSxnQ0FBZ0M7RUFDNUcsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLFFBQVEsRUFBRSxLQUFLLFNBQVMsSUFBSSxnQkFBZ0I7R0FDaEUsS0FBSyxHQUFHLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQzdDLENBQUMsQ0FBQztFQUNILENBQUMsQ0FBQztDQUNIO0FBQ0QsQUFJQSxnQkFBZSxPQUFPLENBQUM7Q0FDdEIsT0FBTztDQUNQLFNBQVM7Q0FDVCxRQUFRO0NBQ1IsSUFBSTtDQUNKLFVBQVU7Q0FDVixTQUFTO0NBQ1QsS0FBSztDQUNMLENBQUMsQ0FBQzs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIuLi8uLi9zcmMvIn0=