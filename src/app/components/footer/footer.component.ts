import { Component, OnInit, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private _darkMode: boolean;

  @Input() set darkMode(value: boolean) {
    this._darkMode = value;
  }

  constructor() { }

  ngOnInit() {
    if (this.darkMode) {

    }
  }

}
