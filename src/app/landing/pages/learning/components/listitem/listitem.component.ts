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
  @Input() index: number;

  dummy = [
    {
      name: 'Some name of topic',
      url: ''
    },
    {
      name: 'Some other topic',
      url: ''
    },
    {
      name: 'Some other new topic',
      url: ''
    },
    {
      name: 'Some name of topic',
      url: ''
    },
    {
      name: 'Some other topic',
      url: ''
    },
    {
      name: 'Some other new topic',
      url: ''
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
