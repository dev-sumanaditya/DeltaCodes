import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  public submitted: boolean = false;
  submit() {
    this.submitted = !this.submitted;
      this.router.navigate(['/join/location']);
  }

}
