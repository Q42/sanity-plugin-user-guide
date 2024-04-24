import type {ElementType} from 'react'
import {FunctionComponent} from 'react'
import {PreviewCard, SanityDefaultPreview} from 'sanity'
import {useStateLink} from 'sanity/router'

export type PageLinkProps = {
  page: string
  subPage?: string
  title: string
  selected: boolean
  icon?: ElementType
}

export const PageLink: FunctionComponent<PageLinkProps> = ({
  page,
  subPage,
  title,
  selected,
  icon,
}) => {
  const {onClick, href} = useStateLink({
    state: {page, subPage},
  })

  return (
    <PreviewCard as="a" href={href} onClick={onClick} radius={2} selected={selected}>
      <SanityDefaultPreview title={title} icon={icon} />
    </PreviewCard>
  )
}
