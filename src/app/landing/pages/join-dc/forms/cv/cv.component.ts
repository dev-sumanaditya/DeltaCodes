import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  public submitted: boolean = false;
  submit() {
    this.submitted = !this.submitted;
    setTimeout(() => {
      this.router.navigate(['/career']);
    }, 2000)
  }


  public file;
  public uploaded: boolean = false;

  onFileSelected(event) {
    this.file = event[0];
    this.uploaded = true;
    console.log(this.file);
  }

}