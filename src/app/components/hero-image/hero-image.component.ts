import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent implements OnInit {

  @Input() lightMode: boolean;

  constructor() { }

  ngOnInit() {
    console.log('hero image: ' + this.lightMode);
  }

  imgSource: string = "assets/img/nitish-headshot.jpg";

}
