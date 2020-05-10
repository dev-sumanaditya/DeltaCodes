import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {

  public list = [
    {
      name: 'HTML5',
      icon: '/assets/learning/languages/html5.svg',
      _id: 'html'
    },
    {
      name: 'C',
      icon: '/assets/learning/languages/c.svg',
      _id: 'c'
    },
    {
      name: 'Bootstrap',
      icon: '/assets/learning/languages/bootstrap.svg',
      _id: 'bootstrap'
    },
    {
      name: 'Github',
      icon: '/assets/learning/languages/github.svg',
      _id: 'github'
    },
    {
      name: 'Apache',
      icon: '/assets/learning/languages/apache.svg',
      _id: 'apache'
    },
    {
      name: 'Django',
      icon: '/assets/learning/languages/django.svg',
      _id: 'django'
    },
    {
      name: 'Electron',
      icon: '/assets/learning/languages/electron.svg',
      _id: 'electron'
    },
    {
      name: 'JAVA',
      icon: '/assets/learning/languages/java.svg'
    },
    {
      name: 'JavaScript',
      icon: '/assets/learning/languages/javascript.svg'
    }
    // {
    //   name: 'Linux',
    //   icon: '/assets/learning/languages/linux.svg'
    // },
    // {
    //   name: 'Material Design',
    //   icon: '/assets/learning/languages/materialdesign.svg'
    // },
    // {
    //   name: 'MySql',
    //   icon: '/assets/learning/languages/mysql.svg'
    // },
    // {
    //   name: 'Node Js',
    //   icon: '/assets/learning/languages/node-js.svg'
    // },
    // {
    //   name: 'PHP',
    //   icon: '/assets/learning/languages/php.svg'
    // },
    // {
    //   name: 'PyCharm',
    //   icon: '/assets/learning/languages/pycharm.svg'
    // },
    // {
    //   name: 'SASS',
    //   icon: '/assets/learning/languages/sass.svg'
    // },
    // {
    //   name: 'Sequelize',
    //   icon: '/assets/learning/languages/sequelize.svg'
    // },
    // {
    //   name: 'SSH',
    //   icon: '/assets/learning/languages/ssh.svg'
    // },
    // {
    //   name: 'TypeScript',
    //   icon: '/assets/learning/languages/typescript.svg'
    // },
    // {
    //   name: 'WebPack',
    //   icon: '/assets/learning/languages/webpack.svg'
    // }
  ];

  dummy = [1, 1, 1, 1];

  public topic_id;
  public params;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.topic_id = params.get('id');
    });

    this.route.queryParams.subscribe(params => {
      this.params = params;
    });
  }

}
