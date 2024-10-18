"use strict"

import 'bootstrap';

function collapseMenu() {

  const hamburgerMenu = document.querySelector('#hamburger')
  let hamburgerMenuOpened = false

  hamburgerMenu.addEventListener('click', event => {

    hamburgerMenuOpened = !hamburgerMenuOpened;
    hamburgerMenu.src = hamburgerMenuOpened ? "https://www.svgrepo.com/show/522506/close.svg" : 'https://www.svgrepo.com/show/493683/hamburger-2-menu-mobile.svg'

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
        document.querySelectorAll('input').value = ''
    })
    .catch(error => {
        console.error("Erro ao enviar dados:", error);
    });
  });

}


function maskCep() {

  document.getElementById('cep').addEventListener('input', () => {

    let fieldCep = document.querySelector('#cep')
    let cepValue = fieldCep.value

    if (cepValue.length === 8) {
      let newCepValue = cepValue.replace(/(\d{5})(\d+)/, '$1-$2')
      fieldCep.value = newCepValue
    }

})

}

function buscaCep() {

document.getElementById('cep').addEventListener('blur', function() {
  
  let cep = this.value
  let cleanCep  = cep.replace(/-/g,'')
  let inputs = document.querySelectorAll('input')

  try {
    fetch(`https:viacep.com.br/ws/${cleanCep}/json/`)
    .then(response => response.json())
    .then(data => {
        if(data.localidade !== undefined) {
        inputs[4].value = data.logradouro
        inputs[5].value = data.bairro
        inputs[6].value = data.localidade
        inputs[7].value = data.estado
        }
      })
  } catch (error) {
    console.log(error)
  }

})

}


document.addEventListener('DOMContentLoaded', () => {

  collapseMenu()
  newLead()
  maskCep()
  buscaCep()

})

