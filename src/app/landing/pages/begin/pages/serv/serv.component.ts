import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serv',
  templateUrl: './serv.component.html',
  styleUrls: ['./serv.component.css']
})
export class ServComponent implements OnInit {

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

}
