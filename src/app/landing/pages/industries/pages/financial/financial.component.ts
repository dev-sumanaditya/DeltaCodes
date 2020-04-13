import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {

  coverData = {
    name: 'Banking & Financial',
    detail: 'Innovative IT and Software Solutions to accelerate your digital transformation.',
    background: 'https://dcvideo.b-cdn.net/finance.mp4'
  };

  descData = {
    head: 'Building Intelligent IT Solutions for Banks and Financial Institutions',
    desc1: 'Our advanced technologies like cloud, mobile, big data, and innovative technologies like AI and machine learning can help banks and financial instutions build an integrated customer experience.',
    desc2: 'Discover how intelligent solutions from DeltaCodes can help you work smarter and improve customer acquisition and retention process while creating a reputation for innovation and modernity. ',
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
    name: 'Banking & Financial Sector'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
