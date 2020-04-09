import { Component, OnInit, ElementRef, Input, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';

import videojs from 'video.js';


@Component({
  selector: 'app-vid',
  templateUrl: './vid.component.html',
  styleUrls: ['./vid.component.css']
})
export class VidComponent implements OnInit, OnDestroy {


  @ViewChild('target', { static: true }) target: ElementRef;

  @Input() options: {
    fluid: boolean,
    aspectRatio: string,
    autoplay: boolean,
    sources: {
        src: string,
        type: string,
    }[],
    techOrder: ['html5'],
    fill: boolean,
    poster: string,
    controls: boolean,
  };


  public player: videojs.Player;

  constructor() { }

  ngOnInit(): void {
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
  }

}
