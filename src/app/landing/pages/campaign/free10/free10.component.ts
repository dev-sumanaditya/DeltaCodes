import { Component, OnInit, AfterViewInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-free10',
  templateUrl: './free10.component.html',
  styleUrls: ['./free10.component.css']
})
export class Free10Component implements OnInit, AfterViewInit {


  public timeObj = {
    day: '',
    hrs: '',
    min: '',
    sec: '',
    dayht: '',
    hrsht: '',
    minht: '',
    secht: ''
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.timerFn();
  }

  public timerFn() {
    if (isPlatformBrowser(this.platformId)) {
      const countDownDate = new Date('May 22, 2020 12:00:00').getTime();
      const set = (data) => { this.timeObj = data; };
      const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const timer = {
          'day': days.toString(),
          'hrs': hours.toString(),
          'min': minutes.toString(),
          'sec': seconds.toString(),
          'dayht': Math.floor((days / 50) * 100),
          'hrsht': Math.floor((hours / 24) * 100),
          'minht': Math.floor((minutes / 60) * 100),
          'secht': Math.floor((seconds / 60) * 100)
        };
        set(timer);
        // If the count down is over, write some text
        if (distance < 0) {
          // for later..
        }
      }, 1000);
    }
  }

}
