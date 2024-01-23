import { Component } from '@angular/core';
import { data } from 'src/app/models/data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  data=data;
}
