import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public mainblogs = [1,1];
  public subblogs = [1,1,1,1,1,1,1,1,1];

}
