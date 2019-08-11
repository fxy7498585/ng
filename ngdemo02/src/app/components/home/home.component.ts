import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public list:any[] = ['a', 'b', 'c'];

  public flag:boolean = false;

  public date:any = new Date();


  public keyworld:any;
  constructor() { }

  ngOnInit() {
  }

  run() {
    console.log('this is run');
  }

  getdata() {
    console.log(this.date);
  }

  setData() {
    this.date = new Date();
  }

  keyDown({
    keyCode,
    target: {
      value
    }
  }) {
    if (keyCode === 13) {
      console.log(value);
    }
  }

}
