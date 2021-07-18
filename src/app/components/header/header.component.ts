import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  @Input() mode!: boolean;

  @Output() colorChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log('(header): ' + this.mode);
  }

  switchColors(light: boolean) {
    this.colorChanged.emit(light);

    if (light) {
      console.log('Light Mode');
      localStorage.setItem('lightMode', 'true');
      this.mode = true;
    } else {
      // set to dark mode
      console.log('Dark Mode');
      localStorage.setItem('lightMode', 'false');
      this.mode = false;
    }
  }

}
