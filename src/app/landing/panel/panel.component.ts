import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, RouterEvent, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, AfterViewInit {

  public hideTopNav: boolean = false;
  public loading: boolean = false;


  public SearchWindow: Boolean = false;
  public MenuWindow: Boolean = false;

  @ViewChild('loading') _ldng: ElementRef;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.router.events.forEach((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        this._ldng.nativeElement.classList.remove('hide');
        return;
      }
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.loading = false;
          this._ldng.nativeElement.classList.add('hide');
        }, 1000);
        return;
      }
      if (event instanceof NavigationCancel) {
        setTimeout(() => {
          this.loading = false;
          this._ldng.nativeElement.classList.add('hide');
        }, 1000);
        return;
      }
      if (event instanceof NavigationError) {
        setTimeout(() => {
          this.loading = false;
          this._ldng.nativeElement.classList.add('hide');
        }, 1000);
        return;
      }
    });
  }

  click() {
    this.loading = true;
  }

  ngOnInit() {
    if (this.router.url !== '/') {
      this.hideTopNav = true;
    } else {
      this.hideTopNav = false;
    }
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if(event.url !== '/') {
          this.hideTopNav = true;
        } else {
          this.hideTopNav = false;
        }
      }
    })
  }

  public showSearch() {
    this.SearchWindow = true;
  }
  public hideSearch() {
    this.SearchWindow = false;
  }

  public showMenu() {
    this.MenuWindow = true;
  }
  public hideMenu() {
    this.MenuWindow = false;
  }
}
