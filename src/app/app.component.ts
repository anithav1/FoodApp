import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// import * as AOS from 'aos';
import { LoggerService } from 'my-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
  // title = 'FoodAppAngular';
  // ngOnInit()
  // {
  //   $(document).ready(function(){
  //     alert("ok janu");
  //   });
  // }
// }


export class AppComponent {
  title = 'FoodAppAngular';

  constructor(private loggerService: LoggerService)  {
   this.loggerService.log('Hello world');
  }


    }


    // $(document).ready(function(){
    //   alert("ok janu");
    // });
    // AOS.init();


