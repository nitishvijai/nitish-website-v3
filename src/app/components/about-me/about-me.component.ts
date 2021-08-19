import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit, OnDestroy {

  lightMode: boolean;
  id: NodeJS.Timer;

  constructor(private bpObserver: BreakpointObserver) { 
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

      this.bpObserver.observe(['(max-width: 801px)'])
      .subscribe((state: BreakpointState) => {
         if (state.matches) {
           // Switch to Mobile
           (document.querySelector('.headshot') as HTMLElement).style.cssFloat = "none";
           (document.querySelector('.headshot') as HTMLElement).style.margin = "0 auto";
           (document.querySelector('#nitish-headshot') as HTMLElement).style.width = "100%";
           (document.querySelector('.content') as HTMLElement).style.width = "auto";
           (document.querySelector('.content') as HTMLElement).style.marginLeft = "10%";
           (document.querySelector('.content') as HTMLElement).style.marginRight = "10%";
         } else {
           // Revert to Desktop
           (document.querySelector('.headshot') as HTMLElement).style.cssFloat = "left";
           (document.querySelector('.headshot') as HTMLElement).style.margin = "10% 0";
           (document.querySelector('#nitish-headshot') as HTMLElement).style.width = "50%";
           (document.querySelector('.content') as HTMLElement).style.width = "40%";
         }
      });

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
