//zoom img 
const images = document.querySelectorAll('.contenedor-items .item img');

images.forEach(image => {
  image.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalImage = document.createElement('img');
    modalImage.src = image.src;
    modalImage.classList.add('modal-image');
    modal.appendChild(modalImage);
    document.body.appendChild(modal);
    modal.addEventListener('click', () => {
      modal.remove();
    });
  });
});