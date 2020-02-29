import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2
} from '@angular/core';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit, AfterViewInit {

  public left = 40; // left percentage
  public mx;
  public x;

  @ViewChild('bike', { static: true }) bike: ElementRef;

  constructor(public renderer: Renderer2) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.move();
  }

  @HostListener('body:mousemove', ['$event'])
  onMouseMove(e) {
    const posx = e.x;
    const screenx = e.view.innerWidth;
    const midx = Math.round(screenx / 2);
    this.set(midx, posx);
  }

  listen() {

  }

  public set(mx, x) {
    this.mx = mx;
    this.x = x;
  }

  async move() {
    const current = this.left;
    if (this.x > this.mx) {
      if (this.left < 90) {
        this.left++;
        this.apply(this.left);
        this.renderer.removeClass(this.bike.nativeElement, 'left');
      }
      this.move();
    } else {
      if (this.left > -5) {
        this.left--;
        this.apply(this.left);
        this.renderer.addClass(this.bike.nativeElement, 'left');
      }
      this.move();
    }
  }

  public apply(left) {
    this.renderer.setStyle(this.bike.nativeElement, 'left', left + '%');
  }
}
