import { Component, OnInit, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dunmmy-users';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  selectedUser = signal(<User>DUMMY_USERS[0]);
  private randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

  get imagePath() {
    return this.selectedUser ? 'users/' + this.selectedUser()?.avatar : '';
  }

  get userName() {
    return this.selectedUser ? this.selectedUser()?.name : '';
  }

  get userId() {
    return this.selectedUser()?.id;
  }

  ngOnInit(): void {}

  onSelectUser(e: Event) {
    let userid = (<HTMLButtonElement>e.target)?.getAttribute('data-userid');
    let foundUser = DUMMY_USERS.find((user) => user.id == userid);
    this.selectedUser.set(foundUser ? foundUser : DUMMY_USERS[0]);
    console.info('The selected user is: ', this.selectedUser());
  }
}
