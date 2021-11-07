function initCarousel() {
  const carousel = document.querySelector('.carousel__inner');
  const rightButton = document.querySelector('.carousel__arrow_right');
  const leftButton = document.querySelector('.carousel__arrow_left');
  const width = carousel.offsetWidth;
  leftButton.style.display = 'none';
  let count = 0;


  rightButton.addEventListener('click', () => {
    count++;
    carousel.style.transform = `translateX(-${width * count}px)`;
    if (count === 3) {
      rightButton.style.display = 'none';
    } else {
      rightButton.style.display = '';
      leftButton.style.display = '';
    }
  });


  leftButton.addEventListener('click', () => {
    count--;
    carousel.style.transform = `translateX(-${width * count}px)`;
    if (count === 0) {
      leftButton.style.display = 'none';
    } else {
      rightButton.style.display = '';
      leftButton.style.display = '';
    }
  });
}


