import type { Ivent } from '@/src/types/markdown';

// history.json
export const get = async () => {
	const allIventFiles = import.meta.globEager('../ivent/**/*.md');
	const iterableIventFiles = Object.entries(allIventFiles);
	const ivents: Ivent[] = iterableIventFiles.map(([path, file]) => {
		const historyRoute = path.slice(2, -3);
		return {
			metadata: file.metadata,
			url: historyRoute
		};
	});

	const tommorow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
	return {
		body: ivents.filter((ivent) => tommorow < new Date(ivent.metadata.eventDate))
	};
};
