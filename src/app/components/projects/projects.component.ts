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
    { name: 'Eventempo', description: 'Built a UWP countdown timer app for Windows 10 devices. Some features include support for multiple event countdown timers, ease of use, event autosave, colorful customization, and notification alerts. Worked on this app during winter break of my freshman year in college, and released incremental updates to the app in the following months.', skills: 'C# .NET (backend), XAML (frontend), Visual Studio', startdate: 'December 2019', enddate: 'February 2020', type: 'personal', github: 'https://github.com/nitishvijai/Eventempo' },
    { name: 'Store Scraper', description: 'Developed a web scraper in Python to scrape the top search result from three retailers and return the lowest price. Utilized BeautifulSoup to scrape the retailers and Selenium to emulate a real web browser and bypass dynamic JavaScript changes. In addition, created and published a tutorial on Enlight, an open-source educational platform that helps one learn to code by building cool projects.', skills: 'Python, BeautifulSoup, Selenium, VSCode', startdate: 'January 2020', enddate: 'April 2020', type: 'personal', github: 'https://github.com/nitishvijai/StoreScraper' },
    { name: 'Personal Website V2.0', description: 'Designed and developed a personal website to show my portfolio of skills and projects. In addition, this website was designed from scratch to replace my previous GitHub Pages site, breaking free from template design constraints and gaining a more thorough understanding of HTML, CSS, and JS.', skills: 'HTML5, CSS3, JavaScript, jQuery, VSCode', startdate: 'April 2020', enddate: 'June 2020', type: 'personal', github: 'https://github.com/nitishvijai/nitish-website-v2' }
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
