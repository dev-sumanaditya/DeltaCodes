import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute, private readerService: ReaderService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.params = params;
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
    this.html = this.readerService.getHTML();
  }

}
