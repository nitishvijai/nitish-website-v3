import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    if (history.state.mode == 'desktop') {
      (document.querySelector('#resumeTab') as HTMLElement).style.borderBottom = "2px solid black";
    }
  }

  ngOnDestroy() {
    (document.querySelector('#resumeTab') as HTMLElement).style.borderBottom = "";
  }

}
