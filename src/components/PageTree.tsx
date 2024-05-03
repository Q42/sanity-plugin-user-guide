import {Card, Stack} from '@sanity/ui'
import {FunctionComponent} from 'react'

import {UserGuideNode} from '../builder'
import {PageLink} from './PageLink'

type PageTreeProps = {
  structure: UserGuideNode[]
  basePage?: string
  activeSlug?: string
}

export const PageTree: FunctionComponent<PageTreeProps> = ({structure, basePage, activeSlug}) => (
  <Stack as="ul" space={1}>
    {structure.map((node) => {
      switch (node._type) {
        case 'jsxPage':
        case 'markdownPage':
        case 'multiPage':
          return (
            <PageLink
              key={node._key}
              page={basePage ?? node.slug}
              subPage={basePage ? node.slug : undefined}
              title={node.title}
              selected={node.slug === activeSlug}
              icon={node.icon}
            />
          )
        case 'divider':
          return <Card key={node._key} borderBottom />
        default:
          return <></>
      }
    })}
  </Stack>
)
