import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../../../models/new-task';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel(event: Event) {
    this.cancel.emit();
    console.log('Task creation cancelled');
  }

  onSubmitTask(event: Event) {
    let newTask: NewTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    };
    this.add.emit(newTask);
  }
}
