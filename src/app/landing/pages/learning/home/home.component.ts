import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public searching = false;

  constructor() { }

  ngOnInit(): void {
  }

  search(data) {
    this.searching = true;
  }

}
