import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Output() navigated: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.closeMenu();
  }

  navigate(route: string) {
    this.navigated.emit(route);
    this.closeMenu();
  }

  slideOutMenu() {
    (document.querySelector('.sideNav') as HTMLElement).style.width = "300px";
  }

  closeMenu() {
    (document.querySelector('.sideNav') as HTMLElement).style.width = "0px";
  }

}
