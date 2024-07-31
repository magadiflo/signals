import { Component, computed, inject, OnInit, signal } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-user-info-page',
  standalone: true,
  imports: [],
  templateUrl: './user-info-page.component.html',
  styles: ``,
})
export default class UserInfoPageComponent implements OnInit {
  private usersService = inject(UsersService);
  public userId = signal<number>(1);
  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal<boolean>(true);

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  public loadUser(id: number): void {
    if (id <= 0) return;

    this.userId.set(id);

    this.usersService
      .getUserById(id)
      .subscribe((user) => this.currentUser.set(user));
  }
}
