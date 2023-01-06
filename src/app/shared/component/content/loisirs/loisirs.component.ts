import {Component, OnInit} from '@angular/core';
import {loisirs} from '../../../informations/loisirs';

@Component({
  selector: 'app-loisirs',
  templateUrl: './loisirs.component.html',
  styleUrls: ['./loisirs.component.scss'],
})
export class LoisirsComponent implements OnInit {
  public loisirs = loisirs;

  constructor() {
  }

  ngOnInit() {
  }

}
