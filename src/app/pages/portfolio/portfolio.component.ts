import { HttpErrorResponse } from '@angular/common/http';
import { NotExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { certifications, education, internships, projects } from 'src/app/models/data';
import { Certificate, Education, Internship, Project } from 'src/app/models/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor(private api:ApiService){}
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
    this.api.getEducation().subscribe({
      next: (response:any)=>{
         this.education=response;
      }
    })
  }
  showCertification(){
    this.api.getCertification().subscribe({
      next: (response:any)=>{
        this.certifications=(response)
      }
    })
  }
  showInternships(){
    this.api.getInternships().subscribe({
      next: (response:any)=>{
        this.internships=(response)
        console.log(this.internships);
      }
    })
  }
  showProjects(){
    this.api.getProjects().subscribe({
      next: (response:any)=>{
        this.projects=(response)
      }
    })
  }

}
