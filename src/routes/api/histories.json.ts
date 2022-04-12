/**
 * このAPIはivents.json.tsとほとんど同じロジック。
 * 違うのは28行目の比較式
 */

import type { RequestHandler } from "@sveltejs/kit";
import type { Ivent } from "@/src/types/ivent";

import { convertMd } from '@/src/lib/markdown'


// ivents.json
export const get: RequestHandler = async ({ params }) => {
	const mdFileObj = import.meta.globEager('../../../static/ivent/*.md'),
		mdFileList: Ivent[] = []

	const yesterday = new Date((new Date()).valueOf() - 1000*60*60*24);

	for (const filePath of Object.keys(mdFileObj)) {
		const
			rawMd = mdFileObj[filePath].default,
			// Convert ../../../static/ivent/*.md to /ivent/*
			url = filePath.slice(15, -3),
			converted = await convertMd(rawMd)

		if(yesterday > new Date(converted.metadata.eventDate)){
			mdFileList.push({
				url,
				...converted
			})
		}
	}


	return {
		body: JSON.stringify(mdFileList)
	};
};
