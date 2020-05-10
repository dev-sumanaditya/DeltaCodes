import { Component, OnInit, Input } from '@angular/core';

export interface DataX {
  route: String;
  heading: String;
  detail: String;
  moreURL: String;
}

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Input() data: DataX;

  constructor() { }

  ngOnInit(): void {
  }

}
