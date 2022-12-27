import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';

import * as $ from 'jquery';
// import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
  // title = 'foodappangular';
  // ngOnInit()
  // {
  //   $(document).ready(function(){
  //     alert("ok janu");
  //   });
  // }
// }


export class AppComponent implements OnInit{
  title = 'foodappangular';
  ngOnInit()
  {
    // $(document).ready(function(){
    //   alert("ok janu");
    // });
    // AOS.init();
  }
}