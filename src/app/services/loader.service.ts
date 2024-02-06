import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  load:boolean=false;
  showLoader(){
    this.load=true;
  }
  hideLoader(){
    this.load=false;
  }
  loaderValue():boolean{
    return this.load;
  }
}
