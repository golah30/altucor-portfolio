import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './sections/hello/hello.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { MusicComponent } from './sections/music/music.component';
import { ElectronicsComponent } from './sections/electronics/electronics.component';
import { CareerComponent } from './sections/career/career.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';
import { OnePageScrollComponent } from './one-page-scroll/one-page-scroll.component';
import { SkillComponent } from './sections/skills/skill/skill.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingComponent } from './landing/landing.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    SkillsComponent,
    MusicComponent,
    ElectronicsComponent,
    CareerComponent,
    ContactComponent,
    FooterComponent,
    OnePageScrollComponent,
    SkillComponent,
    NotFoundComponent,
    LandingComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
