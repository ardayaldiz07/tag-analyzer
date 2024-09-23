# TagAnalyzer

TagAnalyzer is a JavaScript utility that analyzes HTML pages for specific tags and class names. It can also follow links and analyze linked pages for tag counts.

## Features
- Analyze specific HTML tags (e.g., `h1`, `h2`, etc.)
- Count elements with specific class names
- Fetch and analyze linked pages for additional tags
- Display results in a customizable pop-up box

## Installation

You can install TagAnalyzer using NPM:

```bash
npm install tag-analyzer
```

## Usage Example

```html
<script type="module">
  import TagAnalyzer from './node_modules/tag-analyzer/TagAnalyzer.js';

  document.addEventListener("DOMContentLoaded", () => {
    const analyzer = new TagAnalyzer();
    
    // Example usage
    analyzer.run(['h1', 'h2', 'h3'], ['header', 'arda']);
  });
</script>
