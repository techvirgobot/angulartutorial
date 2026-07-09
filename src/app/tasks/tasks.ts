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

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'MASTER ANGULAR',
      summary: 'Learn all the basic and advanced features of angular and how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'BUILD FIRST PROTOTYPE',
      summary: 'Build first prototype of the online shop website.',
      dueDate: '2025-05-31'
    },    
    {
      id: 't3',
      userId: 'u3',
      title: '  PREPARE ISSUE TEMPLATE',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15'
    },
  ];

  get selectedUserTasks(){
    return this.tasks.filter((task)=>task.userId === this.userId );
  }
  onCompleteTask(id:string) {
    this.tasks = this.tasks.filter((task)=> task.id !== id);
  }
  onStartAddTask() {
    this.isAddingTask = true
  }
  onCancelAddTask(){
    this.isAddingTask = false
  }
  onAddTask(taskData: NewTaskData){
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    } ) 
    this.isAddingTask = false;
  }
}
