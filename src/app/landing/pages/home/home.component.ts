import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('anim') anim: ElementRef; 

  public posx;
  public posy;

  // human
  public phead = 0;
  public pneck = 0;
  public pbody = 0;
  public pbicep = 0;
  public parm = 0;
  public ppalm = 0;
  public spalm = 0;



  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    let x = e.x;
    let y = e.y;
    this.posx = Math.floor(x/65);
    this.posy = '-' + Math.floor(y/65);

    this.phead = Math.floor((x + y)/400);
    this.pbicep = Math.floor((x + y)/330);
    this.parm = Math.floor((x + y)/320);
    this.ppalm = Math.floor((x + y)/320);
    this.pneck = Math.floor((x + y)/350);
    this.spalm = Math.floor((x + y)/350);
  }



  ngOnInit() { }

  ngAfterViewInit() {
    this.time();
  }

  public hide: boolean = true;
  public animate: boolean = false;

  public idarray = [
    '01',
    '02',
    '03'
  ]
  public headarray = [
    'Start Up Your',
    'Boost Your',
    'A New Era of'
  ]
  public headarray2 = [
    'Dream',
    'Business',
    'Innovation'
  ]

  public head = '';
  public head2 = '';
  public id = '';

  public callHide = () => {
    this.hide = true;
    this.animate = false;
    setTimeout(()=>{
      this.hide = false;
    }, 400);
    setTimeout(()=>{
      this.animate = true;
    }, 400);
  }

  public index = 0;
  public start = 100;
  public time = () => {
    setTimeout(() => {
      this.head = this.headarray[this.index];
      this.head2 = this.headarray2[this.index];
      this.id = this.idarray[this.index];
      this.callHide();
      if (this.index == 1) {
        this.start = 7000;
      }
      // Then recall the parent function to
      // create a recursive loop.
      if(this.index == 2) {
        this.index=0
      } else {
        this.index++;
      }
      this.time();
    }, this.start);
}
}
