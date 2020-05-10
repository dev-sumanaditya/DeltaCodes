import { Component, OnInit, Input } from '@angular/core';

export interface Datatype {
  name: String;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() Data: Datatype;

  constructor() { }

  ngOnInit(): void {
  }

}
