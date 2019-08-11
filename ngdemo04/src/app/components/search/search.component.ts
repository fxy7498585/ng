import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../../services/storage.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyWord: string;
  public historyList: any[] = [];

  constructor(public storage:StorageService) {
    this.storage = storage;
  }

  ngOnInit() {
    this.historyList = this.storage.get('historyList');
  }

  doSearch() {
    if (!this.historyList.includes(this.keyWord)) {
      this.historyList.push(this.keyWord);
      this.storage.set('historyList', this.historyList);
    }
    this.keyWord = '';
  }

  deleteItem(key) {
    this.historyList.splice(key, 1);
    this.storage.set('historyList', this.historyList);
  }

}
