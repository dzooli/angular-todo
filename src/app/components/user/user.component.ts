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
  private randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  selectedUser = DUMMY_USERS[this.randomIndex];

  ngOnInit(): void {
    this.selectedUser = DUMMY_USERS[this.randomIndex];
  }
}
