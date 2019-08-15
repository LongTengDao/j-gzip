/*!
 * 模块名称：j-gzip
 * 模块版本：2.3.0
 * 许可条款：LGPL-3.0
 * 所属作者：龙腾道 <LongTengDao@LongTengDao.com> (www.LongTengDao.com)
 * 问题反馈：https://GitHub.com/LongTengDao/j-gzip/issues
 * 项目主页：https://GitHub.com/LongTengDao/j-gzip/
 */

import Promise from '.Promise';
import create from '.Object.create';
import assign from '.Object.assign';
import Default from '.default';

const version = '2.3.0';

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnNpb24/dGV4dCIsImV4cG9ydC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAnMi4zLjAnOyIsImltcG9ydCB2ZXJzaW9uIGZyb20gJy4vdmVyc2lvbj90ZXh0JztcbmV4cG9ydCB7IHZlcnNpb24gfTtcblxuY29uc3Qge1xuXHRnemlwU3luYzogemxpYl9nemlwU3luYyxcblx0Z3ppcDogemxpYl9nemlwLFxuXHR1bnppcFN5bmMsXG5cdHVuemlwLFxufSA9IC8qI19fUFVSRV9fKi8gcmVxdWlyZSgnemxpYicpO1xuXG5pbXBvcnQgUHJvbWlzZSBmcm9tICcuUHJvbWlzZSc7XG5cbmltcG9ydCBjcmVhdGUgZnJvbSAnLk9iamVjdC5jcmVhdGUnO1xuaW1wb3J0IGFzc2lnbiBmcm9tICcuT2JqZWN0LmFzc2lnbic7XG5jb25zdCBPUFRJT05TICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAvKiNfX1BVUkVfXyovIGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgT1BUSU9OUyA9IGNyZWF0ZShudWxsKTtcblx0Zm9yICggbGV0IGxldmVsICAgICAgICA9IC0xOyBsZXZlbDw9OTsgKytsZXZlbCApIHtcblx0XHRPUFRJT05TW2xldmVsXSA9IGFzc2lnbihjcmVhdGUobnVsbCksIHsgbGV2ZWwsIG1lbUxldmVsOiA5IH0pO1xuXHR9XG5cdHJldHVybiBPUFRJT05TO1xufSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ3ppcEFzeW5jIChkYXRhICAgICAgICAgICAgICAgICAsIGxldmVsICAgICAgICkgICAgICAgICAgICAgICAgICB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBleGVjdXRvciAocmVzb2x2ZSAgICAgICAgICAgICAgICAgICAgICAgICwgcmVqZWN0ICAgICAgICAgICAgICAgICAgICAgICAgKSAgICAgICB7XG5cdFx0emxpYl9nemlwKGRhdGEsIE9QVElPTlNbbGV2ZWxdLCBmdW5jdGlvbiBjYWxsYmFjayAoZXJyb3IgICAgICAgLCBkYXRhICAgICAgICApICAgICAgIHtcblx0XHRcdGVycm9yPT09bnVsbCA/IHJlc29sdmUoZGF0YSkgOiByZWplY3QoZXJyb3IpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd6aXBTeW5jIChkYXRhICAgICAgICAgICAgICAgICAsIGxldmVsICAgICAgICkgICAgICAgICB7XG5cdHJldHVybiB6bGliX2d6aXBTeW5jKGRhdGEsIE9QVElPTlNbbGV2ZWxdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd6aXAgKGRhdGEgICAgICAgICAgICAgICAgICwgbGV2ZWwgICAgICAgLCBjYWxsYmFjayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICAgICAgIHtcblx0emxpYl9nemlwKGRhdGEsIE9QVElPTlNbbGV2ZWxdLCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnppcEFzeW5jIChkYXRhICAgICAgICApICAgICAgICAgICAgICAgICAge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZXhlY3V0b3IgKHJlc29sdmUgICAgICAgICAgICAgICAgICAgICAgICAsIHJlamVjdCAgICAgICAgICAgICAgICAgICAgICAgICkgICAgICAge1xuXHRcdHVuemlwKGRhdGEsIGZ1bmN0aW9uIGNhbGxiYWNrIChlcnJvciAgICAgICAsIGRhdGEgICAgICAgICkgICAgICAge1xuXHRcdFx0ZXJyb3I9PT1udWxsID8gcmVzb2x2ZShkYXRhKSA6IHJlamVjdChlcnJvcik7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5leHBvcnQgeyB1bnppcFN5bmMsIHVuemlwIH07XG5cbmltcG9ydCBEZWZhdWx0IGZyb20gJy5kZWZhdWx0JztcbmV4cG9ydCBkZWZhdWx0IERlZmF1bHQoe1xuXHR2ZXJzaW9uLFxuXHRnemlwQXN5bmMsXG5cdGd6aXBTeW5jLFxuXHRnemlwLFxuXHR1bnppcEFzeW5jLFxuXHR1bnppcFN5bmMsXG5cdHVuemlwLFxufSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0JBQWUsT0FBTzs7d0JBQUMseEJDR2xCLE1BQUM7Q0FDTCxRQUFRLEVBQUUsYUFBYTtDQUN2QixJQUFJLEVBQUUsU0FBUztDQUNmLFNBQVM7Q0FDVCxLQUFLO0NBQ0wsaUJBQWlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsQyxBQUtBLE1BQU0sT0FBTyxzRUFBc0UsWUFBWTtDQUM5RixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDN0IsTUFBTSxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxHQUFHO0VBQ2hELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzlEO0NBQ0QsT0FBTyxPQUFPLENBQUM7Q0FDZixFQUFFLENBQUM7O0FBRUosQUFBTyxTQUFTLFNBQVMsRUFBRSxJQUFJLG1CQUFtQixLQUFLLDBCQUEwQjtDQUNoRixPQUFPLElBQUksT0FBTyxDQUFDLFNBQVMsUUFBUSxFQUFFLE9BQU8sMEJBQTBCLE1BQU0sZ0NBQWdDO0VBQzVHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLFNBQVMsUUFBUSxFQUFFLEtBQUssU0FBUyxJQUFJLGdCQUFnQjtHQUNwRixLQUFLLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7R0FDN0MsQ0FBQyxDQUFDO0VBQ0gsQ0FBQyxDQUFDO0NBQ0g7O0FBRUQsQUFBTyxTQUFTLFFBQVEsRUFBRSxJQUFJLG1CQUFtQixLQUFLLGlCQUFpQjtDQUN0RSxPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FDM0M7O0FBRUQsQUFBTyxTQUFTLElBQUksRUFBRSxJQUFJLG1CQUFtQixLQUFLLFNBQVMsUUFBUSxxRUFBcUU7Q0FDdkksU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7Q0FDMUM7O0FBRUQsQUFBTyxTQUFTLFVBQVUsRUFBRSxJQUFJLDJCQUEyQjtDQUMxRCxPQUFPLElBQUksT0FBTyxDQUFDLFNBQVMsUUFBUSxFQUFFLE9BQU8sMEJBQTBCLE1BQU0sZ0NBQWdDO0VBQzVHLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxRQUFRLEVBQUUsS0FBSyxTQUFTLElBQUksZ0JBQWdCO0dBQ2hFLEtBQUssR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUM3QyxDQUFDLENBQUM7RUFDSCxDQUFDLENBQUM7Q0FDSDtBQUNELEFBSUEsZ0JBQWUsT0FBTyxDQUFDO0NBQ3RCLE9BQU87Q0FDUCxTQUFTO0NBQ1QsUUFBUTtDQUNSLElBQUk7Q0FDSixVQUFVO0NBQ1YsU0FBUztDQUNULEtBQUs7Q0FDTCxDQUFDLENBQUM7Ozs7Ozs7OzsiLCJzb3VyY2VSb290IjoiLi4vLi4vc3JjLyJ9