const imgs = document.querySelectorAll('.img');

imgs.forEach(img => {
  img.addEventListener('mouseover', () => {
    imgs.forEach(otherImg => {
      otherImg.classList.remove('active');
    });
    img.classList.add('active');
  });

  img.addEventListener('mouseout', () => {
    img.classList.remove('active');
  });
});