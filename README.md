# sanity-plugin-user-guide

> This is a **Sanity Studio v3** plugin.

![image](https://github.com/Q42/sanity-plugin-user-guide/assets/24476678/ee440336-8a85-45ea-b8d9-4304e09e5648)

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
    page().title('Creating a content page').markdown(creatingAContentPage).documentType('contentPage'),
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


### Using Markdown files

If you want to import markdown files from a typescript file, you can add the following snippet to your `global.d.ts`.

```ts
declare module '*.md' {
  const content: string;
  export default content;
}
```

Then you can import the markdown file as a string:

```ts
import home from './home.md';
```

## API Reference

The plugin uses an API similar to Sanity's structure builder to define the user guide structure. Currently, the following methods are available:

### Page

A single page in the user guide. To describe the content of the page, you can use either markdown or a react component.

It is possible to link a page to document type(s) or id(s). This will add it to the user menu for those documents. Clicking the link will open the user guide in a side panel of the structure tool.

#### Example:

```ts
page().title('Home').markdown(home).icon(HomeIcon).documentType('home')
```

| Methods                       | Description                                                                                                                                                 |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **title(title)**              | Sets the title of the page.<br/><br/>Parameters:<br/>**title**: string                                                                                      |
| **slug(slug)**                | Sets the slug of the page. Uses the title by default.<br/><br/>Parameters:<br/>**slug**: string                                                             |
| **markdown(markdown)**        | Sets the content of the page using markdown.<br/><br/>Parameters:<br/>**markdown**: string                                                                  |
| **component(component)**      | Sets the content of the page using a React component.<br/><br/>Parameters:<br/>**component**: React.ElementType                                             |
| **icon(icon)**                | Sets an Icon for this page in the page tree.<br/><br/>Parameters:<br/>**icon**: React.ElementType                                                           |
| **documentType(documentType)**| Selects one or multiple document types that link to this page.<br/><br/>Parameters:<br/>**documentType**: string \| string[]                                |
| **documentId(documentId)**    | Selects one or multiple document IDs that link to this page.<br/><br/>Parameters:<br/>**documentId**: string \| string[]                                    |

### Multi Page

A page that contains multiple subpages. This is useful for splitting up a large topic into multiple steps.

#### Example:

```ts
multiPage().title('ContentPage').icon(DocumentIcon).pages([
  page().title('Creating a content page').markdown(creatingAContentPage).documentType(contentPage),
  page().title('Content Blocks').markdown(contentBlocks),
  page().title('Uploading media').markdown(uploadingMedia),
])
```

| Methods         | Description                                                                                                                                                          |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **title(title)**| Sets the title of the page.<br/><br/>Parameters:<br/>**title**: string                                                                                               |
| **slug(slug)**  | Sets the slug of the page. Uses the title by default.<br/><br/>Parameters:<br/>**slug**: string                                                                      |
| **pages(pages)**| Set the pages to be displayed within this multi page. You can use the page method above to generate these pages.<br/><br/>Parameters:<br/>**pages**: PageBuilder[]   |
| **icon(icon)**  | Sets an Icon for this page in the page tree.<br/><br/>Parameters:<br/>**icon**: React.ElementType                                                                    |

### Divider

A simple divider in the user guide tree to separate groups of pages. This has no additional methods.

#### Example:

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
