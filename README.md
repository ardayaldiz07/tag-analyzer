## Installation

You can install TagAnalyzer using NPM:

```bash
npm install tag-analyzer


## Using Example

Add the following script to your HTML file:

```html
<script type="module">
  import TagAnalyzer from './TagAnalyzer.js';

  document.addEventListener("DOMContentLoaded", () => {
    const analyzer = new TagAnalyzer();
    
    // Example
    analyzer.run(['h1', 'h2', 'h3'], ["header", "arda"]);
  });
</script>
