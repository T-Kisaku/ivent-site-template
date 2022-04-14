// history.json
export const get = async () => {
	const allIventFiles = import.meta.globEager('../ivent/**/*.md');
	const iterableIventFiles = Object.entries(allIventFiles);
	const ivents = iterableIventFiles.map(([path, file]) => {
		const historyRoute = path.slice(2, -3);
		return {
			metadata: file.metadata,
			url: historyRoute
		};
	});

	return {
		body: ivents
	};
};
