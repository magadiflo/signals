import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MenuItem } from '../../interfaces/menu.interface';

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styles: `
    li {
      cursor: pointer;
    }
  `,
})
export class SideMenuComponent {
  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', route: 'counter' },
    { title: 'Info. Usuario', route: 'user-info' },
    { title: 'Mutaciones', route: 'properties' },
  ]);
}
