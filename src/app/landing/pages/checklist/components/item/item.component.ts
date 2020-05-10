import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() data;

  public dummy = [1,1,1,1,1,1];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.data);
  }
}
