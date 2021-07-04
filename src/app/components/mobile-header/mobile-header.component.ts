import { AfterViewInit, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit, AfterViewInit {

  @Output() opened: EventEmitter<boolean> = new EventEmitter();
  sidebarOpen: boolean = false;

  constructor() { }

  ngOnInit() {
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
