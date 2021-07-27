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
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EssaysComponent } from './components/essays/essays.component';
import { EssayCardComponent } from './components/essay-card/essay-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MobileHeaderComponent,
    HeroImageComponent,
    SideMenuComponent,
    AboutMeComponent,
    HomeComponent,
    ProjectsComponent,
    ResumeComponent,
    ExperienceComponent,
    EssaysComponent,
    EssayCardComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    LayoutModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutMeComponent },
      {path: 'projects', component: ProjectsComponent},
      {path: 'resume', component: ResumeComponent},
      {path: 'essays', component: EssaysComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent}
    ])
  ],
  providers: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
