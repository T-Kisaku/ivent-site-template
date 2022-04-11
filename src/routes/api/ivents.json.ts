import type { RequestHandler } from "@sveltejs/kit";
import type { Ivent } from "@/src/types/ivent";

import { convertMd } from '@/src/lib/markdown'

// ivents.json
export const get: RequestHandler = async ({ params }) => {
	const mdFileObj = import.meta.globEager('../../../__data/ivent/*.md'),
		mdFileList: Ivent[] = []

	for (const filePath of Object.keys(mdFileObj)) {
		const
			rawMd = mdFileObj[filePath].default,
			// Convert ../../../__data/ivent/*.md to /ivent/*
			url = filePath.slice(15, -3),
			converted = await convertMd(rawMd)
		mdFileList.push({
			url,
			...converted
		})
	}


	return {
		body: JSON.stringify(mdFileList)
	};
};
