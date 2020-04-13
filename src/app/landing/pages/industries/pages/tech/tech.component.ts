import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  coverData = {
    name: 'Tech & innovation (R&D)',
    detail: 'Innovative IT and Software Solutions to accelerate your digital transformation.',
    background: 'https://dcvideo.b-cdn.net/tech.mp4'
  };

  descData = {
    head: 'Building Intelligent Machines and Solutions for New Age Industries',
    desc1: 'Our advanced technologies team can help companies build high-performing solutions in innovative technology space like AI, machine learning, AR/VR, unmanned aerial vehicles and Robotics.',
    desc2: 'Discover how dynamic solutions from DeltaCodes can help you work smarter by adding an extra layer of performance and by embracing emerging technologies without extensive capital expenditure.',
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
    name: 'Tech & Innovation Sector'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
