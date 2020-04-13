import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.css']
})
export class LogisticsComponent implements OnInit {

  coverData = {
    name: 'Logistics & Transportation',
    detail: 'Innovative IT and Software Solutions to accelerate your digital transformation.',
    background: 'https://dcvideo.b-cdn.net/logistics.mp4'
  };

  descData = {
    head: 'Intelligent IT Solutions for Logistics and Transportation Industries',
    desc1: 'Our advanced technologies can help logistics and transport companies harness their data to increase efficiency and reduce expenditures.',
    desc2: 'Discover how dynamic solutions from DeltaCodes can help you increase control, speed, and accuracy in your entire supply chain process all this while reducing costs and manual effort.',
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
    name: 'Logistics & Transportation Sector'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
