'use strict';

const buttonRight = document.querySelector('.button-right');
const buttonLeft = document.querySelector('.button-left');
const block = document.querySelector('.block');
let buttonCount = 1;

const buttonRightHolder = (evt) => {
	evt.preventDefault();
	block.style.transform = `rotate(${90 * buttonCount}deg)`;
	buttonCount++;
};
const buttonLeftHolder = (evt) => {
	evt.preventDefault();
	buttonCount--;
	block.style.transform = `rotate(${90 * buttonCount}deg)`;
};

buttonRight.addEventListener('click', buttonRightHolder);
buttonLeft.addEventListener('click', buttonLeftHolder);
