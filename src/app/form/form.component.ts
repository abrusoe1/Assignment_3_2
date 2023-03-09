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
  @Output() save: EventEmitter<Todo> = new EventEmitter<Todo>();
  addTask(task: (<HTMLInputElement> document.getElementById("AddInput")).value, completed: false){
  // addTask(){
  //   let taskName: string = (<HTMLInputElement> document.getElementById("AddInput")).value;
  //   let t : Todo = {task:taskName, completed:false};
  //   this.tasks.push;
  }

}
