import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nitish-website-v3';
  mobile = false;
  
  constructor(private bpObserver: BreakpointObserver) {}

  ngOnInit() {
    this.bpObserver.observe(['(max-width: 1024px)'])
                   .subscribe((state: BreakpointState) => {
                      if (state.matches) {
                        // Switch to Mobile
                        this.mobile = true;
                      } else {
                        // Revert to Desktop
                        this.mobile = false;
                      }
                      this.switchForm();
                   });
  }

  // Logic to switch between desktop and mobile versions as necessary
  public switchForm() {
    if (this.mobile) {
      // Switch to Mobile
      console.log('MOBILE');
    } else {
      // Revert to Desktop
      console.log('DESKTOP');
    }
  }
}
