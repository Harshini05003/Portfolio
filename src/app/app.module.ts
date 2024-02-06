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
import { FooterComponent } from './components/footer/footer.component';
import { DialogModule } from 'primeng/dialog';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './components/skills/skills.component';
import { AccordionModule } from 'primeng/accordion';
import { ScrollTopModule } from 'primeng/scrolltop';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgxLoadingModule } from "ngx-loading";

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
    FooterComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    AnimateOnScrollModule,
    BrowserAnimationsModule,
    AccordionModule,
    ScrollTopModule,
    CardModule,
    FieldsetModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
