import { Component, OnInit, computed, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dunmmy-users';

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  @Input() avatar!: string;
  @Input() id!: string;
  @Input() name!: string;

  selectedUser = signal(DUMMY_USERS[0]);

  get imagePath() {
    return 'users/' + this.avatar;
  }

  ngOnInit(): void {}

  onSelectUser(e: Event) {
    let userid = (<HTMLButtonElement>e.target)?.getAttribute('data-userid');
    let foundUser = DUMMY_USERS.find((user) => user.id == userid);
    this.selectedUser.set(foundUser ? foundUser : DUMMY_USERS[0]);
    console.info('The selected user is: ', this.selectedUser());
  }
}
