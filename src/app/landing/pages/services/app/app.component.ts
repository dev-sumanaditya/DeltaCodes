import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public data = {
    route: 'Mobile App',
    heading: 'Mobile Application Development',
    detail: 'Custom Application Development and Management Services',
    moreURL: 'case-studies'
  };

  public faq = [
    {
      que: 'What are the offerings of DeltaCodes?',
      // tslint:disable: max-line-length
      ans: 'The development of reliable and scalable software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.'
    },
    {
      que: 'What are the offerings of DeltaCodes?',
      // tslint:disable: max-line-length
      ans: 'The development of reliable and <a href="/">scalable software</a> solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.'
    },
    {
      que: 'What are the offerings of DeltaCodes?',
      // tslint:disable: max-line-length
      ans: 'The development of reliable and scalable software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.'
    },
    {
      que: 'What are the offerings of DeltaCodes?',
      // tslint:disable: max-line-length
      ans: 'The development of reliable and scalable software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
