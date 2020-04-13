import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.css']
})
export class OilComponent implements OnInit {

  coverData = {
    name: 'Oil, Gas & Power Industry',
    detail: 'Innovative IT and Software Solutions to accelerate your digital transformation.',
    background: 'https://dcvideo.b-cdn.net/oil.mp4'
  };

  descData = {
    head: 'Building Integrated Customer Experiences in the Energy Space',
    desc1: 'Our advanced technologies can help energy and utility companies harness their data to increase efficiency and reduce expenditures.',
    desc2: 'Discover how dynamic solutions from DeltaCodes can help you work smarter and improve how you generate and distribute energy to customers.',
    url: '/blog'
  }

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
    name: 'Oil & Energy Sector'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
