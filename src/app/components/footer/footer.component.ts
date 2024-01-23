import { Component } from '@angular/core';
import { icons } from 'src/app/models/icons';
import { urls } from 'src/app/models/urls';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  urls:any=urls;
  icons:any=icons;
  apps:any=['github','facebook','instagram','linkedin'];
}
