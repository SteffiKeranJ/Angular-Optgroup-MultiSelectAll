import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  snackConfig = new MatSnackBarConfig();
  action = false;
  setAutoHide = true;
  autoHide = 10000;
  indeterminate = false;
  checked=false;
 selectedYears = [];
  years = [
      {id: 1, viewValue: "2017"},
      {id: 2, viewValue: "2018"},
      {id: 3, viewValue: "2019"},
      {id: 4, viewValue: "2020"},
      {id: 5, viewValue: "2021"}
    ];

  //toCheck: boolean =  false;

  equals(objOne, objTwo) {
    if (typeof objOne !== 'undefined' && typeof objTwo !== 'undefined') {
      return objOne.id === objTwo.id;
    }
  }
  
  optionchg(){
	  	  this.indeterminate= this.selectedYears.length!==this.years.length && (this.selectedYears.length!==0) ? true : false;
		  this.checked = this.selectedYears.length===this.years.length ? true:false;
console.log(this.indeterminate);
  }
  
  selectAll(checkAll, select: NgModel, values) {
    //this.toCheck = !this.toCheck;
	console.log(checkAll);
	
    if(checkAll){
      select.update.emit(values); 
    }
    else{
      select.update.emit([]);
    }
  }
  
  
  constructor(
    public snackBar: MatSnackBar,

  ) {

  }

  clickme() {
    this.snackConfig.verticalPosition = this.verticalPosition;
    this.snackConfig.horizontalPosition = this.horizontalPosition;
    this.snackConfig.duration = this.setAutoHide ? this.autoHide : 0;
    this.snackConfig.extraClasses = undefined;
    this.snackBar.open('Hope you loved this demo 💓', this.action?'Close':undefined, this.snackConfig);
  }

}

