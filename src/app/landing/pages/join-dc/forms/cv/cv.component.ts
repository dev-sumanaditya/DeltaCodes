import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  public submitted: boolean = false;
  submit() {
    this.submitted = !this.submitted;
      this.router.navigate(['/career']);
  }


  public file;
  public uploaded: boolean = false;

  onFileSelected(event) {
    this.file = event[0];
    this.uploaded = true;
    console.log(this.file);
  }

}
