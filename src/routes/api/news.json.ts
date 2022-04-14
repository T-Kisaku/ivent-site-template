import type { News } from "@/src/types/markdown";
// news.json
export const get = async () => {
	const allNewsFiles = import.meta.globEager('../news/**/*.md');
	const iterableNewsFiles = Object.entries(allNewsFiles);
	const newsList: News[] = iterableNewsFiles.map(([path, file]) => {
		const url = path.slice(2, -3);
		return {
			metadata: file.metadata,
			url
		};
	});
	return {
		body: newsList
	};
};
