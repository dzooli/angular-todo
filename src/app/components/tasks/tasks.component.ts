import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../../dunmmy-users';

import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn the basic and advanced features of Angular',
      completed: false,
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master React',
      summary: 'Learn React in depth',
      completed: false,
      dueDate: '2021-12-31',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Master Vue',
      summary: 'To complete the frontend development journey, Learn Vue',
      completed: false,
      dueDate: '2022-12-31',
    },
  ];

  onSelectUser(id: string) {}

  get selecteUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
