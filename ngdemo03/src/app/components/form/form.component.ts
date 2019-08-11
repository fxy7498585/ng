import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public userInfo:object = {
    username: '',
    sex: '1',
    cityList: ['北京', '天津', '大连', '重庆'],
    city: '北京',
    hobby: [{
      title: '游戏',
      checked: false
    },
    {
      title: '吃饭',
      checked: false
    },
    {
      title: '跑步',
      checked: false
    }],
    mark: 'asdfasdfsadf\nsadf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf'
  }

  constructor() { }

  ngOnInit() {
  }

  doSubmit() {
    console.log(this.userInfo)
  }

}
