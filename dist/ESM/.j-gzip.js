/*!
 * 模块名称：j-gzip
 * 模块版本：2.1.0
 * 许可条款：LGPL-3.0
 * 所属作者：龙腾道 <LongTengDao@LongTengDao.com> (www.LongTengDao.com)
 * 问题反馈：https://GitHub.com/LongTengDao/j-gzip/issues
 * 项目主页：https://GitHub.com/LongTengDao/j-gzip/
 */

import Promise from '.Promise';
import create from '.Object.create';
import assign from '.Object.assign';
import Default from '.default';

const version = '2.1.0';

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnNpb24/dGV4dCIsImV4cG9ydC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAnMi4xLjAnOyIsImltcG9ydCB2ZXJzaW9uIGZyb20gJy4vdmVyc2lvbj90ZXh0JztcbmV4cG9ydCB7IHZlcnNpb24gfTtcblxuY29uc3Qge1xuXHRnemlwU3luYzogemxpYl9nemlwU3luYyxcblx0Z3ppcDogemxpYl9nemlwLFxuXHR1bnppcFN5bmMsXG5cdHVuemlwLFxufSA9IC8qI19fUFVSRV9fKi8gcmVxdWlyZSgnemxpYicpO1xuXG5pbXBvcnQgUHJvbWlzZSBmcm9tICcuUHJvbWlzZSc7XG5cbmltcG9ydCBjcmVhdGUgZnJvbSAnLk9iamVjdC5jcmVhdGUnO1xuaW1wb3J0IGFzc2lnbiBmcm9tICcuT2JqZWN0LmFzc2lnbic7XG5jb25zdCBPUFRJT05TICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAvKiNfX1BVUkVfXyovIGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgT1BUSU9OUyA9IGNyZWF0ZShudWxsKTtcblx0Zm9yICggbGV0IGxldmVsICAgICAgICA9IDE7IGxldmVsPD05OyArK2xldmVsICkge1xuXHRcdE9QVElPTlNbbGV2ZWxdID0gYXNzaWduKGNyZWF0ZShudWxsKSwgeyBsZXZlbCwgbWVtTGV2ZWw6IDkgfSk7XG5cdH1cblx0cmV0dXJuIE9QVElPTlM7XG59KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnemlwQXN5bmMgKGRhdGEgICAgICAgICAgICAgICAgICwgbGV2ZWwgICAgICAgKSAgICAgICAgICAgICAgICAgIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGV4ZWN1dG9yIChyZXNvbHZlICAgICAgICAgICAgICAgICAgICAgICAgLCByZWplY3QgICAgICAgICAgICAgICAgICAgICAgICApICAgICAgIHtcblx0XHR6bGliX2d6aXAoZGF0YSwgT1BUSU9OU1tsZXZlbF0sIGZ1bmN0aW9uIGNhbGxiYWNrIChlcnJvciAgICAgICAsIGRhdGEgICAgICAgICkgICAgICAge1xuXHRcdFx0ZXJyb3I9PT1udWxsID8gcmVzb2x2ZShkYXRhKSA6IHJlamVjdChlcnJvcik7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3ppcFN5bmMgKGRhdGEgICAgICAgICAgICAgICAgICwgbGV2ZWwgICAgICAgKSAgICAgICAgIHtcblx0cmV0dXJuIHpsaWJfZ3ppcFN5bmMoZGF0YSwgT1BUSU9OU1tsZXZlbF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3ppcCAoZGF0YSAgICAgICAgICAgICAgICAgLCBsZXZlbCAgICAgICAsIGNhbGxiYWNrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgICAgICAge1xuXHR6bGliX2d6aXAoZGF0YSwgT1BUSU9OU1tsZXZlbF0sIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuemlwQXN5bmMgKGRhdGEgICAgICAgICkgICAgICAgICAgICAgICAgICB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBleGVjdXRvciAocmVzb2x2ZSAgICAgICAgICAgICAgICAgICAgICAgICwgcmVqZWN0ICAgICAgICAgICAgICAgICAgICAgICAgKSAgICAgICB7XG5cdFx0dW56aXAoZGF0YSwgZnVuY3Rpb24gY2FsbGJhY2sgKGVycm9yICAgICAgICwgZGF0YSAgICAgICAgKSAgICAgICB7XG5cdFx0XHRlcnJvcj09PW51bGwgPyByZXNvbHZlKGRhdGEpIDogcmVqZWN0KGVycm9yKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmV4cG9ydCB7IHVuemlwU3luYywgdW56aXAgfTtcblxuaW1wb3J0IERlZmF1bHQgZnJvbSAnLmRlZmF1bHQnO1xuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdCh7XG5cdHZlcnNpb24sXG5cdGd6aXBBc3luYyxcblx0Z3ppcFN5bmMsXG5cdGd6aXAsXG5cdHVuemlwQXN5bmMsXG5cdHVuemlwU3luYyxcblx0dW56aXAsXG59KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQkFBZSxPQUFPOzt3QkFBQyx4QkNHbEIsTUFBQztDQUNMLFFBQVEsRUFBRSxhQUFhO0NBQ3ZCLElBQUksRUFBRSxTQUFTO0NBQ2YsU0FBUztDQUNULEtBQUs7Q0FDTCxpQkFBaUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLEFBS0EsTUFBTSxPQUFPLHNFQUFzRSxZQUFZO0NBQzlGLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUM3QixNQUFNLElBQUksS0FBSyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxHQUFHO0VBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzlEO0NBQ0QsT0FBTyxPQUFPLENBQUM7Q0FDZixFQUFFLENBQUM7O0FBRUosQUFBTyxTQUFTLFNBQVMsRUFBRSxJQUFJLG1CQUFtQixLQUFLLDBCQUEwQjtDQUNoRixPQUFPLElBQUksT0FBTyxDQUFDLFNBQVMsUUFBUSxFQUFFLE9BQU8sMEJBQTBCLE1BQU0sZ0NBQWdDO0VBQzVHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLFNBQVMsUUFBUSxFQUFFLEtBQUssU0FBUyxJQUFJLGdCQUFnQjtHQUNwRixLQUFLLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7R0FDN0MsQ0FBQyxDQUFDO0VBQ0gsQ0FBQyxDQUFDO0NBQ0g7O0FBRUQsQUFBTyxTQUFTLFFBQVEsRUFBRSxJQUFJLG1CQUFtQixLQUFLLGlCQUFpQjtDQUN0RSxPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FDM0M7O0FBRUQsQUFBTyxTQUFTLElBQUksRUFBRSxJQUFJLG1CQUFtQixLQUFLLFNBQVMsUUFBUSxxRUFBcUU7Q0FDdkksU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7Q0FDMUM7O0FBRUQsQUFBTyxTQUFTLFVBQVUsRUFBRSxJQUFJLDJCQUEyQjtDQUMxRCxPQUFPLElBQUksT0FBTyxDQUFDLFNBQVMsUUFBUSxFQUFFLE9BQU8sMEJBQTBCLE1BQU0sZ0NBQWdDO0VBQzVHLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxRQUFRLEVBQUUsS0FBSyxTQUFTLElBQUksZ0JBQWdCO0dBQ2hFLEtBQUssR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUM3QyxDQUFDLENBQUM7RUFDSCxDQUFDLENBQUM7Q0FDSDtBQUNELEFBSUEsZ0JBQWUsT0FBTyxDQUFDO0NBQ3RCLE9BQU87Q0FDUCxTQUFTO0NBQ1QsUUFBUTtDQUNSLElBQUk7Q0FDSixVQUFVO0NBQ1YsU0FBUztDQUNULEtBQUs7Q0FDTCxDQUFDLENBQUM7Ozs7Ozs7OzsiLCJzb3VyY2VSb290IjoiLi4vLi4vc3JjLyJ9