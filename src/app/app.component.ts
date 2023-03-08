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

  //The next three lines are commented out so that ng serve -o will actually compile
  // addTask():void{
  //   this.tasks.push({task: this.newTask, completed: false});
  // }

  removeTask(i: number):void{
    this.tasks.splice(i, 1);
  }
}
