'use strict';

const backgroundImage = document.querySelector('.login-bg-img');
const darkImg = backgroundImage.dataset.darkimg;
const lightImg = backgroundImage.dataset.lightimg;

let modes = localStorage.getItem('lightMode');

if(modes === 'enabled') {
  backgroundImage.src = `${lightImg}`;
} else {
  backgroundImage.src = `${darkImg}`;
}
