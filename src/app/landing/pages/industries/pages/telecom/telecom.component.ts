import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telecom',
  templateUrl: './telecom.component.html',
  styleUrls: ['./telecom.component.css']
})
export class TelecomComponent implements OnInit {

  coverData = {
    name: 'Telecom & Internet',
    detail: 'Innovative IT and Software Solutions to accelerate your digital transformation.',
    background: 'https://dcvideo.b-cdn.net/telecom.mp4'
  };

  descData = {
    head: 'Intelligent IT Solutions for Telecom and Internet Industries',
    desc1: 'Our advanced technologies can help telecom and internet companies harness their data to increase efficiency and reduce expenditures.',
    desc2: 'Discover how innovative solutions from DeltaCodes can help you reduce costs, increase efficiency and turn your existing data into actionable insights and turn existing assets into drivers of growth.',
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
    name: 'Telecom & Internet Sector'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
