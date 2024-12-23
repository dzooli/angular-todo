import { Component, OnInit } from '@angular/core';
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
  selectedUser?: User = undefined;
  private randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

  get imagePath() {
    return this.selectedUser ? 'users/' + this.selectedUser?.avatar : '';
  }

  get userName() {
    return this.selectedUser ? this.selectedUser?.name : '';
  }

  get userId() {
    return this.selectedUser?.id;
  }

  ngOnInit(): void {
    this.selectedUser = DUMMY_USERS[this.randomIndex];
  }

  onSelectUser(e: Event) {
    let button = <HTMLButtonElement>e.target;
    let userid = button.getAttribute('data-userid');
    console.log('Clicked!', button.id, userid);
    this.selectedUser = DUMMY_USERS.find((user) => user.id == userid);
    console.info('The selected user is: ', this.selectedUser);
  }
}
