import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {

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

    setTimeout(() => {
      this.loading = false;
      this.showM2 = true;
    }, 1000);
  }

  public individual : boolean = true;
  public showForm : boolean = false;
  public submit2(e) {
    this.showM2 = false;
    this.loading = true
    setTimeout(() => {
      this.loading = false;
      this.showForm = true;
    }, 1000);
    if(e) {
      this.individual = true;
    } else {
      this.individual = false;
    }
  }

}
