import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
@Input() Projects:Project[]=[];
url=[
  '/assets/project_1.png',
  '/assets/project_2.png'
]
}
