import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public dummy = [1, 1, 1];

  img = '/assets/industries/common/2.jpeg';

  constructor() { }

  ngOnInit(): void {
  }

}
