import { Component } from '@angular/core';
import { SugestionForm } from './sugestionForm';
import { FormsModule } from '@angular/forms';

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
    console.log('SugestionsComponent submit');
  }
}
