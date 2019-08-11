import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {
  public title = '我是新闻组件';
  msg = 'i am msg';
  public username:string = 'zhagnsan';
  protected age:number = 12;
  private address:string = 'beijign';
  public userinfo:object = {
    name: 'bob',
    age: '24',
    address: 'tianjin'
  }
  public id:number;

  public content = '<div>html</div>';

  public arr:string[] = ['a', 'b', 'c'];

  constructor() {
    this.id = 10001;
  }

  ngOnInit() {
  }

}
