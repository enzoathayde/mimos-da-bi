import { Component } from '@angular/core';
import { SugestionsComponent } from '../../components/sugestions/sugestions.component';

@Component({
  selector: 'app-products',
  imports: [SugestionsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {}
