import { Component, OnInit, Inject, AfterViewInit, PLATFORM_ID } from '@angular/core';

import { timer } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { StartService } from 'src/app/landing/services/start.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit, AfterViewInit {

  public showM1: boolean = true;
  public showM2: boolean = false;
  public loading: boolean = false;


  constructor(@Inject(PLATFORM_ID) private platformId: Object, private _stService: StartService, private _router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._stService.setSegment('Web');
  }

  public submit(data) {
    switch(data) {
      case 1:
        this._stService.setType('Static Website');
        break;
      case 2:
        this._stService.setType('Dynamic Web App');
        break;
      case 3:
        this._stService.setType('Mobile Application');
        break;
      case 4:
        this._stService.setType('Both App and Website');
        break;
      default:
        this._stService.setType('Null');
    }
    this.showM1 = false;
    this.loading = true;
    if (isPlatformBrowser(this.platformId)) {
      const timers = timer(600);
      timers.subscribe((e) => {
        this.loading = false;
        this.showM2 = true;
      });
    }
  }

  public submit2(data) {
    this.loading = true;
    this.showM2 = false;
    switch(data) {
      case 1:
        this._stService.setSize('Small');
        break;
      case 2:
        this._stService.setSize('Medium');
        break;
      case 3:
        this._stService.setSize('Large');
        break;
      default:
        this._stService.setSize('Null');
        break;
    }

    if (isPlatformBrowser(this.platformId)) {
      const timers = timer(600);
      timers.subscribe((e) => {
        this._router.navigate(['/begin/hire']);
      });
    }
  }
}
