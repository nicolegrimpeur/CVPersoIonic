import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Animation, AnimationController} from '@ionic/angular';

@Component({
  selector: 'app-img-parallaxe',
  templateUrl: './img-parallaxe.component.html',
  styleUrls: ['./img-parallaxe.component.scss'],
})
export class ImgParallaxeComponent implements OnInit {
  @Input() ratio: number;
  @Input() objet: string;
  @Input() position: string;
  @ViewChild('image') image;
  private initialTop = 0;
  private initialLeft = 0;

  constructor(private animationCtrl: AnimationController) {
  }

  ngOnInit() {
    // événement de scroll
    document.querySelector('ion-content').addEventListener('ionScroll', (e) => this.eventScroll(e));
  }

  rand(): number {
    return Math.floor(Math.random() * 10) * 10;
  }

  // initialise la position de l'objet
  initPos() {
    const el = document.getElementById(this.objet);

    // coordonnées en %
    switch (this.objet) {
      case 'cursor':
        this.initialTop = 55;
        this.initialLeft = 35;
        break;
      case 'photo':
        this.initialTop = 20;
        this.initialLeft = 10;
        break;
      case 'spring':
        this.initialTop = 30;
        this.initialLeft = 75;
        break;
      case 'bulb':
        this.initialTop = 75;
        this.initialLeft = 10;
        break;
      case 'lightning':
        this.initialTop = 65;
        this.initialLeft = 60;
        break;
    }

    // convertis du % en px
    this.initialTop *= window.innerHeight / 100;
    this.initialTop -= window.innerHeight;

    this.initialLeft *= window.innerWidth / 100;

    // déplace l'objet
    el.style.setProperty('top', this.initialTop + 'px');
    el.style.setProperty('left', this.initialLeft + 'px');

    this.animationCtrl.create()
      .addElement(this.image.el)
      .duration(15000)
      .iterations(Infinity)
      .keyframes([
        {offset: 0, transform: 'translate(0px, 0px)'},
        {offset: 0.25, transform: 'translate(' + this.rand() + 'px,' + this.rand() + 'px)'},
        {offset: 0.5, transform: 'translate(' + this.rand() + 'px,' + this.rand() + 'px)'},
        {offset: 0.75, transform: 'translate(' + this.rand() + 'px,' + -this.rand() + 'px)'},
        {offset: 1, transform: 'translate(0px, 0px)'}
      ]).play().then();
  }

  // déplacement de l'objet en fonction du scroll
  eventScroll(event): void {
    const el = document.getElementById(this.objet);
    el.style.setProperty('top', String(this.initialTop - (event.detail.currentY * this.ratio)) + 'px');
  }
}
