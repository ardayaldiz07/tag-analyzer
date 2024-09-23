export default class CreateUI {
  constructor(tagCounts) {
    this.tagCounts = tagCounts;

    const analyzerBox = document.createElement('div');
    analyzerBox.id = 'tag-analyzer';
    analyzerBox.style.width = '250px';
    analyzerBox.style.position = 'fixed';
    analyzerBox.style.top = '20px';
    analyzerBox.style.right = '20px';
    analyzerBox.style.backgroundColor = '#fff';
    analyzerBox.style.borderRadius = '12px'; // Rounded corners
    analyzerBox.style.border = '1px solid #ddd';
    analyzerBox.style.padding = '20px';
    analyzerBox.style.fontFamily = 'Arial, sans-serif';
    analyzerBox.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)'; // Softer shadow
    analyzerBox.style.zIndex = '1000';
    analyzerBox.style.transition = 'all 0.3s ease-in-out'; // Smooth transitions

    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '12px';
    closeButton.style.right = '12px';
    closeButton.style.backgroundColor = '#f44336'; // Red color for close button
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.padding = '5px 10px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.borderRadius = '50%'; // Rounded close button
    closeButton.style.fontSize = '14px';
    closeButton.style.transition = 'background-color 0.3s ease'; // Hover effect

    closeButton.addEventListener('mouseover', () => {
      closeButton.style.backgroundColor = '#d32f2f'; // Darken on hover
    });

    closeButton.addEventListener('mouseout', () => {
      closeButton.style.backgroundColor = '#f44336'; // Revert back
    });

    closeButton.addEventListener('click', () => {
      analyzerBox.remove();
    });

    const title = document.createElement('h3');
    title.textContent = 'Tag Analyzer';
    title.style.margin = '0 0 15px 0';
    title.style.fontSize = '18px';
    title.style.fontWeight = 'bold';
    title.style.textAlign = 'center';
    title.style.color = '#333';

    analyzerBox.appendChild(closeButton);
    analyzerBox.appendChild(title);

    // Add subtle separator line
    const separator = document.createElement('hr');
    separator.style.border = 'none';
    separator.style.borderTop = '1px solid #eee';
    separator.style.margin = '10px 0';
    analyzerBox.appendChild(separator);

    // Tags with a more modern style
    for (const tag in this.tagCounts) {
      const p = document.createElement('p');
      p.style.margin = '8px 0';
      p.style.fontSize = '14px';
      p.style.color = '#555';
      p.innerHTML = `<strong>${tag.toUpperCase()}</strong>: ${this.tagCounts[tag]} adet`; // Bold tag name
      analyzerBox.appendChild(p);
    }

    document.body.appendChild(analyzerBox);
  }
}