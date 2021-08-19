import { AfterViewInit, Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit, OnDestroy, AfterViewInit {

  @Output() opened: EventEmitter<boolean> = new EventEmitter();
  sidebarOpen: boolean = false;
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
      if (localStorage.getItem('mobile') === 'true') {
        if (localStorage.getItem('lightMode') === 'true') {
          (document.querySelector('a.title') as HTMLElement).style.color = "black";
        } else {
          (document.querySelector('a.title') as HTMLElement).style.color = "white";
        }
      }
    }, 50);
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  ngAfterViewInit() {

  }

  openSideMenu() {
    // Need to send message to parent component to open the side menu
    if (!this.sidebarOpen) {
      this.sidebarOpen = true;
    } else {
      this.sidebarOpen = false;
    }
    this.opened.emit(this.sidebarOpen);
  }
  
  

  faBars = faBars;
}
