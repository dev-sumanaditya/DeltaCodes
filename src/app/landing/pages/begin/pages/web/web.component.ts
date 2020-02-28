import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public showM1: boolean = true;
  public showM2: boolean = false;
  public loading: boolean = false;
  public submit(data) {
    console.log(data);
    this.showM1 = false;
    this.loading = true;

      this.loading = false;
      this.showM2 = true;
  }
}
