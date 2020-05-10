import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  public submitted: boolean = false;
  submit() {
    this.submitted = !this.submitted;
      this.router.navigate(['/join/resume']);
  }
}
