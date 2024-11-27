import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartegoryComponent } from '../../components/cartegory/cartegory.component';
import { SugestionsComponent } from '../../components/sugestions/sugestions.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CartegoryComponent, SugestionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  slides = [
    {
      image: 'assets/images/0052.jpg',
      caption: 'Seu estilo, nossas jóias',
      alt: 'Slide 1',
      interval: 1000,
    },
    {
      image: 'assets/images/0266.jpg',
      caption: 'Mais do que um produto: um momento',
      alt: 'Slide 2',
      interval: 3000,
    },
    {
      image: 'assets/images/0012.jpg',
      caption: 'Especialistas em jóias há mais de 13 anos',
      alt: 'Slide 3',
      interval: 5000,
    },
  ];
}
