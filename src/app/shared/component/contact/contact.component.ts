import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public cartes = [
    {
      text: 'Téléphone',
      info: '+33 7.81.70.66.63',
      href: 'tel:+33781706663',
      icon: 'call-outline'
    },
    {
      text: 'Mail',
      info: 'nicolas.barrat@student.junia.com',
      href: 'mailto:nicolas.barrat@student.junia.com',
      icon: 'mail-outline'
    },
    {
      text: 'Linkedin',
      info: 'linkedin.com/in/nicolas-barrat/',
      href: 'https://www.linkedin.com/in/nicolas-barrat/',
      icon: 'logo-linkedin'
    },
  ];

  constructor() { }

  ngOnInit() {}

}
