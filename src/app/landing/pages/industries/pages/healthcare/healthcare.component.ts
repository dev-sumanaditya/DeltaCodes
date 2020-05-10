import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-healthcare',
  templateUrl: './healthcare.component.html',
  styleUrls: ['./healthcare.component.scss']
})
export class HealthcareComponent implements OnInit {

  coverData = {
    name: 'Healthcare & Life Sciences',
    detail: 'Innovative IT and Software Solutions to accelerate your digital transformation.',
    background: 'https://dcvideo.b-cdn.net/healthcare.mp4'
  };

  descData = {
    head: 'Modernizing and Reimagining the Future of Healthcare',
    desc1: 'Our advanced technologies can help global healthcare and life sciences enterprises to reimagine their business processes and deliver remarkable patient experiences',
    desc2: 'Discover how innovative solutions from DeltaCodes can help you leverage the power of digital transformation to reshape the way care is delivered across the ecosystem.',
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
    name: 'Healthcare Sector'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
