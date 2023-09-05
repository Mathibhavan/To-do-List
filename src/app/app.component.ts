import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-do-List';

  allitems:string[]=[];

  addTodoItem(newItem: string) {
    this.allitems.push(newItem);
  }

  removeTodoItem(index: number) {
    this.allitems.splice(index, 1);
  }

}
