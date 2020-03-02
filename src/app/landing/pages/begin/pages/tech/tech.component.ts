import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartService } from 'src/app/landing/services/start.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit, AfterViewInit {

  constructor(public _router: Router, private _stService: StartService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._stService.setSegment('Tech');
  }

  public submit(data) {
    switch(data) {
      case 1:
        this._stService.setType('Data Science and ML');
        break;
      case 2:
        this._stService.setType('AR / VR');
        break;
      case 3:
        this._stService.setType('AI and Automation');
        break;
      case 4:
        this._stService.setType('3D Modeling');
        break;
      case 5:
        this._stService.setType('Microcontrollers');
        break;
      default:
        break;
    }

    this._router.navigate(['/begin/hire']);
  }
}
