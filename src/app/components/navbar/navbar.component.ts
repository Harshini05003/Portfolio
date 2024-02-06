import { Component, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts.service';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private api:ApiService,private route:Router,private alerts:AlertsService){}
  enable:boolean=false;
  formData={
   name:'',emailId:'',message:''
  }
  openContactForm(){
    this.enable=true;
  }
  @Output() scrollToSectionEvent = new EventEmitter<string>();

  scrollToSection(sectionId: string): void {
    this.scrollToSectionEvent.emit(sectionId);
  }
  submitData(){
    this.api.sendContactInfo(this.formData).subscribe((response)=>{
      console.log('successfully updated');
    })
    this.enable=false;
    this.alerts.contactAlert();
  }
}
