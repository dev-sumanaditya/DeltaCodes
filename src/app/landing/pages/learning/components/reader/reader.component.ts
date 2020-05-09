import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReaderService } from '../../services/reader.service';


@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit, AfterViewInit{

  @Input() topic;
  public params = null;
  public Intro = false;
  public html;

  public loading = false;

  constructor(private route: ActivatedRoute, private readerService: ReaderService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.params = params;
      this.getdata();
      if (!params.topic) {
        console.log('default');
      }
    });
  }

  ngAfterViewInit() {
    if (!this.params.topic) {
      this.showIntro();
    }
    this.getdata();
  }

  showIntro() {
    this.Intro = true;
  }

  getdata() {
    this.loading = true;

    setTimeout(() => {
      this.html = this.readerService.getHTML();
      this.loading = false;
    }, 1000);
  }

}
