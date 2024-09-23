class TagAnalyzer {
  constructor() {
    this.tagCounts = {};
    this.classCounts = {};
  }

  analyzePageTags(tags) {
    tags.forEach(tag => {
      const count = document.getElementsByTagName(tag).length;
      this.tagCounts[tag] = count;
    });
  }

  analyzeClassNames(classNames) {
    classNames.forEach(className => {
      const count = document.getElementsByClassName(className).length;
      this.classCounts[className] = count;
    });
  }

  async analyzeLinks(tags) {
    const links = document.querySelectorAll('a');

    for (let link of links) {
      try {

        //cp
        const response = await fetch(link.href);
        const text = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        //cp

        tags.forEach(tag => {
          const count = doc.getElementsByTagName(tag).length;
          this.tagCounts[tag] += count;
        });

      } catch (error) {
        console.error(`Link ${link.href} analiz edilemedi:`, error);
      }
    }
  }

  // Creating UI
  createUI() {
    const analyzerBox = document.createElement('div');
    analyzerBox.style.width="200px";
    analyzerBox.id = 'tag-analyzer';
    analyzerBox.style.position = 'fixed';
    analyzerBox.style.top = '20px';
    analyzerBox.style.right = '20px';
    analyzerBox.style.backgroundColor = '#f9f9f9';
    analyzerBox.style.border = '1px solid #ccc';
    analyzerBox.style.padding = '10px';
    analyzerBox.style.fontFamily = 'Arial, sans-serif';
    analyzerBox.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
    analyzerBox.style.zIndex = '1000';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px';
    closeButton.style.right = '5px';
    closeButton.style.backgroundColor = '#f44336';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.padding = '2px 5px';
    closeButton.style.cursor = 'pointer';

    closeButton.addEventListener('click', () => {
      analyzerBox.remove();
    });

    const title = document.createElement('h3');
    title.textContent = 'Analyzer';
    title.style.margin = '0 0 10px 0';
    title.style.fontSize = '14px';

    analyzerBox.appendChild(closeButton);
    analyzerBox.appendChild(title);


    // Tags
    for (const tag in this.tagCounts) {
      const p = document.createElement('p');
      p.textContent = `${tag.toUpperCase()}: ${this.tagCounts[tag]} adet`;
      analyzerBox.appendChild(p);
    }


    // Classes
    for (const className in this.classCounts) {
      const p = document.createElement('p');
      p.textContent = `Class "${className}": ${this.classCounts[className]} adet`;
      analyzerBox.appendChild(p);
    }

    document.body.appendChild(analyzerBox);
  }

  async run(tags = [], classNames = []) {

    this.analyzePageTags(tags);
    this.analyzeClassNames(classNames);

    // For analyze links.
    // await this.analyzeLinks(tags);

    this.createUI();
  }
}

export default TagAnalyzer;