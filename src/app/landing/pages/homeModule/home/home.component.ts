import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('anim') anim: ElementRef; 

  public posx;
  public posy;

  // human
  public phead = 0;
  public pheadSkew = 0;
  public pneck = 0;
  public pneckSkew = 0;
  public pbody = 0;
  public pbodySkew = 0;
  public pbicep = 0;
  public pbicepSkew = 0;
  public parm = 0;
  public parmSkew = 0;
  public ppalm = 0;
  public ppalmSkew = 0;
  



  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    let x = e.x;
    let y = e.y;
    this.posx = Math.floor(x/65);
    this.posy = '-' + Math.floor(y/65);

    this.phead = Math.floor((x + y)/1600);
    this.pheadSkew = Math.floor((x+y)/800);
    
    this.pneck = Math.floor((x + y)/1600);
    this.pneckSkew = Math.floor((x+y)/800);

    this.pbicep = Math.floor((x + y)/1200);
    this.pbicepSkew = Math.floor((x+y)/1200);

    this.parm = Math.floor((x + y)/600);
    this.parmSkew = Math.floor((x+y)/1200);

    this.ppalm = Math.floor((x + y)/200);
    this.ppalmSkew = Math.floor((x+y)/800);
  }



  ngOnInit() { }

  ngAfterViewInit() {
    this.time();
  }

  public hide: boolean = true;
  public animate: boolean = false;

  public idarray = [
    '01',
    '02',
    '03'
  ]
  public headarray = [
    'Start Up Your',
    'Boost Your',
    'A New Era of'
  ]
  public headarray2 = [
    'Dream',
    'Business',
    'Innovation'
  ]

  public detailarray = [
    'Have an IDEA? Bring it to the world with the help of our experienced developers who dedicatedly work with you to bring out the best version of your product.',
    'Be it SEO, Digital Marketing or just some minor tweaks to rank your website, Our specialized team of digital marketing experts can handle it all.',
    'Drones? AI? Blockchain and Machine Learning? We love these words.. Be it autonomous flights to wearable tech, Our team of Data Scientists and Developers can build all the Algorithms.'
  ]

  public services = [
    {
      name: 'Static Websites',
      url: '/assets/i3/1.png'
    },
    {
      name: 'Dynamic Websites',
      url: '/assets/i3/2.png'
    },
    {
      name: 'Web Apps',
      url: '/assets/i3/3.png'
    },
    {
      name: 'Progressive Web Apps',
      url: '/assets/i3/4.png'
    },
    {
      name: 'Hybrid Apps',
      url: '/assets/i3/5.png'
    },
    {
      name: 'Android Apps',
      url: '/assets/i3/6.png'
    },
    {
      name: 'IOS Apps',
      url: '/assets/i3/7.png'
    },
    {
      name: 'Desktop Apps',
      url: '/assets/i3/8.png'
    },
    {
      name: 'Backend API Development',
      url: '/assets/i3/9.png'
    },{
      name: 'Frontend Development',
      url: '/assets/i3/10.png'
    },{
      name: 'API Integration',
      url: '/assets/i3/11.png'
    },
    {
      name: 'Wearable Tech',
      url: '/assets/i3/12.png'
    },
    {
      name: 'Data Science',
      url: '/assets/i3/13.png'
    },
    {
      name: 'Machine Learning',
      url: '/assets/i3/14.png'
    },
    {
      name: 'Image Processing',
      url: '/assets/i3/15.png'
    },
    {
      name: 'AR/VR',
      url: '/assets/i3/16.png'
    },
    {
      name: 'AI',
      url: '/assets/i3/16b.png'
    },
    {
      name: 'UI/UX Design',
      url: '/assets/i3/17.png'
    },
    {
      name: 'Arduino',
      url: '/assets/i3/18.png'
    },
    {
      name: 'Raspberry-Pi',
      url: '/assets/i3/19.png'
    },
    {
      name: 'Drones/Robotics',
      url: '/assets/i3/20.png'
    },
    {
      name: 'Automation',
      url: '/assets/i3/21.png'
    },
    {
      name: 'Sensors and Microprocessors',
      url: '/assets/i3/22.png'
    },
    {
      name: 'CAD Designing',
      url: '/assets/i3/23.png'
    },
    {
      name: 'E-Commerce',
      url: '/assets/i3/24.png'
    },
    {
      name: 'Wordpress',
      url: '/assets/i3/25.png'
    },
    {
      name: 'SEO',
      url: '/assets/i3/26.png'
    },
    {
      name: 'Digital Marketing',
      url: '/assets/i3/27.png'
    },
    {
      name: 'Website Optimization',
      url: '/assets/i3/28.png'
    },
    {
      name: 'Maintenance',
      url: '/assets/i3/3.png'
    },
  ]

  public head = '';
  public head2 = '';
  public id = '';
  public detail = '';

  public callHide = () => {
    this.hide = true;
    this.animate = false;
    setTimeout(()=>{
      this.hide = false;
    }, 400);
    setTimeout(()=>{
      this.animate = true;
    }, 400);
  }

  public index = -1;
  public start = 100;
  public time = () => {
    this.callHide();
    setTimeout(() => {
      this.head = this.headarray[this.index];
      this.head2 = this.headarray2[this.index];
      this.id = this.idarray[this.index];
      this.detail = this.detailarray[this.index];
      if (this.index == 0) {
        this.start = 7000;
      }
      // Then recall the parent function to
      // create a recursive loop.
      if(this.index == 2) {
        this.index=0
      } else {
        this.index++;
      }
      this.time();
    }, this.start);
}
}