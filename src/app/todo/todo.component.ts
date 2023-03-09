import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todoDisplay: Todo = {task:"", completed:false, /*isEditing:false*/}
  constructor() {}

  ngOnInit(): void {
  }

  completeTask() {
    this.todoDisplay.completed = true;
  }

  // editTask() {
  //   this.todoDisplay.isEditing = this.todoDisplay.isEditing;
  // }

}
