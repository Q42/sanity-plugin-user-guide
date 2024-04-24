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
  page('Home', home).icon(HomeIcon),
  divider(),
  page('ContactPage', contactPage).icon(CommentIcon).documentType('contactPage'),
  multiPage('ContentPage', [
    page('Creating a content page', creatingAContentPage).documentType(contentPage),
    page('Content Blocks', contentBlocks),
    page('Uploading media', uploadingMedia),
  ]).icon(DocumentIcon),
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

## License

[MIT](LICENSE) © Q42

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.
