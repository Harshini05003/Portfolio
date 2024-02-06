import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }
  contactAlert(){
    Swal.fire(
      {
        title: 'SUCCESSFULLY SUBMITTED',
        text: 'Your response has been submitted successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      }
    )
  }
  errorAlert(err_sts:any){
    Swal.fire({
      title: 'ERROR',
      text: err_sts+' occurs',
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }
}
