import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskObject } from './task.model';
import { Card } from "../../shared/card/card";

@Component({
  standalone: true,
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input ({required: true}) task!: TaskObject
  @Output () complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
