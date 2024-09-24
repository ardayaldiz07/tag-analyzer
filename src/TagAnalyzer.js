import CreateUI from "./components/CreateUI.js";

export default class TagAnalyzer {
  constructor(options) {

    this.tagCounts = {};
    this.tags = options['tags'];
    if(options['useDefault']){
      this.tags = [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'div', 'span',
        'strong', 'em', 'img', 'ul', 'ol', 'li', 'table', 'tr', 'td',
        'th', 'header', 'footer', 'section', 'article', 'aside', 'nav',
        'form', 'input', 'button', 'label', 'textarea', 'select', 'option',
        'iframe', 'blockquote', 'cite', 'figure', 'figcaption', 'pre', 
        'code', 'hr', 'br', 'b', 'i', 'small', 'big', 'time', 'mark',
        'abbr', 'data', 'progress', 'meter', 'details', 'summary', 
        'dialog', 'template', 'canvas', 'svg', 'video', 'audio', 'link', 
        'style', 'script', 'meta', 'title', 'base', 'body', 'html', 
        'head', 'footer', 'main', 'address', 'kbd', 'var', 'wbr'
      ];
    }
    this.init();
  }

  init(){
    this.analyzePageTags(this.tags);
    new CreateUI(this.tagCounts);
    console.log(this.tagCounts);
  }

  analyzePageTags(tags) {
    tags.forEach(tag => {
      const count = document.querySelectorAll(tag).length;
      this.tagCounts[tag] = count;
    });
  }
}