import { Component, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-do-List';

  allitems:string[]=[];

  /*addTodoItem(newItem: string) {
  this.allitems.push(newItem);
    }*/
  removeTodoItem(index: number) {
    this.allitems.splice(index, 1);
  }

  @ViewChild('newTodo')
  newTodo!: ElementRef;

  addTodoItem(newItem: string){
     this.newTodo.nativeElement.value = '';
     this.allitems.push(newItem);
  }
}
