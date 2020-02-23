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

  Interceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
      console.log(this.loading);
      $('#loading').removeClass('hide');
      return;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        this.loading = false;
        console.log(this.loading);
        $('#loading').addClass('hide');
      }, 1000);
      return;
    }
    if (event instanceof NavigationCancel) {
      setTimeout(() => {
        this.loading = false;
        console.log(this.loading);
        $('#loading').addClass('hide');
      }, 1000);
      return;
    }
    if (event instanceof NavigationError) {
      setTimeout(() => {
        this.loading = false;
        console.log(this.loading);
        $('#loading').addClass('hide');
      }, 1000);
      return;
    }
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
