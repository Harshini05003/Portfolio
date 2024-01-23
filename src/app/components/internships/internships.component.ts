import { Component, Input } from '@angular/core';
import { Internship } from 'src/app/models/interfaces';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.scss']
})
export class InternshipsComponent {
@Input()Internships:Internship[]=[];
internshipKeys: (keyof Internship)[] = [ 'title', 'role', 'duration', 'companyname'];

}
