// history.json
export const get = async () => {
	const allHistoryFiles = import.meta.globEager('../history/data/**/*.md');
	const iterablePostFiles = Object.entries(allHistoryFiles);
	const histories = iterablePostFiles.map(([path, file]) => {
		const historyRoute = path.slice(2, -3);
		return {
			meta: file.metadata,
			path: historyRoute
		};
	});

	return {
		body: histories.filter((history) => history.path.startsWith('/history/data/wiki'))
	};
};
