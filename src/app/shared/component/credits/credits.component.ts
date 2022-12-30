import { Component, OnInit } from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
})
export class CreditsComponent implements OnInit {

  constructor(public platform: Platform) { }

  ngOnInit() {}

}
