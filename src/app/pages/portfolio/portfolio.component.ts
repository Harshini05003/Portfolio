import { HttpErrorResponse } from '@angular/common/http';
import { NotExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
//  import { certifications, education, internships, projects } from 'src/app/models/data';
import { Certificate, Education, Internship, Project } from 'src/app/models/interfaces';
import { AlertsService } from 'src/app/services/alerts.service';
import { ApiService } from 'src/app/services/api.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor(private api:ApiService,public loader:LoaderService,private alert:AlertsService){}
  education:Education[]=[];
  certifications:Certificate[]=[];
  internships:Internship[]=[];
  projects:Project[]=[];
  //dummy data
  // education:Education[]=education;
  // certifications:Certificate[]=certifications;
  // internships:Internship[]=internships;
  // projects:Project[]=projects;
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
  ngOnInit(){
    this.showEducation();
    this.showCertification();
    this.showInternships();
    this.showProjects();
    
  }
  showEducation(){
    this.loader.showLoader();
    this.api.getEducation().subscribe(
      {
      next: (response:any)=>{
        this.loader.hideLoader();
         this.education=response;
      },
      error: (error)=>{
        this.loader.hideLoader();
        this.alert.errorAlert(error.statusText);
      }
    })
  }
  showCertification(){
    this.loader.showLoader();
    this.api.getCertification().subscribe({
      next: (response:any)=>{
        this.loader.hideLoader();
        this.certifications=(response)
      },
      error: (error)=>{
        this.loader.hideLoader();
        
        this.alert.errorAlert(error.statusText);
      }
    })
  }
  showInternships(){
    this.loader.showLoader();
    this.api.getInternships().subscribe({
      next: (response:any)=>{
        this.loader.hideLoader();
        this.internships=(response)
      },
      error: (error)=>{
        this.loader.hideLoader();
        this.alert.errorAlert(error.statusText);
      }
    })
  }
  showProjects(){
    this.loader.showLoader();
    this.api.getProjects().subscribe({
      next: (response:any)=>{
        this.loader.hideLoader();
        this.projects=(response)
      },
      error: (error)=>{
        this.loader.hideLoader();
        this.alert.errorAlert(error.statusText);
      }
      
    })
  }

}
