import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id;
  page = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['topic'];
      this.page = params['title'];
    });
  }
}
