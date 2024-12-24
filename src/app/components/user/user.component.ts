import { Component, OnInit, signal, computed } from '@angular/core';
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
  /*
   * This component uses Signal mechanism which is a bit simpler, introduced in Angular 16
   * but not all components are compatible with it.
   * Use Signals when possible but be prepared to the old-style event handlers too.
   */
  userId = computed(() => this.selectedUser()?.id);
  userName = computed(() =>
    this.selectedUser() ? this.selectedUser()?.name : ''
  );
  imagePath = computed(() => 'users/' + this.selectedUser()?.avatar);

  selectedUser = signal(<User>DUMMY_USERS[0]);
  private randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

  ngOnInit(): void {
    this.selectedUser.set(DUMMY_USERS[this.randomIndex]);
  }

  onSelectUser(e: Event) {
    let userid = (<HTMLButtonElement>e.target)?.getAttribute('data-userid');
    let foundUser = DUMMY_USERS.find((user) => user.id == userid);
    this.selectedUser.set(foundUser ? foundUser : DUMMY_USERS[0]);
    console.info('The selected user is: ', this.selectedUser());
  }
}
