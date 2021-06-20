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
  private initialLeft = 0;
  private deplaceX = 0;
  private deplaceY = 0;
  private largeurMax = 50;

  constructor() {
  }

  ngOnInit() {
    // événement de scroll
    document.querySelector('ion-content').addEventListener('ionScroll', (e) => this.eventScroll(e));
  }

  // initialise la position de l'objet
  initPos() {
    const el = document.getElementById(this.objet);

    // coordonnées en %
    switch (this.objet) {
      case 'cursor':
        this.initialTop = 55;
        this.initialLeft = 40;
        break;
      case 'photo':
        this.initialTop = 20;
        this.initialLeft = 20;
        break;
      case 'spring':
        this.initialTop = 30;
        this.initialLeft = 70;
        break;
      case 'bulb':
        this.initialTop = 50;
        this.initialLeft = 5;
        break;
      case 'lightning':
        this.initialTop = 65;
        this.initialLeft = 75;
        break;
    }

    // convertis du % en px
    this.initialTop *= window.innerHeight / 100;
    this.initialTop -= window.innerHeight;

    this.initialLeft *= window.innerWidth / 100;

    // déplace l'objet
    el.style.setProperty('top', this.initialTop + 'px');
    el.style.setProperty('left', this.initialLeft + 'px');

    // lance l'événement de déplacement
    // setInterval(() => this.eventDeplacement(), 50);
  }

  // déplacement de l'objet en fonction du scroll
  eventScroll(event): void {
    const el = document.getElementById(this.objet);
    el.style.setProperty('top', String(this.initialTop - (event.detail.currentY * this.ratio)) + 'px');
  }

  // initialise la vitesse de déplacement
  initDeplacement() {
    const boolX = this.deplaceX >= 0;
    const boolY = this.deplaceY >= 0;

    this.deplaceX = Math.floor(Math.random() * 200 - 100) / 100;
    this.deplaceY = Math.floor(Math.random() * 200 - 100) / 100;

    if (boolX) {
      if (this.deplaceX >= 0) {
        this.deplaceX = -this.deplaceX;
      }
    }
    else {
      if (this.deplaceX <= 0) {
        this.deplaceX = -this.deplaceX;
      }
    }

    if (boolY) {
      if (this.deplaceY >= 0) {
        this.deplaceY = -this.deplaceY;
      }
    }
    else {
      if (this.deplaceY <= 0) {
        this.deplaceY = -this.deplaceY;
      }
    }

    console.log(this.deplaceX, this.deplaceY);
  }

  // event lié au déplacement aléatoire des objets
  eventDeplacement() {
    const el = document.getElementById(this.objet);

    if (this.deplaceX === 0 && this.deplaceY === 0) {
      this.initDeplacement();
    }
    else if (el.offsetTop + this.deplaceY >= this.initialTop + this.largeurMax || el.offsetTop + this.deplaceY <= this.initialTop - this.largeurMax) {
      console.log('hauteur');
      this.initDeplacement();
    }
    else if (el.offsetLeft + this.deplaceX >= this.initialLeft + this.largeurMax || el.offsetLeft + this.deplaceX <= this.initialLeft - this.largeurMax) {
      console.log('largeur');
      this.initDeplacement();
    }
    else {
      // console.log('ok');
      el.style.setProperty('top', (el.offsetTop + this.deplaceY) + 'px');
      el.style.setProperty('left', (el.offsetLeft + this.deplaceX) + 'px');
    }
  }
}
