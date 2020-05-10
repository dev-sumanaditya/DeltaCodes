import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public topics = [
    {
      name: 'Getting Started with Programming',
      url: 'start'
    },
    {
      name: 'Web Development Basics',
      url: 'web'
    },
    {
      name: 'Website Development',
      url: 'website'
    },
    {
      name: 'Web App Development',
      url: 'webapp'
    },
    {
      name: 'Mobile Application Development',
      url: 'app'
    },
    {
      name: 'Backend Development',
      url: 'backend'
    },
    {
      name: 'Hybrid App Development',
      url: 'hybrid'
    },
    {
      name: 'API Development',
      url: 'api'
    },
    {
      name: 'Web Technologies',
      url: 'webtechnologies'
    },
    {
      name: 'Cyber Security',
      url: 'security'
    },
    {
      name: 'Penetration Testing',
      url: 'pentest'
    },
    {
      name: 'Ethical Hacking',
      url: 'hacking'
    },
    {
      name: 'Android App Development',
      url: 'android'
    },
    {
      name: 'IOS App Development',
      url: 'ios'
    },
    {
      name: 'Desktop Apps',
      url: 'desktop'
    },
    {
      name: 'Structured Databases',
      url: 'android'
    },
    {
      name: 'NoSQL Databases',
      url: 'unstructured'
    },
    {
      name: 'IOT',
      url: 'iot'
    },
    {
      name: 'Machine Learning',
      url: 'machine learning'
    },
    {
      name: 'Artificial Intelligence',
      url: 'ai'
    },
    {
      name: 'Data Science',
      url: 'data'
    },
    {
      name: 'Resources',
      url: 'reources'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
