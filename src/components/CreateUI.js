import CloseButton from "./CloseButton.js";
import Accordion from "./Accordion.js";

export default class CreateUI {
  constructor(tagCounts) {
    this.tagCounts = tagCounts;

    const analyzerBox = document.createElement('div');
    Object.assign(analyzerBox.style, {
      width: '250px',
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      border: '1px solid #ddd',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
      zIndex: '1000',
      transition: 'all 0.3s ease-in-out',
      maxHeight: "calc(90vh - 50px)",
      overflowY: 'auto'
    });
    

    // Close button
    const closeButton = new CloseButton(analyzerBox);

    // Title
    const title = document.createElement('h3');
    title.textContent = 'Tag Analyzer';
    Object.assign(title.style, {
      margin: '0 0 0 0',
      fontSize: '18px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#333',
    });

  // Main div for close and title
  const mainDiv = document.createElement('div');
  Object.assign(mainDiv.style, {
    position: 'sticky',
    top: '-20px',
    backgroundColor: 'white',
    zIndex: '1000',
    height: '60px',
    padding: '5px 0', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  });

  // Add title and close button
  mainDiv.appendChild(title);
  mainDiv.appendChild(closeButton.render());


    analyzerBox.appendChild(mainDiv);

    const separator = document.createElement('hr');
    separator.style.border = 'none';
    separator.style.borderTop = '1px solid #eee';
    separator.style.margin = '10px 0';
    analyzerBox.appendChild(separator);

    for (const tag in this.tagCounts) {
      const accordion = new Accordion(tag, this.tagCounts[tag]);
      analyzerBox.appendChild(accordion.render());
    }

    document.body.appendChild(analyzerBox);
  }
}