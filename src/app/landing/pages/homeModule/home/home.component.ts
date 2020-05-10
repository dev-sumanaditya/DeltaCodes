import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef, OnDestroy, Inject } from '@angular/core';

import {fromEvent, Subscription, timer} from 'rxjs';

import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {


  @ViewChild('anim', { static: true }) anim: ElementRef;
  @ViewChild('slider', { static: true }) sl1: ElementRef;
  @ViewChild('slider2', { static: true }) sl2: ElementRef;

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



  public hide: Boolean = true;
  public animate: Boolean = false;

  public head = '';
  public head2 = '';
  public id = '';
  public detail = '';

  public index = 0;
  public start = 100;

  public idarray = [
    '01',
    '02',
    '03'
  ];
  public headarray = [
    'Start Up Your',
    'Boost Your',
    'A New Era of'
  ];
  public headarray2 = [
    'Dream',
    'Business',
    'Innovation'
  ];

  public detailarray = [
    `Have an IDEA? Bring it to the world with the help of our experienced
     developers who dedicatedly work with you to bring out the best version of your product.`,
    `Be it SEO, Digital Marketing or just some minor tweaks to rank your website,
    Our specialized team of digital marketing experts can handle it all.`,
    `Drones? AI? Blockchain and Machine Learning? We love these words.. Be
    it autonomous flights to wearable tech, Our team of Data Scientists and Developers can build all the Algorithms.`
  ];


  public industries = [
    {
      name: 'Logistics & Transportation',
      des: `Build your end-to-end digital supply chain to drive efficiencies and
           shorten delivery times with our intelligent IT and software solution`,
      url: 'logistics',
      // tslint:disable-next-line: max-line-length
      image: '/assets/ind-component/1.jpg'
    },
    {
      name: 'Oil & Gas',
      des: `Build your end-to-end digital supply chain to drive efficiencies and
           shorten delivery times with our intelligent IT and software solution`,
      url: 'oil',
      // tslint:disable-next-line: max-line-length
      image: '/assets/ind-component/2.jpg'
    },
    {
      name: 'Telecom & Internet',
      des: `Build your end-to-end digital supply chain to drive efficiencies and
           shorten delivery times with our intelligent IT and software solution`,
      url: 'telecom',
      // tslint:disable-next-line: max-line-length
      image: '/assets/ind-component/3.jpg'
    },
    {
      name: 'Technology & Innovation',
      des: `Build your end-to-end digital supply chain to drive efficiencies and
           shorten delivery times with our intelligent IT and software solution`,
      url: 'tech',
      // tslint:disable-next-line: max-line-length
      image: '/assets/ind-component/4.jpg'
    },
    {
      name: 'Financial Services',
      des: `Build your end-to-end digital supply chain to drive efficiencies and
           shorten delivery times with our intelligent IT and software solution`,
      url: 'financial',
      // tslint:disable-next-line: max-line-length
      image: '/assets/ind-component/5.jpg'
    },
    {
      name: 'Healthcare & Life Sciences',
      des: `Build your end-to-end digital supply chain to drive efficiencies and
           shorten delivery times with our intelligent IT and software solution`,
      url: 'healthcare',
      // tslint:disable-next-line: max-line-length
      image: '/assets/ind-component/6.jpg'
    },
    {
      name: 'Travel & Hospitality',
      des: `Build your end-to-end digital supply chain to drive efficiencies and
           shorten delivery times with our intelligent IT and software solution`,
      url: 'travel',
      // tslint:disable-next-line: max-line-length
      image: '/assets/ind-component/7.jpg'
    },
    {
      name: 'Retail & Ecommerce',
      des: `Build your end-to-end digital supply chain to drive efficiencies and
           shorten delivery times with our intelligent IT and software solution`,
      url: 'retail',
      // tslint:disable-next-line: max-line-length
      image: '/assets/ind-component/8.jpg'
    },
    {
      name: 'Education and Digital Learning',
      des: `Build your end-to-end digital supply chain to drive efficiencies and
           shorten delivery times with our intelligent IT and software solution`,
      url: 'education',
      // tslint:disable-next-line: max-line-length
      image: '/assets/ind-component/9.jpg'
    }
  ];


  public weDeliver = [
    {
      name: 'Mobile Apps & Games',
      info: 'Harvest the power of mobile to reach billions in seconds.',
      link: '',
      image: '1.jpg'
    },
    {
      name: 'AI / BI, Crypto, AWS',
      info: 'Leverage your data to gain actionable insights or go secure with immutable blockchain technology.',
      link: '',
      image: '2.jpg'
    },
    {
      name: 'VR/ AR, & Wearables',
      info: 'Boost your teams effeciency by using the power of AR & VR.',
      link: '',
      image: '3.jpg'
    },
    {
      name: 'Cyber security & Computer vision',
      info: 'Secure your perimeter or use computer vision for industrial surveillance.',
      link: '',
      image: '5.jpg'
    },
    {
      name: 'IOT & Robotics',
      info: 'Let machines do the labour so that your team can focus on more critical human aspects.',
      link: '',
      image: '4.jpg'
    },
  ];



  public expandedInd = 0;
  public showContent: Boolean = true;

  public isDown: Boolean = false;
  public startX;
  public scrollLeft;

  public isDown2: Boolean = false;
  public startX2;
  public scrollLeft2;

  public subscription: Subscription;
  public subscription2: Subscription;
  public subscription3: Subscription;
  public subscription4: Subscription;

  public selectedDeliver = 1;

  public modal1 = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('body:mousemove', ['$event'])
  onMouseMove(e) {
    const x = e.x;
    const y = e.y;
    this.posx = Math.floor(x / 65);
    this.posy = '-' + Math.floor(y / 65);

    this.phead = Math.floor((x + y) / 1600);
    this.pheadSkew = Math.floor((x + y) / 800);

    this.pneck = Math.floor((x + y) / 1600);
    this.pneckSkew = Math.floor((x + y) / 800);

    this.pbicep = Math.floor((x + y) / 1200);
    this.pbicepSkew = Math.floor((x + y) / 1200);

    this.parm = Math.floor((x + y) / 600);
    this.parmSkew = Math.floor((x + y) / 1200);

    this.ppalm = Math.floor((x + y) / 200);
    this.ppalmSkew = Math.floor((x + y) / 800);
  }


  public selectfn(id) {
    this.expandedInd = id;
    this.showContent = false;
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.showContent = true;
      }, 450);
    }
  }
  public mouseExit() {
  }

  public deliverItm(e) {
    this.selectedDeliver = e;
  }
  public deliverDflt() {
    this.selectedDeliver = 1;
  }




  ngOnInit() {}

  hideModal() {
    this.modal1 = false;
  }
  public time = () => {
    if (isPlatformBrowser(this.platformId)) {
      this.hideit();
      const timers = timer(200);
      timers.subscribe(() => {
        this.head = this.headarray[this.index];
        this.head2 = this.headarray2[this.index];
        this.id = this.idarray[this.index];
        this.detail = this.detailarray[this.index];
      });
      this.show();
    }
  }
  show = () => {
    if (isPlatformBrowser(this.platformId)) {
      const tr = timer(600);
      tr.subscribe(() => {
        this.animate = true;
        this.hide = false;
      });
    }
    if (this.index === 2) {
      this.index = 0;
    } else {
      this.index++;
    }
  }
  hideit = () => {
    this.hide = true;
    this.animate = false;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const source = timer(100, 6000);
      const subscribe = source.subscribe(() => {
        this.time();
      });

      const tr = timer(2000);
      tr.subscribe(() => {
        this.modal1 = true;
      });
    }


      const sl1MouseDown = fromEvent<any>(this.sl1.nativeElement, 'mousedown');
      this.subscription = sl1MouseDown.subscribe(
        e => {
          this.isDown = true;
          this.sl1.nativeElement.classList.add('activeSlide');
          this.startX = e.pageX - this.sl1.nativeElement.offsetLeft;
          this.scrollLeft = this.sl1.nativeElement.scrollLeft;
        }
      );

      const sl1MouseLeave = fromEvent<any>(this.sl1.nativeElement, 'mouseleave');
      this.subscription2 = sl1MouseLeave.subscribe(
        e => {
          this.isDown = false;
          this.sl1.nativeElement.classList.remove('activeSlide');
        }
      );

      const sl1MouseUp = fromEvent<any>(this.sl1.nativeElement, 'mouseup');
      this.subscription3 = sl1MouseUp.subscribe(
        e => {
          this.isDown = false;
          this.sl1.nativeElement.classList.remove('activeSlide');
        }
      );

      const sl1MouseMove = fromEvent<any>(this.sl1.nativeElement, 'mousemove');
      this.subscription4 = sl1MouseMove.subscribe(
        e => {
          if (!this.isDown) {
            return;
          }
          e.preventDefault();
          const x = e.pageX - this.sl1.nativeElement.offsetLeft;
          const walk = (x - this.startX) * 3;
          this.sl1.nativeElement.scrollLeft = this.scrollLeft - walk;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();
  }
}
