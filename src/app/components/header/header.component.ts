import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  colorChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _darkMode: boolean;

  @Input() set darkMode(value: boolean) {
    this._darkMode = value;
  }

  constructor() { }

  ngOnInit() {
  }

  switchColors(light: boolean) {
    if (light) {
      console.log('Light Mode');
      this.colorChanged.emit(false);
    } else {
      // set to light mode
      console.log('Dark Mode');
      this.colorChanged.emit(true);
    }
  }

}
