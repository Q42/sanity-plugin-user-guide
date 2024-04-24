import {createGlobalStyle} from 'styled-components'

export const MarkdownStyle = createGlobalStyle`
  .markdown {
    padding-bottom: 1.5rem;
  }

  .markdown table {
    border-collapse: collapse;
  }

  .markdown th {
    background-color: var(--card-code-bg-color);
  }

  .markdown th,
  .markdown td {
    padding: 6px 13px;
    border: 1px solid var(--card-border-color);
  }

  .markdown h2 {
    margin-top: 2.25rem;
  }

  .markdown h3 {
    margin-top: 1.75rem;
  }

  .markdown p {
    line-height: 1.5;
  }

  .markdown blockquote {
    margin: 0 0 2rem;
    padding: 0 1em;
    border-left: 2px solid var(--card-border-color);
  }

  .markdown code {
    display: inline-block;
    padding: 0.2em 0.4em;
    border-radius: 0.25em;
    background-color: var(--card-badge-default-bg-color);
  }

  .markdown img {
    margin-top: 1.5rem;
    max-width: 100%;
    border: 1px solid var(--card-border-color);
  }

  .markdown li {
    margin-bottom: 0.5em;
  }`
