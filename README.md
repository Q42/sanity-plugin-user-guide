[![https://nodei.co/npm/@q42/sanity-plugin-user-guide.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/@q42/sanity-plugin-user-guide.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@q42/sanity-plugin-user-guide)

# sanity-plugin-user-guide

> This is a **Sanity Studio v3** plugin.

## Installation

```sh
npm install sanity-plugin-user-guide
```

## Usage

Define your page structure for the user guide:

```ts
const userGuideStructure = defineUserGuide([
  page().title('Home').markdown(home).icon(HomeIcon),
  divider(),
  page().title('ContactPage').markdown(contactPage).icon(CommentIcon).documentType('contactPage'),
  multiPage().title('ContentPage').icon(DocumentIcon).pages([
    page().title('Creating a content page').markdown(creatingAContentPage).documentType(contentPage),
    page().title('Content Blocks').markdown(contentBlocks),
    page().title('Uploading media').markdown(uploadingMedia),
  ]),
]);
```

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import {defineConfig} from 'sanity'
import {userGuidePlugin} from 'sanity-plugin-user-guide'

export default defineConfig({
  //...
  plugins: [userGuidePlugin({userGuideStructure})],
})
```

## API Reference

The plugin uses a StructureBuilder-like API to define the user guide structure in a similar way to how you would define the CMS structure. Currently, the following methods are available:

### Page

A single page in the user guide. To describe the content of the page, you can use either markdown or a react component.

example:

```ts
page().title('Home').markdown(home).icon(HomeIcon).documentType('home')
```

| Methods                                                                                                                                                              |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **title(title)**<br/><br/>Sets the title of the page.<br/><br/>Parameters:<br/>**title**: string                                                                     |
| **slug(slug)**<br/><br/>Sets the slug of the page. Uses the title by default.<br/><br/>Parameters:<br/>**slug**: string                                              |
| **markdown(markdown)**<br/><br/>Sets the content of the page using markdown.<br/><br/>Parameters:<br/>**markdown**: string                                           |
| **component(component)**<br/><br/>Sets the content of the page using a React component.<br/><br/>Parameters:<br/>**component**: FunctionComponent                    |
| **icon(icon)**<br/><br/>Sets an Icon for this page in the page tree.<br/><br/>Parameters:<br/>**icon**: FunctionComponent                                            |
| **documentType(documentType)**<br/><br/>Selects one or multiple document types that link to this page.<br/><br/>Parameters:<br/>**documentType**: string \| string[] |
| **documentId(documentId)**<br/><br/>Selects one or multiple document IDs that link to this page.<br/><br/>Parameters:<br/>**documentId**: string \| string[]         |

### Multi Page

A page that contains multiple subpages. This is useful for splitting up a large topic into multiple steps.

example:

```ts
multiPage().title('ContentPage').icon(DocumentIcon).pages([
  page().title('Creating a content page').markdown(creatingAContentPage).documentType(contentPage),
  page().title('Content Blocks').markdown(contentBlocks),
  page().title('Uploading media').markdown(uploadingMedia),
])
```

| Methods                                                                                                                                                                                      |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **title(title)**<br/><br/>Sets the title of the page.<br/><br/>Parameters:<br/>**title**: string                                                                                             |
| **slug(slug)**<br/><br/>Sets the slug of the page. Uses the title by default.<br/><br/>Parameters:<br/>**slug**: string                                                                      |
| **pages(pages)**<br/><br/>Set the pages to be displayed within this multi page. You can use the page method above to generate these pages.<br/><br/>Parameters:<br/>**pages**: PageBuilder[] |
| **icon(icon)**<br/><br/>Sets an Icon for this page in the page tree.<br/><br/>Parameters:<br/>**icon**: FunctionComponent                                                                    |

### Divider

A simple divider in the user guide tree to separate groups of pages. This has no additional methods.

example:

```ts
divider()
```

## License

[MIT](LICENSE) © Q42

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.
