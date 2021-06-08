import { Component } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './ToDoListComponent.html',
  styleUrls: ['./ToDoListComponent.css']
})

export class Todolist {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { des: '', done: true },
    
  ];
  addItem(des: any) {
    this.allItems.unshift({
      des,
      done: false
    });
  }
  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

}