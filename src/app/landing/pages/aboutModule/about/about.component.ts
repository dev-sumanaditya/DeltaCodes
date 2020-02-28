import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  @ViewChild('i1', { static: true }) i1: ElementRef;
  @ViewChild('i2', { static: true }) i2: ElementRef;
  @ViewChild('i3', { static: true }) i3: ElementRef;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.i1.nativeElement.classList.add('start');
    this.i2.nativeElement.classList.add('start');
    this.i3.nativeElement.classList.add('start');
  }
}
