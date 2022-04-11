import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import yaml from 'yaml'
import frontMatter from 'front-matter'

import type { Ivent } from '@/src/types/ivent'

export const convertMd = async (rawMarkdown: string)=> {
    const separated = frontMatter(rawMarkdown),
        metadata: Ivent['metadata'] = yaml.parse(separated.frontmatter),
        content = (await unified()
            .use(remarkParse)
            .use(remarkGfm)
            .use(remarkRehype)
            .use(rehypeStringify)
            .process(separated.body)).toString()

        return {
            metadata,
            content
        }

}