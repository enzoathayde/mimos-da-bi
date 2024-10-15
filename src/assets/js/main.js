"use strict"

import 'bootstrap';

const hamburgerMenu = document.querySelector('#hamburger')
var hamburgerMenuClicked = 0
console.log(hamburgerMenu)

hamburgerMenu.addEventListener('click', event => {

  if(hamburgerMenuClicked === 1) {
      hamburgerMenuClicked = 0 
      hamburgerMenu.src =  'https://www.svgrepo.com/show/493683/hamburger-2-menu-mobile.svg'
  } else {
    hamburgerMenuClicked = 1
    hamburgerMenu.src = "https://www.svgrepo.com/show/522506/close.svg"
  }

})