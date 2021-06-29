import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  constructor() { }

  projects: Project[] = [
    { name: 'Test Project', description: 'Placeholder for actual project', skills: 'HTML, CSS', startdate: 'June 2021', enddate: 'Present', type: 'personal' }
  ];

  personal: boolean = true;
  school: boolean = true;
  ecs: boolean = true;
  other: boolean = true;

  ngOnInit() {
    (document.querySelector('#projects') as HTMLElement).style.borderBottom = "2px solid black";
  }

  ngOnDestroy() {
    (document.querySelector('#projects') as HTMLElement).style.borderBottom = "";
  }

}
