import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsComponent } from './components/details/details.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { InternshipsComponent } from './components/internships/internships.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    NavbarComponent,
    DetailsComponent,
    EducationComponent,
    CertificationsComponent,
    InternshipsComponent,
    ProjectsComponent,
    LanguagesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
