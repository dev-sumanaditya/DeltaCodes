import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CampaignService, CampaignData } from '../../../services/campaign.service';


@Component({
  selector: 'app-regfree',
  templateUrl: './regfree.component.html',
  styleUrls: ['./regfree.component.scss']
})
export class RegfreeComponent implements OnInit {


  public state = 1;
  public validInputs = ['+', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


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
      contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      country: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      position: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      projectName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(140)]],
      description: ['', [Validators.required, Validators.maxLength(801)]],
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
        if (this.f.country.invalid || this.f.position.invalid || this.f.projectName.invalid) {
          return;
        } else {
          this.state += 1;
        }
      } else if (this.state === 3) {
        this.s3 = true;
        if (this.f.description.invalid) {
          return;
        } else {
          this.submitted = true;
          this._cs.submitData(this.myForm2.value);
        }
      }
  }


  fire(e) {
    switch (e.key) {
      case '+':
        return;
      case '0':
        return;
      case '1':
        return;
      case '2':
        return;
      case '3':
        return;
      case '4':
        return;
      case '5':
        return;
      case '6':
        return;
      case '7':
        return;
      case '8':
        return;
      case '9':
        return;
      case 'Backspace':
        return;
      case ' ':
        return;
      case 'ArrowLeft':
        return;
      case 'ArrowRight':
        return;
      case 'Delete':
        return;
      default:
        e.preventDefault();
    }
  }
}
