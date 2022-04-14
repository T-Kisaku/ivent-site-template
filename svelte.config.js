/**
 * Basic configuration is according below url
 * https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog#:~:text=and%20modify%20the%20code%20like%20so
 */

import mdsvexConfig from './mdsvex.config.js';
import { mdsvex } from 'mdsvex';
// import vercel from '@sveltejs/adapter-vercel';
import netlify from '@sveltejs/adapter-netlify';
import vitePluginString from 'vite-plugin-string';
import { svelteSVG } from 'rollup-plugin-svelte-svg';

import preprocess from 'svelte-preprocess';

import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsvex(mdsvexConfig), preprocess()],

	kit: {
		adapter: netlify(),
		vite: {
			plugins: [
				// If you execute without default, it occure error
				vitePluginString.default(),
				svelteSVG({
					// optional SVGO options
					// pass empty object to enable defaults
					svgo: {},
					// vite-specific
					// https://vitejs.dev/guide/api-plugin.html#plugin-ordering
					// enforce: 'pre' | 'post'
					enforce: 'pre'
				})
			],
			resolve: {
				alias: {
					// these are the aliases and paths to them
					'@': path.resolve('.')
				}
			},
			optimizeDeps: {
				entries: []
			}
		}
	}
};

export default config;
