import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../../dunmmy-users';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name?: string;

  onSelectUser(id: string) {}
}
