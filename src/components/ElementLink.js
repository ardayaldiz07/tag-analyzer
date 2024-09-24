export default class ElementLink {
  constructor(tag, index, element) {
    this.tag = tag;
    this.index = index;
    this.element = element;
    this.isHighlighted = false; // Highlight kontrolü için flag
  }

  render() {
    const elementLink = document.createElement('a');
    elementLink.textContent = `${this.tag} #${this.index + 1}`;

    Object.assign(elementLink.style, {
      display: 'block',
      margin: '5px 0',
      fontSize: '12px',
      cursor: 'pointer',
      color: '#007bff',
      textDecoration: 'none',
    });

    if (!this.element.textContent.trim()) {
      elementLink.textContent += ' Empty Tag';
      elementLink.style.color = 'red';
    }

    elementLink.addEventListener('click', () => {
      if (this.isHighlighted) {
        this.element.style.backgroundColor = '';
        this.isHighlighted = false;
      } else {
        this.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        this.element.style.backgroundColor = 'yellow';
        this.isHighlighted = true;
      }

      if (!this.element.textContent.trim()) {
        this.element.textContent = 'Empty Tag';
        Object.assign(this.element.style, {
          color: 'red',
          fontSize: '36px',
          fontWeight: 'bold',
        });
      }
    });

    return elementLink;
  }
}
