import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { timer } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { StartService } from 'src/app/landing/services/start.service';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {

  public showM1: Boolean = true;
  public showM2: Boolean = false;
  public loading: Boolean = false;
  public individual: Boolean = true;
  public showForm: Boolean = false;

  myForm: FormGroup;
  submitted = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private _stService: StartService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.email, Validators.maxLength(80),
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      cname: ['', [Validators.minLength(3), Validators.maxLength(80)]],
      contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      query: ['', [Validators.maxLength(80)]]
    });
  }

  public submit3(form: FormGroup) {
    this.submitted = true;
    if (this.myForm.invalid) { return; } else {
      this._stService.setInfo(this.myForm.value);
      this._stService.submitData();
      this.loading = true;
      this.showForm = false;
    }
    if (isPlatformBrowser(this.platformId)) {
      const timers = timer(600);
      timers.subscribe((e) => {
        this.router.navigate(['/begin/success']);
      });
    }
  }

  get f() { return this.myForm.controls; }

  public submit(data) {
    this.showM1 = false;
    this.loading = true;

    switch(data) {
      case 1:
        this._stService.setScope('Short Term');
        break;
      case 2:
        this._stService.setScope('Recurring project');
        break;
      case 3:
        this._stService.setScope('Full Time Contract');
        break;
      default:
        break;
    }
    if (isPlatformBrowser(this.platformId)) {
      const timers = timer(600);
      timers.subscribe((e) => {
        this.loading = false;
        this.showM2 = true;
      });
    }
  }

  public submit2(e: boolean) {
    this.showM2 = false;
    this.loading = true;
    this._stService.setIndividual(e);
    if (isPlatformBrowser(this.platformId)) {
      const timers = timer(600);
      timers.subscribe((e) => {
        this.loading = false;
        this.showForm = true;
      });
    }
    if (e) {
      this.individual = true;
    } else {
      this.individual = false;
    }
  }

}
