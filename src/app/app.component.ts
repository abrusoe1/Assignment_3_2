import { Component } from '@angular/core'
import { FormControl } from '@angular/forms';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  tasks:Todo[] = [{task: "wake up", completed: true}, {task: "eat breakfast", completed: true}, {task: "shower", completed: false}, {task: "take a dump", completed: true}, {task: "brush teeth", completed: false}];

  completeTask(i: number):void{
    this.tasks[i].completed = true;
  }

  // addTask(){
  //   let taskName: string = (<HTMLInputElement> document.getElementById("AddInput")).value;
  //   let t : Todo = {task:taskName, completed:false};
  //   this.tasks.push;
  // }

  removeTask(i: number):void{
    this.tasks.splice(i, 1);
  }
}
