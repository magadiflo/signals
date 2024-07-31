import { Component, signal } from '@angular/core';
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
  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });

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
