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
  private deplaceX = 0;
  private deplaceY = 0;
  private largeurMax = 40;
  private eventTime = undefined;

  constructor(private animationCtrl: AnimationController) {
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

    this.animationCtrl.create()
      .addElement(this.image.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');

    // // lance l'événement de déplacement
    // if (this.eventTime === undefined) {
    //   this.eventTime = setInterval(() => this.eventDeplacement(), 100);
    // }
  }

  // déplacement de l'objet en fonction du scroll
  eventScroll(event): void {
    const el = document.getElementById(this.objet);
    el.style.setProperty('top', String(this.initialTop - (event.detail.currentY * this.ratio)) + 'px');
  }

  // rand(): number {
  //   return Math.floor(Math.random() - 0.5);
  // }

  // // initialise la vitesse de déplacement
  // initDeplacement(direction: string) {
  //   if (direction === '') {
  //     this.deplaceX = this.rand();
  //     this.deplaceY = this.rand();
  //   } else if (direction === 'hauteur') {
  //     this.deplaceY = -this.deplaceY;
  //   } else if (direction === 'largeur') {
  //     this.deplaceX = -this.deplaceX;
  //   }
  // }

  // // event lié au déplacement aléatoire des objets
  // eventDeplacement() {
  //   const el = document.getElementById(this.objet);
  //
  //   // initialisation des variables
  //   if (this.deplaceX === 0 && this.deplaceY === 0) {
  //     this.initDeplacement('');
  //   } else if (el.offsetTop + this.deplaceY >= this.initialTop + this.largeurMax) {  // dépassement en bas
  //     this.initDeplacement('hauteur');
  //   } else if (el.offsetTop + this.deplaceY <= this.initialTop - this.largeurMax) {  // dépassement en haut
  //     this.initDeplacement('hauteur');
  //   } else if (el.offsetLeft + this.deplaceX >= this.initialLeft + this.largeurMax) {  // dépassement à droite
  //     this.initDeplacement('largeur');
  //   } else if (el.offsetLeft + this.deplaceX <= this.initialLeft - this.largeurMax) {  // dépassement à gauche
  //     this.initDeplacement('largeur');
  //   } else {  // sinon on déplace
  //     el.style.setProperty('top', (el.offsetTop + this.deplaceY) + 'px');
  //     el.style.setProperty('left', (el.offsetLeft + this.deplaceX) + 'px');
  //   }
  // }
}
