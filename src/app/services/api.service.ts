import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from '../models/urls';
import { Observable } from 'rxjs';
import { Certificate, Education, Internship, Project } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }
  urls=urls;
  headers = new HttpHeaders().set('ngrok-skip-browser-warning','true');

  // getEducation():Observable<Education>{
  //   return this.http.get<Education>(urls.details+'/get-education',{headers:this.headers});
  // }
  // getCertification():Observable<Certificate>{
  //   return this.http.get<Certificate>(urls.details+'/get-certification',{headers:this.headers});
  // }
  // getInternships():Observable<Internship>{
  //   return this.http.get<Internship>(urls.details+'/get-internship',{headers:this.headers});
  // }
  // getProjects():Observable<Project>{
  //   return this.http.get<Project>(urls.details+'/get-project',{headers:this.headers})
  // }
  // sendContactInfo(data:any){
  //   return this.http.post(urls.contact,data);
  // }
  getEducation():Observable<Education>{
    return this.http.get<Education>(urls.dotNetDetails+'/Education/getDetails',{headers:this.headers});
  }
  getCertification():Observable<Certificate>{
    return this.http.get<Certificate>(urls.dotNetDetails+'/Certificate/getDetails',{headers:this.headers});
  }
  getInternships():Observable<Internship>{
    return this.http.get<Internship>(urls.dotNetDetails+'/Internship/getDetails',{headers:this.headers});
  }
  getProjects():Observable<Project>{
    return this.http.get<Project>(urls.dotNetDetails+'/Project/getDetails',{headers:this.headers})
  }
  sendContactInfo(data:any){
    return this.http.post(urls.dotNetContact,data);
  }
}
