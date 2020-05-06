import { Component, OnInit, Input } from '@angular/core';


export interface HeaderType {
  name: string;
  icon: string;
  _id: string;
}

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent implements OnInit {

  @Input() header: HeaderType;
  @Input() activated: string;


  dummy = [
    {
      name: 'Introduction',
      url: 'intro'
    },
    {
      name: 'Data Sutructures',
      url: 'ds'
    },
    {
      name: 'Sorting Algorithms',
      url: 'sorting'
    },
    {
      name: 'Operators',
      url: 'operator'
    }
  ];

  public expanded = false;
  constructor() { }

  ngOnInit(): void {
  }

  expand() {
    this.expanded = true;
  }
}
