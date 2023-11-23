'use strict';

document.querySelector('search').oninput = function() {
  let val = this.value.trim();
  let searchItems = document.querySelectorAll('.card card__title');

  if (searchItems != '') {
    searchItems.forEach(function(elem) {
      if (elem.innerText.search(val) == -1) {
        elem.classList.add('hide');
      }
    })
  }
}