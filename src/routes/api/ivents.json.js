// history.json
export const get = async () => {
	const allHistoryFiles = import.meta.globEager('../ivent/**/*.md');
	const iterablePostFiles = Object.entries(allHistoryFiles);
	const histories = iterablePostFiles.map(([path, file]) => {
		const historyRoute = path.slice(2, -3);
		return {
			metadata: file.metadata,
			url: historyRoute
		};
	});

	return {
		body: histories
	};
};
