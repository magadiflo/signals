import { Component, effect, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './properties-page.component.html',
  styles: ``,
})
export default class PropertiesPageComponent {
  public counter = signal<number>(10);
  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });

  /**
   * La primera vez, siempre se ejecuta el effect(), luego
   * se ejecutará cada vez que cambie alguna señal que está siendo
   * referenciada en su interior.
   *
   * El effect() tiene una limpieza automática, no necesitamos
   * "desuscribirnos", o algo así, tal como lo hacíamos con los
   * subjects.
   */
  public userChangeEffect = effect(() => {
    console.log('disparando el userChangeEffect');
    console.log(this.counter());
  });

  public increaseBy(value: number) {
    this.counter.update((currentValue) => currentValue + 1);
  }

  public onFieldUpdated(field: keyof User, value: string) {
    // this.user.set({ ...this.user(), [field]: value });
    // this.user.update((currentUser) => ({ ...currentUser, [field]: value }));

    this.user.update((currentUser) => {
      switch (field) {
        case 'email':
          currentUser.email = value;
          break;
        case 'first_name':
          currentUser.first_name = value;
          break;
        case 'last_name':
          currentUser.last_name = value;
          break;
        case 'avatar':
          currentUser.avatar = value;
          break;
        case 'id':
          currentUser.id = Number(value);
          break;
      }
      return currentUser;
    });
  }
}
