import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskComponent],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    component.task = {
      id: '1',
      title: 'Dummy Task',
      userId: '1',
      summary: 'test',
      dueDate: '2023-10-10',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit complete event with task id when onComplete is called', () => {
    spyOn(component.complete, 'emit');

    component.task = {
      id: '1',
      title: 'Dummy Task',
      userId: '1',
      summary: 'test',
      dueDate: '2023-10-10',
    };
    component.onComplete();

    expect(component.complete.emit).toHaveBeenCalledWith('1');
  });

  it('should have required input task', () => {
    expect(component.task).toBeDefined();
  });
});
