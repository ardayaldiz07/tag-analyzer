import CreateUI from "./components/CreateUI.js";

export default class TagAnalyzer {
  constructor(tags = []) {
    this.tagCounts = {};
    this.tags = tags;
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