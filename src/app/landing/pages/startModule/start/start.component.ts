import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit, AfterViewInit {

  constructor(public renderer: Renderer2) { }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(()=> {this.move()},1000) 
  }

  @ViewChild('bike') bike: ElementRef;

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    let posx = e.x;
    let screenx = e.view.screen.availWidth;
    let midx = Math.round(screenx/2);
    this.set(midx,posx);
  }

  public left = 40; // left percentage
  public mx;
  public x;

  public set(mx,x){
    this.mx = mx;
    this.x = x;
  }

  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async move() {
    await this.timeout(100);
    let current = this.left;
    if(this.x > this.mx) {
      if(this.left < 90) {
        this.left++;
        this.apply(this.left);
        this.renderer.removeClass(this.bike.nativeElement, 'left');
      }
      this.move();  
    } else {
      if(this.left > -5) {
        this.left--;
        this.apply(this.left);
        this.renderer.addClass(this.bike.nativeElement, 'left')
      }
      this.move();
    }
  }

  public apply(left) {
    this.renderer.setStyle(this.bike.nativeElement, "left", left+'%');
  }
}
