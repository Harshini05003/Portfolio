import { Component, Input } from '@angular/core';
import { Certificate } from 'src/app/models/interfaces';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
@Input()Certifications:Certificate[]=[];
}
