import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, RouterEvent, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

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
      this.loading = true
    }
    if (event instanceof NavigationEnd) {
      this.loading = false
    }
    if (event instanceof NavigationCancel) {
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.loading = false
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
        console.log(event.url);
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
