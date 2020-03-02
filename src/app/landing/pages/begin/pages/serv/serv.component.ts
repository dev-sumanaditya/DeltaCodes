import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';

import { timer } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from "@angular/core";
import { StartService } from 'src/app/landing/services/start.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-serv',
  templateUrl: './serv.component.html',
  styleUrls: ['./serv.component.css']
})
export class ServComponent implements OnInit, AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private _stService: StartService, private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._stService.setSegment('Service');
  }

  public showM1: boolean = true;
  public showM2: boolean = false;
  public loading: boolean = false;
  public submit(data) {
    this.showM1 = false;
    this.loading = true;

    switch(data) {
      case 1:
        this._stService.setType('SEO and Marketing');
        break;
      case 2:
        this._stService.setType('Maintenance and Support');
        break;
      case 3:
        this._stService.setType('API and Integration');
        break;
      case 4:
        this._stService.setType('Hire a team');
        break;
      default:
        break;
    }
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
        break;
    }

    if (isPlatformBrowser(this.platformId)) {
      const timers = timer(600);
      timers.subscribe((e) => {
        this.router.navigate(['begin/hire']);
      });
    }
  }
}
