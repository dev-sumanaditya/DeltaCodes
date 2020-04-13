import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  coverData = {
    name: 'Education & Digital Learning',
    detail: 'Innovative IT and Software Solutions to accelerate your digital transformation.',
    background: 'https://dcvideo.b-cdn.net/education.mp4'
  };

  descData = {
    head: 'Building Innovative Solutions for Education and Digital Learning Industries',
    desc1: 'Our intelligent technologies can help education and digital learning institutions identify prospects, generate leads and deliver unique solutions to customers by leveraging the power of data.',
    desc2: 'Discover how dynamic solutions from DeltaCodes can help you work smarter and help you deliver desirable results to customers and students all while addressing the new age cyber threats and piracy issues.',
    url: '/blog'
  };

  public next = [
    {
      name: 'Artificial Intelligence',
      icon: 'ai',
      text: `Use Artificial Intelligence to analyze energy and utility data so
      you can deliver affordable and sustainable services to your customers.`
    },
    {
      name: 'IoT',
      icon: 'iot',
      text: `Monitor Energy and utility data with technologies tailored to predict, automate and optimize
       operations resulting in effecient allocation of resources.`
    },
    {
      name: 'Blockchain',
      icon: 'blockchain',
      text: `Leverage Blockchain Technology to increase data security and build system transparency
       throughout your business – all the while gaining the trust of your consumers.`
    },
    {
      name: 'Cloud',
      icon: 'cloud',
      text: `By leveraging the power of Cloud you can use energy and utility data to improve service operations,
      ease product development, and deliver real-time insights to cut down on costs.`
    },
  ];

  public contact = {
    name: 'Education Sector'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
