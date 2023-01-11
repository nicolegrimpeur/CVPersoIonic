import {Component, OnInit} from '@angular/core';
import {contact} from '../../informations/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public contact = contact;
  public affiche = false;

  constructor() {
  }

  ngOnInit() {
  }

  click() {
    this.affiche = true;
  }

}
