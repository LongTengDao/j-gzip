/*!
 * 模块名称：j-gzip
 * 模块版本：2.4.0
 * 许可条款：LGPL-3.0
 * 所属作者：龙腾道 <LongTengDao@LongTengDao.com> (www.LongTengDao.com)
 * 问题反馈：https://GitHub.com/LongTengDao/j-gzip/issues
 * 项目主页：https://GitHub.com/LongTengDao/j-gzip/
 */

import Promise from '.Promise';
import create from '.Object.create';
import NULL from '.null.prototype';
import Null from '.null';
import Default from '.default';

const version = '2.4.0';

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnNpb24/dGV4dCIsImV4cG9ydC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAnMi40LjAnOyIsImltcG9ydCB2ZXJzaW9uIGZyb20gJy4vdmVyc2lvbj90ZXh0JztcbmV4cG9ydCB7IHZlcnNpb24gfTtcblxuY29uc3Qge1xuXHRnemlwU3luYzogemxpYl9nemlwU3luYyxcblx0Z3ppcDogemxpYl9nemlwLFxuXHR1bnppcFN5bmMsXG5cdHVuemlwLFxufSA9IC8qI19fUFVSRV9fKi8gcmVxdWlyZSgnemxpYicpO1xuXG5pbXBvcnQgUHJvbWlzZSBmcm9tICcuUHJvbWlzZSc7XG5cbmltcG9ydCBjcmVhdGUgZnJvbSAnLk9iamVjdC5jcmVhdGUnO1xuaW1wb3J0IE5VTEwgZnJvbSAnLm51bGwucHJvdG90eXBlJztcbmltcG9ydCBOdWxsIGZyb20gJy5udWxsJztcbmNvbnN0IE9QVElPTlMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IC8qI19fUFVSRV9fKi8gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBPUFRJT05TID0gY3JlYXRlKE5VTEwpICAgICAgIDtcblx0Zm9yICggbGV0IGxldmVsID0gLTE7IGxldmVsPD05OyArK2xldmVsICkge1xuXHRcdE9QVElPTlNbbGV2ZWxdID0gTnVsbCh7IGxldmVsLCBtZW1MZXZlbDogOSB9KTtcblx0fVxuXHRyZXR1cm4gT1BUSU9OUztcbn0oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGd6aXBBc3luYyAoZGF0YSAgICAgICAgICAgICAgICAgLCBsZXZlbCAgICAgICApICAgICAgICAgICAgICAgICAge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZXhlY3V0b3IgKHJlc29sdmUgICAgICAgICAgICAgICAgICAgICAgICAsIHJlamVjdCAgICAgICAgICAgICAgICAgICAgICAgICkgICAgICAge1xuXHRcdHpsaWJfZ3ppcChkYXRhLCBPUFRJT05TW2xldmVsXSwgZnVuY3Rpb24gY2FsbGJhY2sgKGVycm9yICAgICAgICwgZGF0YSAgICAgICAgKSAgICAgICB7XG5cdFx0XHRlcnJvcj09PW51bGwgPyByZXNvbHZlKGRhdGEpIDogcmVqZWN0KGVycm9yKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnemlwU3luYyAoZGF0YSAgICAgICAgICAgICAgICAgLCBsZXZlbCAgICAgICApICAgICAgICAge1xuXHRyZXR1cm4gemxpYl9nemlwU3luYyhkYXRhLCBPUFRJT05TW2xldmVsXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnemlwIChkYXRhICAgICAgICAgICAgICAgICAsIGxldmVsICAgICAgICwgY2FsbGJhY2sgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAgICAgICB7XG5cdHpsaWJfZ3ppcChkYXRhLCBPUFRJT05TW2xldmVsXSwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW56aXBBc3luYyAoZGF0YSAgICAgICAgKSAgICAgICAgICAgICAgICAgIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGV4ZWN1dG9yIChyZXNvbHZlICAgICAgICAgICAgICAgICAgICAgICAgLCByZWplY3QgICAgICAgICAgICAgICAgICAgICAgICApICAgICAgIHtcblx0XHR1bnppcChkYXRhLCBmdW5jdGlvbiBjYWxsYmFjayAoZXJyb3IgICAgICAgLCBkYXRhICAgICAgICApICAgICAgIHtcblx0XHRcdGVycm9yPT09bnVsbCA/IHJlc29sdmUoZGF0YSkgOiByZWplY3QoZXJyb3IpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZXhwb3J0IHsgdW56aXBTeW5jLCB1bnppcCB9O1xuXG5pbXBvcnQgRGVmYXVsdCBmcm9tICcuZGVmYXVsdCc7XG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0KHtcblx0dmVyc2lvbixcblx0Z3ppcEFzeW5jLFxuXHRnemlwU3luYyxcblx0Z3ppcCxcblx0dW56aXBBc3luYyxcblx0dW56aXBTeW5jLFxuXHR1bnppcCxcbn0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQkFBZSxPQUFPOzt3QkFBQyx4QkNHbEIsTUFBQztDQUNMLFFBQVEsRUFBRSxhQUFhO0NBQ3ZCLElBQUksRUFBRSxTQUFTO0NBQ2YsU0FBUztDQUNULEtBQUs7Q0FDTCxpQkFBaUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLEFBTUEsTUFBTSxPQUFPLHNFQUFzRSxZQUFZO0NBQzlGLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTtDQUNwQyxNQUFNLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLEdBQUc7RUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUM5QztDQUNELE9BQU8sT0FBTyxDQUFDO0NBQ2YsRUFBRSxDQUFDOztBQUVKLEFBQU8sU0FBUyxTQUFTLEVBQUUsSUFBSSxtQkFBbUIsS0FBSywwQkFBMEI7Q0FDaEYsT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLFFBQVEsRUFBRSxPQUFPLDBCQUEwQixNQUFNLGdDQUFnQztFQUM1RyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLFFBQVEsRUFBRSxLQUFLLFNBQVMsSUFBSSxnQkFBZ0I7R0FDcEYsS0FBSyxHQUFHLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQzdDLENBQUMsQ0FBQztFQUNILENBQUMsQ0FBQztDQUNIOztBQUVELEFBQU8sU0FBUyxRQUFRLEVBQUUsSUFBSSxtQkFBbUIsS0FBSyxpQkFBaUI7Q0FDdEUsT0FBTyxhQUFhLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBQzNDOztBQUVELEFBQU8sU0FBUyxJQUFJLEVBQUUsSUFBSSxtQkFBbUIsS0FBSyxTQUFTLFFBQVEscUVBQXFFO0NBQ3ZJLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0NBQzFDOztBQUVELEFBQU8sU0FBUyxVQUFVLEVBQUUsSUFBSSwyQkFBMkI7Q0FDMUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLFFBQVEsRUFBRSxPQUFPLDBCQUEwQixNQUFNLGdDQUFnQztFQUM1RyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsUUFBUSxFQUFFLEtBQUssU0FBUyxJQUFJLGdCQUFnQjtHQUNoRSxLQUFLLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7R0FDN0MsQ0FBQyxDQUFDO0VBQ0gsQ0FBQyxDQUFDO0NBQ0g7QUFDRCxBQUlBLGdCQUFlLE9BQU8sQ0FBQztDQUN0QixPQUFPO0NBQ1AsU0FBUztDQUNULFFBQVE7Q0FDUixJQUFJO0NBQ0osVUFBVTtDQUNWLFNBQVM7Q0FDVCxLQUFLO0NBQ0wsQ0FBQyxDQUFDOzs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6Ii4uLy4uL3NyYy8ifQ==