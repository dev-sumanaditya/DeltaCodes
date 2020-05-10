import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, RouterEvent, NavigationEnd, NavigationCancel, NavigationError, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AnalyticsService } from '../services/analytics.service';

declare let gtag: Function;


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, AfterViewInit {

  public hideTopNav: Boolean = false;
  public loading: Boolean = false;

  public cookieStatus = false;

  public SearchWindow: Boolean = false;
  public MenuWindow: Boolean = false;

  public navWhite: Boolean = false;

  @ViewChild('loading', { static: true }) _ldng: ElementRef;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private analyticsService: AnalyticsService,
    private route: ActivatedRoute
  ) {}

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

          gtag('config', 'G-FQ8VNLKTGM', {
            'page_path': event.urlAfterRedirects
          });

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

  public navigate(event) {
    this.router.navigate(['/', event]).then( nav => {
      if (event === '/') {
        const val = 'home';
        this.analyticsService.eventEmitter(
          'navigate',
          'navigation',
          'navigated',
          val
        );
      } else {
        const val = event;
        this.analyticsService.eventEmitter(
          'navigate',
          'navigation',
          'navigated',
          val
        );
      }
    });
  }

  public analytics(event) {
    this.analyticsService.eventEmitter(
      'navigate',
      'navigation',
      'navigated',
      event
    )
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
      if (this.route.snapshot.firstChild.url[0].path === 'industries' || 'checklist') {
        this.navWhite = false;
      } else {
        this.navWhite = true;
      }
    } else {
      this.hideTopNav = false;
      this.navWhite = false;
    }
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url !== '/') {
          this.hideTopNav = true;
          if (this.route.snapshot.firstChild.url[0].path === 'industries' || 'checklist') {
            this.navWhite = false;
          } else {
            this.navWhite = true;
          }
        } else {
          this.hideTopNav = false;
          this.navWhite = false;
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
