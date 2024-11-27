import { Component } from '@angular/core';
import { SugestionForm } from './sugestionForm';
import { FormsModule } from '@angular/forms';
import axios from 'axios'

@Component({
  selector: 'app-sugestions',
  imports: [FormsModule],
  templateUrl: './sugestions.component.html',
  styleUrl: './sugestions.component.scss',
})
export class SugestionsComponent {

  newSugestion: SugestionForm = {
    name: '',
    email: '',
    cep: '',
    street: '',
    neighborhood: '',
    city: '',
    state: '',
    phone: '',
    message: '',
  };

  submit() {

    const backendURL = 'https://script.google.com/macros/s/AKfycbyUi8Rgk2ACa2ep9S4jHRJ65XkBHTDhRyl1NvuIzRpmPk6WYa4dEdDROds_bnVPtR1yJg/exec'


    if (
      this.newSugestion.name &&
      this.newSugestion.email &&
      this.newSugestion.cep &&
      this.newSugestion.street &&
      this.newSugestion.neighborhood &&
      this.newSugestion.city &&
      this.newSugestion.state &&
      this.newSugestion.phone &&
      this.newSugestion.message
    ) {

      axios.post(backendURL, {name: this.newSugestion.name, email: this.newSugestion.email, cep: this.newSugestion.cep, street: this.newSugestion.street, neighborhood: this.newSugestion.neighborhood, city: this.newSugestion.city, state: this.newSugestion.state, message: this.newSugestion.message})

      console.log("Todos os campos estão preenchidos!");
    } else {
      window.alert("Há campos vazios.");
    }
    
  }
}
