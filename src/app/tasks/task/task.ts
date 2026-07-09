import { Component, inject, Input} from '@angular/core';
import { TaskObject } from './task.model';
import { Card } from "../../shared/card/card";
import  {DatePipe} from "@angular/common"
import { TasksService } from '../tasks.service';

@Component({
  standalone: true,
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input ({required: true}) task!: TaskObject
  // @Output () complete = new EventEmitter<string>();
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
