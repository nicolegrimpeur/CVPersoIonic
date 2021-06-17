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
        this.initialTop = 55;
        initialLeft = 40;
        break;
      case 'photo':
        this.initialTop = 20;
        initialLeft = 20;
        break;
      case 'spring':
        this.initialTop = 30;
        initialLeft = 70;
        break;
      case 'bulb':
        this.initialTop = 50;
        initialLeft = 5;
        break;
      case 'lightning':
        this.initialTop = 65;
        initialLeft = 75;
        break;
    }

    this.initialTop *= window.innerHeight / 100;
    this.initialTop -= window.innerHeight;

    el.style.setProperty('top', this.initialTop + '%');
    el.style.setProperty('left', initialLeft + '%');
  }

  eventScroll(event): void {
    const el = document.getElementById(this.objet);
    el.style.setProperty('top', String(this.initialTop - (event.detail.currentY * this.ratio)) + 'px');
  }
}
