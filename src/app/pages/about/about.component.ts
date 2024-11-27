import { Component } from '@angular/core';
import { SugestionsComponent } from '../../components/sugestions/sugestions.component';

@Component({
  selector: 'app-about',
  imports: [SugestionsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
