import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-signals-layout',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './signals-layout.component.html',
  styles: ``
})
export class SignalsLayoutComponent {

}
