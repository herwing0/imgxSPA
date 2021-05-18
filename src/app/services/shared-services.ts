import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';



@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private countSpinnner: number = 0;

  constructor(private spinner: NgxSpinnerService) { }



  public spinnerShow(funcion?: string) {
    // funcion ? this.consoleWarn(funcion) : null;
    this.countSpinnner++;
    if (this.countSpinnner >= 1) {
      console.log("spinner")
      // this.consoleWarn('spinners simultaneos ' + this.countSpinnner);
      this.spinner.show();
    } else {
      // this.consoleWarn('no spinner');
    }
  }

  public spinnerHide(funcion?: string) {
    // funcion ? this.consoleWarn(funcion) : null;
    this.countSpinnner--;
    if (this.countSpinnner <= 0 ) {
      this.spinner.hide();
      this.countSpinnner = 0;
      // this.consoleWarn('spinner hide');
    }
    // this.consoleWarn('spinners activos' + this.countSpinnner);
  }



}
