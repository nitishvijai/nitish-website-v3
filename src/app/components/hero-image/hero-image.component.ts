import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent implements OnInit {

  private _darkMode: boolean;

  @Input() set darkMode(value: boolean) {
    this._darkMode = value;
  }

  constructor() { }

  ngOnInit() {
  }

  imgSource: string = "assets/img/nitish-headshot.jpg";

}
