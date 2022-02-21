// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function elementoLink (event) {
  event.preventDefault();
}

HREF_LINK.addEventListener('click', elementoLink);

function elementoCheckbox (event) {
  event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', elementoCheckbox);

function inputText (event) {
  event.key();
  event.preventDefault();
}

INPUT_TEXT.addEventListener('keypress', inputText);


