/**
 * Basic configuration is according below url
 * https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog#:~:text=and%20modify%20the%20code%20like%20so
 */

import vercel from '@sveltejs/adapter-vercel';
import viteRawPlugin from 'vite-raw-plugin'
import { svelteSVG } from 'rollup-plugin-svelte-svg'

import preprocess from 'svelte-preprocess';

import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess()],

	kit: {
		adapter: vercel(),
		files: {
			assets: '__data',
		},
		vite: {
			plugins: [
				// If you execute without default, it occure error
				viteRawPlugin({ fileRegex: /\.md$/ }),
				svelteSVG({
					// optional SVGO options
					// pass empty object to enable defaults
					svgo: {},
					// vite-specific
					// https://vitejs.dev/guide/api-plugin.html#plugin-ordering
					// enforce: 'pre' | 'post'
					enforce: "pre",
				}),
			],
			resolve: {
				alias: {
					// these are the aliases and paths to them
					'@': path.resolve('.'),
				}
			},
			optimizeDeps: {
				entries: []
			},
			server: {
				fs: {
					allow: [
						path.resolve('./__data') + '/*',
						path.resolve('./__data/config.json?import')
					],
				}
			}
		}
	}
};

export default config;
