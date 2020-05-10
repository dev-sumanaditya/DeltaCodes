import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent implements OnInit {

  public data = {
    route: 'IT Consulting',
    heading: 'Consultency Services',
    detail: 'Explore the services we offer at deltacodes by using lorem ipsum this is some text to cover.',
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
