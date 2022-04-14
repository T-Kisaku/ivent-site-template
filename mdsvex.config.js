import { defineMDSveXConfig as defineConfig } from 'mdsvex';

import remarkGithub from 'remark-github';
import remarkAbbr from 'remark-abbr';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
	extensions: ['.md', '.svx'],
	layout: './src/components/organizations/ArticleLayout.svelte',
	remarkPlugins: [
		[
			remarkGithub,
			{
				// Use your own repository
				repository: 'https://github.com/T-Kisaku/pomofai-svelte.git'
			}
		],
		remarkAbbr
	],
	rehypePlugins: [
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'wrap'
			}
		],
		rehypeExternalLinks
	]
});
