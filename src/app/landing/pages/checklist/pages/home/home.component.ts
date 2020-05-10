import { Component, OnInit } from '@angular/core';
import { CheckService } from '../../check.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data;

  constructor(private checkservice: CheckService) { }

  ngOnInit(): void {
    this.data = this.checkservice.getData();
  }

}
