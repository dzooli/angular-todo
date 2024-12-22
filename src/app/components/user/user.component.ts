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
  selectedUser?: User = {
    avatar: '',
    name: '',
    id: '',
  };
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

  onSelectUser(e: Event) {
    let button = <HTMLButtonElement>e.target;
    console.log('Clicked!', button.id, button.getAttribute('data-userid'));
  }

  ngOnInit(): void {
    this.selectedUser = DUMMY_USERS[this.randomIndex];
  }
}
