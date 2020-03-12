import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CampaignService, CampaignData } from '../../../services/campaign.service';


@Component({
  selector: 'app-regfree',
  templateUrl: './regfree.component.html',
  styleUrls: ['./regfree.component.css']
})
export class RegfreeComponent implements OnInit {


  public state = 1;

  myForm2: FormGroup;
  public submitted: Boolean = false;
  public s1 = false;
  public s2 = false;
  public s3 = false;

  constructor(private _cs: CampaignService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm2 = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      // tslint:disable-next-line:max-line-length
      email: ['', [Validators.required, Validators.minLength(5), Validators.email, Validators.maxLength(80), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      country: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      pos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      projectName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(140)]],
      des: ['', [Validators.required, Validators.maxLength(801)]],
    });
  }
  get f() { return this.myForm2.controls; }

  submit() {
      if (this.state === 1) {
        this.s1 = true;
        if (this.f.name.invalid || this.f.email.invalid || this.f.contact.invalid) {
          return;
        } else {
          this.state += 1;
        }
      } else if (this.state === 2) {
        this.s2 = true;
        if (this.f.country.invalid || this.f.pos.invalid || this.f.projectName.invalid) {
          return;
        } else {
          this.state += 1;
        }
      } else if (this.state === 3) {
        this.s3 = true;
        if (this.f.des.invalid) {
          return;
        } else {
          this.submitted = true;
          this._cs.submitData(this.myForm2.value);
        }
      }
  }
}
