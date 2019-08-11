import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  @ViewChild('myBox') myBox: any;
  @ViewChild('header') header: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.myBox.nativeElement);
    this.myBox.nativeElement.style.color = 'red';
  }

  getChild() {
    this.header.home();
  }

}
