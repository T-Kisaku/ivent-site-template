import config from '@/__data/config.json'

import type { RequestHandler } from "@sveltejs/kit";


// config.json
export const get: RequestHandler = async ({ params }) => {
	return {
		body: JSON.stringify(config)
	};
};
