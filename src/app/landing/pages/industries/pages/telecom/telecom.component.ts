import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telecom',
  templateUrl: './telecom.component.html',
  styleUrls: ['./telecom.component.css']
})
export class TelecomComponent implements OnInit {

  coverData = {
    name: 'Telecom & Internet',
    detail: 'Innovative IT and Software Solutions to accelerate your digital transformation.',
    background: '/assets/industries/backgrounds/telecom.jpeg'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
