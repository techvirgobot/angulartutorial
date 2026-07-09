import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})

export class TasksService  {

    private tasks = [
        
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

    constructor() {
        const tasks = localStorage.getItem('tasks');

        if (tasks) {
            this.tasks = tasks;
        }
    }

    getUSerTasks(userId: string) {
        return this.tasks.filter((task)=>task.userId === userId );
    }

    addTask (taskData: NewTaskData, userId: string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        }) 
    }

    removeTask(id:string){
        this.tasks = this.tasks.filter((task)=> task.id !== id);
        this.saveTasks();
    } 
    
    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}