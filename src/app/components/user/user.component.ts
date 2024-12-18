import { Component, OnInit } from '@angular/core';
import { DUMMY_USERS } from '../../dunmmy-users';

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  selectedUser?: Object;
  private randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

  ngOnInit(): void {
    this.selectedUser = DUMMY_USERS[this.randomIndex];
  }
}
