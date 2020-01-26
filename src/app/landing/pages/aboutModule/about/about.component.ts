import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('#i1').addClass('start');
      setTimeout(() => {
        $('#i2').addClass('start');
      }, 300);
      setTimeout(() => {
        $('#i3').addClass('start');
      }, 600);

      // Capture scroll events
      $(window).scroll(function(){
        
      }); 
    });
  }
  
  public show(e, id) {
    var pid = '#' + id;
    console.log(pid);
    if(e.value) {
      $(pid).addClass('start');
    }
  }

}