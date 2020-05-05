import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public list = [
    {
      name: 'HTML5',
      icon: '/assets/learning/languages/html5.svg'
    },
    {
      name: 'C',
      icon: '/assets/learning/languages/c.svg'
    },
    {
      name: 'Bootstrap',
      icon: '/assets/learning/languages/bootstrap.svg'
    },
    {
      name: 'Github',
      icon: '/assets/learning/languages/github.svg'
    },
    {
      name: 'Apache',
      icon: '/assets/learning/languages/apache.svg'
    },
    {
      name: 'Django',
      icon: '/assets/learning/languages/django.svg'
    },
    {
      name: 'Electron',
      icon: '/assets/learning/languages/electron.svg'
    },
    {
      name: 'HandleBars',
      icon: '/assets/learning/languages/handlebars.svg'
    },
    {
      name: 'Ionic',
      icon: '/assets/learning/languages/ionic.svg'
    },
    {
      name: 'JAVA',
      icon: '/assets/learning/languages/java.svg'
    },
    {
      name: 'JavaScript',
      icon: '/assets/learning/languages/javascript.svg'
    },
    {
      name: 'Linux',
      icon: '/assets/learning/languages/linux.svg'
    },
    {
      name: 'Material Design',
      icon: '/assets/learning/languages/materialdesign.svg'
    },
    {
      name: 'MySql',
      icon: '/assets/learning/languages/mysql.svg'
    },
    {
      name: 'Node Js',
      icon: '/assets/learning/languages/node-js.svg'
    },
    {
      name: 'PHP',
      icon: '/assets/learning/languages/php.svg'
    },
    {
      name: 'PyCharm',
      icon: '/assets/learning/languages/pycharm.svg'
    },
    {
      name: 'SASS',
      icon: '/assets/learning/languages/sass.svg'
    },
    {
      name: 'Sequelize',
      icon: '/assets/learning/languages/sequelize.svg'
    },
    {
      name: 'SSH',
      icon: '/assets/learning/languages/ssh.svg'
    },
    {
      name: 'TypeScript',
      icon: '/assets/learning/languages/typescript.svg'
    },
    {
      name: 'WebPack',
      icon: '/assets/learning/languages/webpack.svg'
    }
  ];

  public searching = false;

  constructor() { }

  ngOnInit(): void {
  }

  search(data) {
    this.searching = true;
  }

}
