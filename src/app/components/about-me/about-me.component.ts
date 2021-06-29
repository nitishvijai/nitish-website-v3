import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    (document.querySelector('#aboutme') as HTMLElement).style.borderBottom = "2px solid black";
  }

  ngOnDestroy() {
    (document.querySelector('#aboutme') as HTMLElement).style.borderBottom = "";
  }

}
