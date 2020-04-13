import { Component, OnInit, Input } from '@angular/core';

export interface Datatype {
  name: String;
  icon: String;
  text: String;
}
@Component({
  selector: 'app-servings',
  templateUrl: './servings.component.html',
  styleUrls: ['./servings.component.css']
})
export class ServingsComponent implements OnInit {

  @Input() Data: Datatype[];

  constructor() { }

  ngOnInit(): void {
  }

}
