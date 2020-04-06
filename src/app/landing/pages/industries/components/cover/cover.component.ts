import { Component, OnInit, Inject, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

export interface DataType {
  name: string;
  detail: string;
  background: string;
}

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  public imageUrl = '';
  public expand = false;
  public submitted = false;
  public submitted2 = false;
  public contact: Boolean = false;

  @Input() Data: DataType;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
  }

  cont() {
    if (!this.submitted2) {
      this.contact = true;
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          this.expand = true;
        }, 5);
      }
    }
  }

  submitCont() {
    this.submitted = true;
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.expand = false;
        this.contact = false;
        this.submitted2 = true;
      }, 2000);
    }
  }
}
