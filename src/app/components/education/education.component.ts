import { Component, Input } from '@angular/core';
import { Education } from 'src/app/models/interfaces';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
@Input() Education:Education[]=[];
educationKeys:(keyof Education)[]=['institution', 'completionBy', 'marks'];
}
