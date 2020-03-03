import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dummy = [
    {head: 'Introduction', url: 'intro', list: [{name: 'Beginners Guide', url: '1'}, {name: 'Advanced Guide', url: '2'}, {name: 'Best Practices', url: '3'}, {name: 'Other Links', url: '4'}, {name: 'Free Resources', url: '5'}]},
    {head: 'Web Developers Guide', url: 'one', list: [{name: 'Beginners Guide', url: '1'}, {name: 'Advanced Guide', url: '2'}, {name: 'Best Practices', url: '3'}]},
    {head: 'Hybrid Apps', url: 'two', list: [{name: 'Beginners Guide', url: ''}, {name: 'Advanced Guide', url: ''}, {name: 'Best Practices', url: ''}]},
    {head: 'Cyber Security', url: 'three', list: [{name: 'Beginners Guide', url: ''}, {name: 'Advanced Guide', url: ''}, {name: 'Best Practices', url: ''}]},
    {head: 'Useful Links', url: '', list: [{name: 'Beginners Guide', url: ''}, {name: 'Advanced Guide', url: ''}, {name: 'Best Practices', url: ''}]},
    {head: 'Beginners Guide', list: [{name: 'Beginners Guide', url: ''}, {name: 'Advanced Guide', url: ''}, {name: 'Best Practices', url: ''}]},
    {head: 'Developers Guide', list: [{name: 'Beginners Guide', url: ''}, {name: 'Advanced Guide', url: ''}, {name: 'Best Practices', url: ''}]},
    {head: 'Remote Work', list: [{name: 'Beginners Guide', url: ''}, {name: 'Advanced Guide', url: ''}, {name: 'Best Practices', url: ''}]},
    {head: 'Introduction', list: [{name: 'Beginners Guide', url: ''}, {name: 'Advanced Guide', url: ''}, {name: 'Best Practices', url: ''}]},
    {head: 'Web Developers Guide', list: [{name: 'Beginners Guide', url: ''}, {name: 'Advanced Guide', url: ''}, {name: 'Best Practices', url: ''}]},
    {head: 'Hybrid Apps', list: [{name: 'Beginners Guide', url: ''}, {name: 'Advanced Guide', url: ''}, {name: 'Best Practices', url: ''}]},
    {head: 'Cyber Security', list: [{name: 'Beginners Guide', url: ''}, {name: 'Advanced Guide', url: ''}, {name: 'Best Practices', url: ''}]},
    {head: 'Useful Links', list: [{name: 'Beginners Guide', url: ''}, {name: 'Advanced Guide', url: ''}, {name: 'Best Practices', url: ''}]},
    {head: 'Beginners Guide', list: [{name: 'Beginners Guide', url: ''}, {name: 'Advanced Guide', url: ''}, {name: 'Best Practices', url: ''}]},
    {head: 'Developers Guide', list: [{name: 'Beginners Guide', url: ''}, {name: 'Advanced Guide', url: ''}, {name: 'Best Practices', url: ''}]},
    {head: 'Remote Work', list: [{name: 'Beginners Guide', url: ''}, {name: 'Advanced Guide', url: ''}, {name: 'Best Practices', url: ''}]},
  ];
  public d2 = [1,1,1,1,1,1]


  public currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(i) {
    this.currentIndex = i;
  }
}
