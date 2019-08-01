'use strict';

require('@ltd/j-dev')(__dirname+'/..')(async ({ build, 龙腾道, get }) => {
	await build({
		name: 'j-gzip',
		user: 'LongTengDao@ltd',
		Auth: 龙腾道,
		Copy: 'LGPL-3.0',
		semver: await get('src/version'),
		ES: 6,
		NPM: {
			description: 'gzip. Belong to "Plan J".／gzip。从属于“简计划”。',
		},
		ESM: true,
		LICENSE_: true,
	});
});
