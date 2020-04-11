import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, RouterEvent, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, AfterViewInit {

  public hideTopNav: Boolean = false;
  public loading: Boolean = false;

  public cookieStatus = false;

  public SearchWindow: Boolean = false;
  public MenuWindow: Boolean = false;

  @ViewChild('loading', { static: true }) _ldng: ElementRef;

  constructor(private router: Router, private cookieService: CookieService) {}

  ngAfterViewInit() {
    this.router.events.forEach((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        this._ldng.nativeElement.classList.remove('hide');
        return;
      }
      if (event instanceof NavigationEnd) {
          this.loading = false;
          this._ldng.nativeElement.classList.add('hide');
        return;
      }
      if (event instanceof NavigationCancel) {
          this.loading = false;
          this._ldng.nativeElement.classList.add('hide');
        return;
      }
      if (event instanceof NavigationError) {
          this.loading = false;
          this._ldng.nativeElement.classList.add('hide');
        return;
      }
    });


    if (this.cookieService.check('visited')) {
      this.cookieStatus = false;
    } else {
      this.cookieStatus = true;
    }
  }

  click() {
    this.loading = true;
  }

  public acceptCookie() {
    this.cookieStatus = false;
    this.cookieService.set('visited', 'true', 604800);
  }

  public declineCookie() {
    this.cookieStatus = false;
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
