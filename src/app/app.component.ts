import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nitish-website-v3';
  mobileHeader = false;
  mobile = false;
  
  constructor(private bpObserver: BreakpointObserver) {}

  ngOnInit() {
    this.bpObserver.observe(['(max-width: 1024px)'])
                   .subscribe((state: BreakpointState) => {
                      if (state.matches) {
                        // Show Mobile Header Component
                        this.mobileHeader = true;
                      } else {
                        // Revert to Desktop Header Component
                        this.mobileHeader = false;
                      }
                   });

    this.bpObserver.observe(['(max-width: 801px)'])
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
      (document.querySelector('#image') as HTMLElement).style.textAlign = 'center';
      (document.querySelector('#stats') as HTMLElement).style.textAlign = 'center';
    } else {
      // Revert to Desktop
      console.log('DESKTOP');
      (document.querySelector('#image') as HTMLElement).style.textAlign = 'right';
      (document.querySelector('#stats') as HTMLElement).style.textAlign = 'left';
    }
  }
}
