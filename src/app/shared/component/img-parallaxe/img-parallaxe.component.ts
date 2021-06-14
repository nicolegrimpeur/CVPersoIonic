import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-parallaxe',
  templateUrl: './img-parallaxe.component.html',
  styleUrls: ['./img-parallaxe.component.scss'],
})
export class ImgParallaxeComponent implements OnInit {
  @Input() ratio: number;
  @Input() objet: string;
  @Input() position: string;
  private initialTop = 0;

  constructor() {
  }

  ngOnInit() {
    document.querySelector('ion-content').addEventListener('ionScroll', (e) => this.eventScroll(e));
  }

  initPos() {
    const el = document.getElementById(this.objet);
    let initialLeft;

    switch (this.objet) {
      case 'cursor':
        this.initialTop = 200;
        initialLeft = 0;
        break;
      case 'photo':
        this.initialTop = 400;
        initialLeft = 10;
        break;
      case 'spring':
        this.initialTop = 400;
        initialLeft = 20;
        break;
      case 'bulb':
        this.initialTop = 400;
        initialLeft = 30;
        break;
      case 'lightning':
        this.initialTop = 400;
        initialLeft = 40;
        break;
    }

    this.initialTop += -window.innerHeight;

    el.style.setProperty('top', this.initialTop + 'px');
    el.style.setProperty('left', initialLeft + '%');

    this.initialTop = Number(el.style.getPropertyValue('top').replace('px', ''));
  }

  eventScroll(event): void {
    const el = document.getElementById(this.objet);

    if (this.initialTop === undefined) {
      // this.initPos();
    }

    el.style.setProperty('top', String(this.initialTop - (event.detail.currentY * this.ratio)) + 'px');
  }
}
