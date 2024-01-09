function initCarousel() {
  let carousel = document.querySelector('.carousel');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let carouselInner = document.querySelector('.carousel__inner');
  let carouselList = document.querySelectorAll('.carousel__slide');
  let showNum = 1;
  let offset = carouselInner.offsetWidth;

  arrowLeft.style.display = 'none';

  carousel.addEventListener('click', (event) => {
    if (event.target.closest('.carousel__arrow_right')) {
      if (showNum < carouselList.length - 1) {
        carouselInner.style.transform = `translateX(-${offset * showNum}px)`;
        showNum++;
        arrowLeft.style.display = '';
      } else {
        carouselInner.style.transform = `translateX(-${offset * showNum}px)`;
        showNum++
        arrowRight.style.display = 'none';
        arrowLeft.style.display = '';
      }
    };

    if (event.target.closest('.carousel__arrow_left')) {
      if (showNum === 2) {
        carouselInner.style.transform = `translateX(0px)`;
        showNum--;
        arrowLeft.style.display = 'none';
      } else {
        carouselInner.style.transform = `translateX(-${offset * (showNum - 2)}px)`;
        showNum--;
        arrowRight.style.display = '';
      }
    };
  });
};
