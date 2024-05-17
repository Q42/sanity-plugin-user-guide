import {FunctionComponent} from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import {UserGuidePage} from '../builder/nodes/page'
import {MarkdownStyle} from '../styled/markdown'

export const Page: FunctionComponent<{page: UserGuidePage}> = ({page}) => {
  if ('component' in page) {
    return <page.component />
  }

  return (
    <>
      <MarkdownStyle />
      <Markdown className="markdown" remarkPlugins={[remarkGfm]}>
        {page.markdown}
      </Markdown>
    </>
  )
}
