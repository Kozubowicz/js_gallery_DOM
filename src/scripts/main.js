'use strict';

const smallImgs = document.querySelectorAll('.list-item');
const largeImg = document.querySelector('.gallery__large-img');

smallImgs.forEach((image) => {
  image.addEventListener('click', function (e) {
    e.preventDefault();

    const link = image.querySelector('.list-item__link');

    largeImg.src = link.href;
  });
});
