import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-asynchronous',
  templateUrl: './asynchronous.component.html',
  styleUrls: ['./asynchronous.component.css']
})
export class AsynchronousComponent implements OnInit, OnDestroy {
  timeoutId:any;
  timeoutResponse:string='test'

  constructor() { }

  ngOnInit(): void {
  }

  checkSetTimeout(){
    this.timeoutId = setTimeout(() => {
      console.log('Inside setTimeout');
      this.timeoutResponse = 'setTimeoutCheck';
    },1000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);   
  }

}
