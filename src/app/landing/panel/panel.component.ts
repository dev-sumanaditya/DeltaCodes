import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, RouterEvent, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public hideTopNav: boolean = false;
  public loading: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(this.Interceptor);
  }

  public apply(status) {
    if(status) {
      $('#loading').addClass('hide');
    } else {
      $('#loading').removeClass('hide');
    }
  }

  Interceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
      console.log(event);
      this.apply(true);
    }
    if (event instanceof NavigationEnd) {
      this.loading = false
      console.log(event);
      this.apply(false);
    }
    if (event instanceof NavigationCancel) {
      this.loading = false
      console.log(event)
      this.apply(false);
    }
    if (event instanceof NavigationError) {
      this.loading = false
      console.log(event)
      this.apply(false)
    }
  }

  ngOnInit() {
    if(this.router.url != "/") {
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

  public SearchWindow: Boolean = false;
  public MenuWindow: Boolean = false;

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
