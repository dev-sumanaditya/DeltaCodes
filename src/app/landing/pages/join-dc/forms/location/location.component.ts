import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  public submitted: boolean = false;
  submit() {
    this.submitted = !this.submitted;
      this.router.navigate(['/join/qualification']);
  }

}
