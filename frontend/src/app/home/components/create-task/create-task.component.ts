import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Todo } from 'src/app/shared/interfaces';
import { TasksService } from 'src/app/shared/services/tasks/tasks.service';
import { HomePageComponent } from '../../pages/home-page/home-page.component';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  public title: FormControl;
  public submitted: boolean;

  constructor(
    private tasksService: TasksService,
    private homePage: HomePageComponent
  ) {}

  ngOnInit(): void {
    this.submitted = false;
    this.title = new FormControl('', [
      Validators.required,
      Validators.maxLength(512),
    ]);
  }

  public onSave(): void {
    if (this.title.invalid) {
      return;
    }

    this.submitted = true;
    const todo: Todo = {
      title: this.title.value,
      completed: false,
    };

    this.tasksService.create(todo).subscribe(
      () => {
        this.title.reset();
        this.submitted = false;
        this.homePage.getAllTasks();
      },
      () => {
        this.submitted = false;
      }
    );
  }

  public onCancel(): void {
    this.title.reset();
    this.submitted = false;
  }
}
