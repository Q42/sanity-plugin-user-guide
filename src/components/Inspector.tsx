import {CloseIcon, LaunchIcon} from '@sanity/icons'
import {Box, Button, Card, Flex, Text, Tooltip} from '@sanity/ui'
import {FunctionComponent, useMemo} from 'react'
import type {DocumentInspectorProps} from 'sanity'

import {UserGuidePage} from '../builder/nodes/page'
import {getDocumentPage} from '../documentInspector'
import {getHref} from '../utils/structureUtils'
import {Page} from './Page'

type InspectorProps = DocumentInspectorProps & {
  pages: UserGuidePage[]
}

export const Inspector: FunctionComponent<InspectorProps> = ({
  pages,
  documentType,
  documentId,
  onClose,
}) => {
  const activePage = useMemo(
    () => getDocumentPage(documentId, documentType, pages),
    [documentId, documentType, pages],
  )

  if (!activePage) return <></>

  return (
    <Flex height="fill" padding={4} overflow="auto" direction="column">
      <Flex align="center" paddingY={2}>
        <Card flex={1}>
          <Text size={2} weight="bold" muted>
            User guide
          </Text>
        </Card>
        <Tooltip
          content={
            <Box padding={2}>
              <Text size={1}>Open in guide</Text>
            </Box>
          }
          placement="bottom"
        >
          <Button
            icon={LaunchIcon}
            as="a"
            mode="bleed"
            padding={2}
            href={getHref(activePage)}
            style={{cursor: 'pointer'}}
          />
        </Tooltip>
        <Tooltip
          content={
            <Box padding={2}>
              <Text size={1}>Close pane</Text>
            </Box>
          }
          placement="bottom"
          fallbackPlacements={['bottom-end', 'bottom-start']}
        >
          <Button
            icon={CloseIcon}
            mode="bleed"
            padding={2}
            onClick={onClose}
            style={{cursor: 'pointer'}}
          />
        </Tooltip>
      </Flex>
      <Page page={activePage} />
    </Flex>
  )
}
