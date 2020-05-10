import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public data = {
    route: '',
    heading: 'Services',
    detail: 'Harness the power of digital to drive growth with our innovative services and business solutions.',
    moreURL: 'industries'
  };

  public services = [
    {
      name: 'Product Engineering',
      des: 'something',
      url: 'product'
    },
    {
      name: 'Web Development',
      des: 'something',
      url: 'web'
    },
    {
      name: 'App Development',
      des: 'something',
      url: 'app'
    },
    {
      name: 'Software Development',
      des: 'something',
      url: 'software'
    },
    {
      name: 'Q/A & Testing',
      des: 'something',
      url: 'testing'
    },
    {
      name: 'IT Consulting',
      des: 'something',
      url: 'consulting'
    },
    {
      name: 'UI / UX Development',
      des: 'something',
      url: 'uiux'
    },
    {
      name: 'Data Aanalytics',
      des: 'something',
      url: 'analytics'
    },
    {
      name: 'Cyber Security',
      des: 'something',
      url: 'security'
    },
    {
      name: '3D Modeling',
      des: 'something',
      url: '3d'
    },
    {
      name: 'IoT Solutions',
      des: 'something',
      url: 'iot'
    },
    {
      name: "Industrial Robotics & UAV's",
      des: 'something',
      url: 'robotics'
    },
  ];



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
