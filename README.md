Using Example
Add this script to your html file.
<script type="module">
  import TagAnalyzer from './TagAnalyzer.js';

  document.addEventListener("DOMContentLoaded", () => {
    const analyzer = new TagAnalyzer();
    
    // Example
    analyzer.run(['h1', 'h2', 'h3'],["header","arda"]);
  });
</script>
