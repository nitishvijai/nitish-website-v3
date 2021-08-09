import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit, OnDestroy {

  lightMode: boolean;
  id: NodeJS.Timer;

  constructor() { 
    if (localStorage.getItem('lightMode') === 'true') {
      this.lightMode = true;
    } else {
      this.lightMode = false;
    }
  }

  ngOnInit() {

    
    
      //(document.querySelector('#aboutme') as HTMLElement).style.borderBottom = "2px solid black";

      this.id = setInterval(() => {
        if (localStorage.getItem('mobile') === 'false') {
          if (localStorage.getItem('lightMode') === 'true') {
            (document.querySelector('#aboutme') as HTMLElement).style.borderBottom = "2px solid black";
          } else {
            (document.querySelector('#aboutme') as HTMLElement).style.borderBottom = "2px solid white";
          }
        }
      }, 50);

    localStorage.setItem('page', '/about');
  }

  ngOnDestroy() {
    if (localStorage.getItem('mobile') === 'false') {
      (document.querySelector('#aboutme') as HTMLElement).style.borderBottom = "";
    }

    if (this.id) {
      clearInterval(this.id);
    }
  }

}
