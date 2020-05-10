import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.scss']
})
export class RetailComponent implements OnInit {

  coverData = {
    name: 'Retail & Ecommerce',
    detail: 'Innovative IT and Software Solutions to accelerate your digital transformation.',
    background: 'https://dcvideo.b-cdn.net/shopping.mp4'
  };

  descData = {
    head: 'Building Innovative Solutions for Retail and Ecommerce Industries',
    desc1: 'Our advanced technologies can help retail and ecommerce firms effecively manage and streamline supply chains and deliver a seamless omnichannel shopping and customer support experience.',
    desc2: 'Discover how intelligent solutions from DeltaCodes can help you work smarter and deliver a unique customer experience by leveraging data to meet, understand and deliver the exact needs of your customers.',
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
    name: 'Retail & Ecommerce Sector'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
