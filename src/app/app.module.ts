import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MobileHeaderComponent,
    HeroImageComponent,
    SideMenuComponent,
    AboutMeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    LayoutModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutMeComponent },
      {path: '', component: HomeComponent}
    ])
  ],
  providers: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
