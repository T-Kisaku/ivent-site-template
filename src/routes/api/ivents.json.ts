import type { RequestHandler } from "@sveltejs/kit";

import {convertMd} from '@/src/lib/markdown'

// ivents.json
export const get: RequestHandler = async () => {
	const mdFileObj = import.meta.globEager('../../../__data/ivents/*.md'),
		mdFileList = []

	for (const filePath of Object.keys(mdFileObj)) {
		const rawMd = mdFileObj[filePath].default
		mdFileList.push(await  convertMd(rawMd))
	}

	return {
		body: JSON.stringify(mdFileList)
	};
};
