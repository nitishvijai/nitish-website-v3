import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-essays',
  templateUrl: './essays.component.html',
  styleUrls: ['./essays.component.css']
})
export class EssaysComponent implements OnInit, OnDestroy {

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
    this.id = setInterval(() => {
      if (localStorage.getItem('lightMode') === 'true') {
        (document.querySelector('#essayTab') as HTMLElement).style.borderBottom = "2px solid black";
      } else {
        (document.querySelector('#essayTab') as HTMLElement).style.borderBottom = "2px solid white";
      }
    }, 50);

    sessionStorage.setItem('page', '/essays');
  }

  ngOnDestroy() {
    (document.querySelector('#essayTab') as HTMLElement).style.borderBottom = "";

    if (this.id) {
      clearInterval(this.id);
    }
  }

}
