import { Component, OnInit } from '@angular/core';
import BlotFormatter from 'quill-blot-formatter';
import Quill from 'quill';
import { NgxSmartModalService } from 'ngx-smart-modal';


Quill.register('modules/blotFormatter', BlotFormatter);
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  public topics = [
    'HTML',
    'CSS',
    'JavaScript',
    'SCSS'
  ];

  public sections = [1, 1, 1, 1, 1, 1, 1, 1];

  public config = {
    blotFormatter: {},
    syntax: true,
    'toolbar': [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'align': [] }],
      ['blockquote', 'code-block'],
      ['link', 'image', 'video'],                         // link and image, video
    ]
  };

  constructor(public modalService: NgxSmartModalService) {}

  ngOnInit(): void {}

  changed($event) {
  }

  showModal() {
    this.modalService.getModal('createItem').open();
  }
}
