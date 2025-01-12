import {
  Component,
  OnInit,
  Input,
  signal,
  input,
  computed,
} from '@angular/core';
import { DUMMY_USERS } from '../../dunmmy-users';

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) name!: string;

  /* Alternative input definition using input function from Angular. A bit cleaner code. */
  avatar = input.required<string>();
  id = input.required<string>();
  name = input.required<string>();

  selectedUser = signal(DUMMY_USERS[0]);

  /*
   as a getter. this property is usable without
   calling the function (like a property as usual)
  */
  // get imagePath() {
  //   return 'users/' + this.avatar();
  // }

  /* Using computed values */
  imagePath = computed(() => {
    return 'users/' + this.avatar();
  });

  ngOnInit(): void {}

  onSelectUser(e: Event) {
    let userid = (<HTMLButtonElement>e.target)?.getAttribute('data-userid');
    console.info('Looking for user id:', userid, 'type:', typeof userid);
    let foundUser = DUMMY_USERS.find((user) => user.id == userid);
    console.info('Found user:', foundUser);
    this.selectedUser.set(foundUser ? foundUser : DUMMY_USERS[0]);
    console.info('The selected user is: ', this.selectedUser());
  }
}
