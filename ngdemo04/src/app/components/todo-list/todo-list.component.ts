import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public keyword: string = '';

  public todoList: any[] = [];

  constructor(public storage: StorageService) {
    
  }

  ngOnInit() {
  }

  doAdd() {
    if(this.todoListHasKeyWord(this.todoList, this.keyword)) return;
    this.todoList.push({
      title: this.keyword,
      status: 0
    });
    this.keyword = '';
  }

  delete(key) {
    this.todoList.splice(key, 1);
  }

  todoListHasKeyWord(totoList: any[], keyword: string) {
    // totoList.forEach((item) => {
    //   if (item.title === keyword) {
    //     return true;
    //   }
    // });
    for (const item of totoList) {
      if (item.title === keyword) {
        return true;
      }
    }

    return false;
  }

}
