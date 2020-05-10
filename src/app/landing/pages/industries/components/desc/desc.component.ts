import { Component, OnInit, Input } from '@angular/core';

export interface Datatype {
  head: String;
  desc1: String;
  desc2: String;
  url: String;
}

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.scss']
})
export class DescComponent implements OnInit {

  @Input() Data: Datatype;

  constructor() { }

  ngOnInit(): void {
  }

}
