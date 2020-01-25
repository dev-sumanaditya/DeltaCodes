import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  public submitted: boolean = false;
  submit() {
    this.submitted = !this.submitted;
    setTimeout(() => {
      this.router.navigate(['/join/resume']);
    }, 2000)
  }
}
