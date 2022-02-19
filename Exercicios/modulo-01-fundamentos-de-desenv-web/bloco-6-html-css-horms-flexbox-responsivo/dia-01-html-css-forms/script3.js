let inputNameUser = document.querySelector('#inputNameUser');
let buttonSubmit = document.querySelector('#buttonSubmit');
let nameUser = document.querySelector('#nameUser');

function getNameUser(event) {
  event.preventDefault();
  nameUser.innerHTML = inputNameUser.value;
  console.log(nameUser.value);
  
}

buttonSubmit.addEventListener('click', getNameUser);