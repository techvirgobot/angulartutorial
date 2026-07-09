import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { NewTask } from './new-task/new-task';
import { NewTaskData } from './task/task.model';

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


  get selectedUserTasks(){
    return
  }
  onCompleteTask(id:string) {
    
  }
  onStartAddTask() {
    this.isAddingTask = true
  }
  onCancelAddTask(){
    this.isAddingTask = false
  }
  onAddTask(taskData: NewTaskData){

    this.isAddingTask = false;
  }
}
