export default class CloseButton {
  constructor(parentElement) {
    this.parentElement = parentElement;
  }

  render() {
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    Object.assign(closeButton.style, {
      position: 'absolute',
      top: '20px',
      right: '12px',
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      padding: '5px 10px',
      cursor: 'pointer',
      borderRadius: '50%',
      fontSize: '14px',
      transition: 'background-color 0.3s ease',
    });

    closeButton.addEventListener('mouseover', () => {
      closeButton.style.backgroundColor = '#d32f2f';
    });

    closeButton.addEventListener('mouseout', () => {
      closeButton.style.backgroundColor = '#f44336';
    });

    closeButton.addEventListener('click', () => {
      this.parentElement.remove();
    });

    return closeButton;
  }
}
