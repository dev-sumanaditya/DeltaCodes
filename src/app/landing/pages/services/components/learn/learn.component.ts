import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {


  items = [
    {
      head: 'Optimize IT to accelerate digital transformation',
      p: 'Modernize and extend legacy IT to cloud-enabled hybrid, open platforms to gain agility and flexibility.',
      url: 'industries'
    },
    {
      head: 'Modernize applications to increase agility',
      p: 'Organizations that invest and modernize are 2X as successful in their digital transformations.',
      url: 'industries'
    },
    {
      head: 'Accelerate innovation by building cloud native',
      p: 'Build once, iterate rapidly, and deploy anywhere for lower costs, faster time to market and increased revenue growth.',
      url: 'industries'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
