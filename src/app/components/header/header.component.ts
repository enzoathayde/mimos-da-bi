import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderMenuList } from './headerMenuList';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

// 'Sobre Nós', 'Produtos', 'Contato'
export class HeaderComponent {
  headerMenuList: HeaderMenuList[] = [
    {
      name: 'Sobre Nós',
      route: '/sobre',
    },
    {
      name: 'Produtos',
      route: '/produtos',
    },
    {
      name: 'Contato',
      route: '/contato',
    },
  ];

  hamburgerMenu = false;

  handleHamburgerMenu() {
    this.hamburgerMenu = !this.hamburgerMenu;
  }
}
