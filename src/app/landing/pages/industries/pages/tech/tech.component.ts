import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  coverData = {
    name: 'Tech & innovation (R&D)',
    detail: 'Innovative IT and Software Solutions to accelerate your digital transformation.',
    background: 'https://dcvideo.b-cdn.net/tech.mp4'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
