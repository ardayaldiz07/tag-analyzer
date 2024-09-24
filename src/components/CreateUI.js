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
    analyzerBox.style.borderRadius = '12px';
    analyzerBox.style.border = '1px solid #ddd';
    analyzerBox.style.padding = '20px';
    analyzerBox.style.fontFamily = 'Arial, sans-serif';
    analyzerBox.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
    analyzerBox.style.zIndex = '1000';
    analyzerBox.style.transition = 'all 0.3s ease-in-out';

    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '12px';
    closeButton.style.right = '12px';
    closeButton.style.backgroundColor = '#f44336';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.padding = '5px 10px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.borderRadius = '50%';
    closeButton.style.fontSize = '14px';
    closeButton.style.transition = 'background-color 0.3s ease';

    closeButton.addEventListener('mouseover', () => {
      closeButton.style.backgroundColor = '#d32f2f';
    });

    closeButton.addEventListener('mouseout', () => {
      closeButton.style.backgroundColor = '#f44336';
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

    const separator = document.createElement('hr');
    separator.style.border = 'none';
    separator.style.borderTop = '1px solid #eee';
    separator.style.margin = '10px 0';
    analyzerBox.appendChild(separator);

    // Akordiyon
    for (const tag in this.tagCounts) {
      const accordion = document.createElement('div');
      accordion.style.marginBottom = '10px';

      const header = document.createElement('button');
      header.textContent = `${tag}: ${this.tagCounts[tag]} adet`;
      
      // Use Object.assign to set multiple styles at once
      Object.assign(header.style, {
          width: '100%',
          backgroundColor: '#f1f1f1',
          padding: '10px',
          border: 'none',
          textAlign: 'left',
          fontSize: '14px',
          cursor: 'pointer',
          outline: 'none',
          transition: 'background-color 0.3s ease'
      });
      
      header.addEventListener('mouseover', () => {
        header.style.backgroundColor = '#ddd';
      });
      header.addEventListener('mouseout', () => {
        header.style.backgroundColor = '#f1f1f1';
      });

      const panel = document.createElement('div');

      // Use Object.assign to set multiple styles at once
      Object.assign(panel.style, {
          maxHeight: '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-out',
          padding: '0 18px',
          backgroundColor: '#f9f9f9'
      });      

      // Elementleri yerleştirme
      const elements = document.querySelectorAll(tag);
      elements.forEach((element, index) => {
        const elementLink = document.createElement('a');
        elementLink.textContent = `${tag} #${index + 1}`;
        
        // Use Object.assign to set multiple styles at once
        Object.assign(elementLink.style, {
            display: 'block',
            margin: '5px 0',
            fontSize: '12px',
            cursor: 'pointer',
            color: '#007bff',
            textDecoration: 'none'
        });
        
        if (!element.textContent.trim()) {
            elementLink.textContent += ' Empty Tag';
            elementLink.style.color = 'red';
        }

        // Click 
        elementLink.addEventListener('click', () => {
          // Arka plan sıfırlama
          elements.forEach(el => el.style.backgroundColor = '');

          // Tıklanan elementin arka plan rengini değiş
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.style.backgroundColor = 'yellow'; // Arka planı sarı yap

          // Boşsa yazı ekle ve renk değiş
          if (!element.textContent.trim()) {
            element.textContent = 'Empty Tag';
            Object.assign(element.style,{
              color:'red',
              fontSize:'36px',
              fontWeight:'bold'
            });
          }
        });

        panel.appendChild(elementLink);
      });

      // Akordiyonun aç kapa
      header.addEventListener('click', () => {
        if (panel.style.maxHeight && panel.style.maxHeight !== '0px') {
          // Açıksa mh 0la
          panel.style.maxHeight = '0';
        } else {
          // Kapalıysa içerik h göre aç
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }

        if (this.tagCounts[tag] === 0) {
          // Adet 0 ise anlık olarak kırmızıya döndür ve sonra geri eski renge
          header.style.backgroundColor = 'red';
          setTimeout(() => {
            header.style.backgroundColor = '#f1f1f1';
          }, 100); // 0.5 saniye boyunca kırmızı kalır
        }
      });

      accordion.appendChild(header);
      accordion.appendChild(panel);
      analyzerBox.appendChild(accordion);
    }

    document.body.appendChild(analyzerBox);
  }
}