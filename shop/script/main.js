'use strict';

// document.querySelector('search').oninput = function() {
//   let val = this.value.trim();
//   let searchItems = document.querySelectorAll('.card card__title');

//   if (searchItems != '') {
//     searchItems.forEach(function(elem) {
//       if (elem.innerText.search(val) == -1) {
//         elem.classList.add('hide');
//       }
//     })
//   }
// }



const modalWindow = document.querySelector('.modal__window');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const overlay = document.querySelector('.overlay');

const titleModalWindow = document.querySelector('.title__modal-window');
const descriptionModalWindow = document.querySelector('.description__modal-window');

const textForTitleModalWindow1 = "О нас";
const textForDescriptionModalWindow1 = "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Единственное все правилами снова вершину!";

const textForTitleModalWindow2 = "Лицензионное соглашение";
const textForDescriptionModalWindow2 = "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Единственное все правилами снова вершину!";

const textForTitleModalWindow3 = "Пользовательское соглашение";
const textForDescriptionModalWindow3 = "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Единственное все правилами снова вершину!";


const OpenModalWindow = (btnModalWindow) => {
  switch (btnModalWindow) {
    case "about-us":
      titleModalWindow.innerHTML = textForTitleModalWindow1;
      descriptionModalWindow.innerHTML = textForDescriptionModalWindow1;
      modalWindow.classList.remove('hidden');
      overlay.classList.remove('hidden');
      break;
    case "license-agreement":
      titleModalWindow.innerHTML = textForTitleModalWindow2;
      descriptionModalWindow.innerHTML = textForDescriptionModalWindow2;
      modalWindow.classList.remove('hidden');
      overlay.classList.remove('hidden');
      break;
    case "terms-of-use":
      titleModalWindow.innerHTML = textForTitleModalWindow3;
      descriptionModalWindow.innerHTML = textForDescriptionModalWindow3;
      modalWindow.classList.remove('hidden');
      overlay.classList.remove('hidden');
      break;
  }
};

btnCloseModalWindow.addEventListener('click', function() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
});
