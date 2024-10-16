"use strict"

import 'bootstrap';

function collapseMenu() {

  const hamburgerMenu = document.querySelector('#hamburger')
  let hamburgerMenuOpened = false

  hamburgerMenu.addEventListener('click', event => {

    hamburgerMenuOpened = !hamburgerMenuOpened;
    hamburgerMenu.src = hamburgerMenuOpened ? "https://www.svgrepo.com/show/522506/close.svg" : 'https://www.svgrepo.com/show/493683/hamburger-2-menu-mobile.svg';

  })

}

function newLead() {

  document.getElementById("lead").addEventListener("submit", function(e) {
 
    e.preventDefault();
    const backendURL = 'https://script.google.com/macros/s/AKfycbyUi8Rgk2ACa2ep9S4jHRJ65XkBHTDhRyl1NvuIzRpmPk6WYa4dEdDROds_bnVPtR1yJg/exec'
    const formData = new FormData(this);
    
    fetch(backendURL, {
        method: "POST",
        body: formData,
    })  
    .then(response => response.json())
    .then(result => {
        alert("Dados enviados com sucesso!");
        console.log(result);  
    })
    .catch(error => {
        console.error("Erro ao enviar dados:", error);
    });
  });

}


// Implementar quando a parte do formulário estiver pronta.
// function formatarCep() {
//   fieldCEP = document.querySelector()
// }


collapseMenu()
newLead()
// formatarCep()