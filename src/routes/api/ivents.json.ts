import type { RequestHandler } from "@sveltejs/kit";

// ivents.json
export const get: RequestHandler = async () => {
	// https://vitejs.dev/guide/features.html#glob-import
	// console.log(ivents)
	const t = import.meta.glob('../../../__ivents/*.md')
	await Object.keys(t).map(async key => console.log( await t[key]()))
	console.log()
	// const allHistoryFiles = import.meta.globEager('../../../__ivents/*.md');
	// const iterablePostFiles = Object.entries(ivents);
	// const histories = iterablePostFiles.map(([path, file]) => {
	// 	const historyRoute = path.slice(2, -3);
	// 	return {
	// 		meta: file.metadata,
	// 		path: historyRoute
	// 	};
	// });

	return {
		// body: histories.filter((history) => (history.path !== '/history/data/template') && !history.path.startsWith('/history/data/wiki'))
		body: 'hi'
	};
};
