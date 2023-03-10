import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ngOnInit(): void {
  }
  @Output() newTask = new EventEmitter<Todo>();
  constructor() {}
  newTodo:Todo ={task:"", completed:false}

  addTask(){
    this.newTask.emit(this.newTodo);
  }

}
