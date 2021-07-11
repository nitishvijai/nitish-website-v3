import { Component, OnDestroy, OnInit } from '@angular/core';
import { Experience } from 'src/app/experience';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, OnDestroy {

  workExperiences: Experience[] = [];

  education: Experience = {
    name: 'University of Michigan, Ann Arbor (College of Engineering)',
    position: 'B.S.E. in Computer Science Engineering and Data Science',
    place: 'Ann Arbor, MI',
    timestamp: 'Expected April 2023',
    bullets: [],
    misc1: 'EECS 281 (Data Structures and Algorithms), EECS 485 (Web Systems), MATH 214 (Applied Linear Algebra), STATS 412 (Probability & Statistics), EECS 370 (Intro to Computer Organization), EECS 376 (Foundations of Computer Science)',
    misc2: 'To view my full list of courses, check out this page.'
  };

  

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
