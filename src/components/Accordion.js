import ElementLink from './ElementLink.js';

export default class Accordion {
  constructor(tag, count) {
    this.tag = tag;
    this.count = count;
  }

  render() {
    const accordion = document.createElement('div');
    accordion.style.marginBottom = '10px';

    const header = document.createElement('button');
    header.textContent = `${this.tag}: ${this.count} adet`;

    Object.assign(header.style, {
      width: '100%',
      backgroundColor: '#f1f1f1',
      padding: '10px',
      border: 'none',
      textAlign: 'left',
      fontSize: '14px',
      cursor: 'pointer',
      outline: 'none',
      transition: 'background-color 0.3s ease',
    });

    header.addEventListener('mouseover', () => {
      header.style.backgroundColor = '#ddd';
    });

    header.addEventListener('mouseout', () => {
      header.style.backgroundColor = '#f1f1f1';
    });

    const panel = document.createElement('div');
    Object.assign(panel.style, {
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'max-height 0.3s ease-out',
      padding: '0 18px',
      backgroundColor: '#f9f9f9',
    });

    const elements = document.querySelectorAll(this.tag);
    elements.forEach((element, index) => {
      const elementLink = new ElementLink(this.tag, index, element);
      panel.appendChild(elementLink.render());
    });

    header.addEventListener('click', () => {
      if (panel.style.maxHeight && panel.style.maxHeight !== '0px') {
        panel.style.maxHeight = '0';
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }

      if (this.count === 0) {
        header.style.backgroundColor = 'red';
        setTimeout(() => {
          header.style.backgroundColor = '#f1f1f1';
        }, 100);
      }
    });

    accordion.appendChild(header);
    accordion.appendChild(panel);

    return accordion;
  }
}
