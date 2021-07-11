import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HomeComponent } from './components/home/home.component';
import { ContentChild } from '@angular/core';
import { ColorService } from './services/color.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'nitish-website-v3';
  mobileHeader = false;
  mobile = false;
  darkMode: boolean = false;

  @ViewChild(SideMenuComponent, {static: false}) child: SideMenuComponent;
  
  constructor(private bpObserver: BreakpointObserver, private router: Router) {}

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
                        history.pushState({mode: 'mobile'}, '', '');
                      } else {
                        // Revert to Desktop
                        this.mobile = false;
                        history.pushState({mode: 'desktop'}, '', '');
                      }

                      var curr = this;
                      for (let i = 0; i < 1; ++i) {
                        setTimeout(function() {
                          curr.switchForm();
                        }, 500);
                      }
                      
                   });
  }

  ngAfterViewInit() {

  }

  // Logic to switch between desktop and mobile versions as necessary
  public switchForm() {
    if (this.mobile) {
      // Switch to Mobile
      console.log('MOBILE');
      history.pushState({mode: 'mobile'}, '', '');

      // Home Page
      if (this.router.url === '/home') {
        (document.querySelector('#image') as HTMLElement).style.textAlign = 'center';
        (document.querySelector('#stats') as HTMLElement).style.textAlign = 'center';
        const texts = document.querySelectorAll('.text');
        texts.forEach(function(item) {
          (item as HTMLElement).style.paddingLeft = '2rem';
          (item as HTMLElement).style.paddingRight = '2rem';
        });
      }
      
    } else {
      // Revert to Desktop
      console.log('DESKTOP');
      history.pushState({mode: 'desktop'}, '', '');

      if (this.router.url === '/home') {
        (document.querySelector('#image') as HTMLElement).style.textAlign = 'right';
        (document.querySelector('#stats') as HTMLElement).style.textAlign = 'left';
        const texts = document.querySelectorAll('.text');
        texts.forEach(function(item) {
          (item as HTMLElement).style.paddingLeft = '0rem';
          (item as HTMLElement).style.paddingRight = '0rem';
        });
      }
    }
  }

  openSideMenu() {
    this.child.slideOutMenu();
  }

  changeColors(dark: boolean) {
    console.log('parent color: ' + dark);
    this.darkMode = dark;
  }

  onNavigated(route: string) {
    this.router.navigateByUrl(route);
    var curr = this;
    for (let i = 0; i < 1; ++i) {
      setTimeout(function () {
        curr.switchForm();
      }, 500);
    }
  }

}
