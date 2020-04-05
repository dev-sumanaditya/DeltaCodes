import { Component, OnInit, Input } from '@angular/core';

export interface DataType {
  que: String;
  ans: String;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  public expanded = -1;

  @Input() Data: DataType;

  constructor() { }

  ngOnInit(): void {
  }

  expand(id) {
    if (this.expanded === id) {
      this.expanded = -1;
    } else {
      this.expanded = id;
    }
  }

}
