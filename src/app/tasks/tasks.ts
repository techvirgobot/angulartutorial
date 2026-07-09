import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { NewTask } from './new-task/new-task';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId !: string;
  @Input({ required: true }) name !: string;

  isAddingTask : boolean = false;

  constructor (private tasksService: TasksService){}
                  // OR
  // private tasksService = new TasksService();

  // constructor(tasksService: TasksService) { 
  //   this.tasksService = tasksService;
  //  }
  // This mechanism is Dependency Injection - we tell angular which type of value is needed and angular creates it and provides it as an ArgumentOutOfRangeError.

  get selectedUserTasks(){
    return this.tasksService.getUSerTasks(this.userId);
  }

  onStartAddTask() {  this.isAddingTask = true;  }
  onCloseAddTask() {  this.isAddingTask = false; }

}
