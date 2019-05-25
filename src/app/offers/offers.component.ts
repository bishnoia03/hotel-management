import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar, mixinColor,} from '@angular/material';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  message: string;
  action: string;
  countary: string;
  viewcountary: string;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  numb: number;
  iota = 0;
  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar ) { }
  mysnackBar() {
    this.snackBar.open(this.message = 'Reservation Success!', this.action = '', {
      duration: 2500 ,

    });
  }
  fun1(){
    while(this.iota>0){ 
this.iota = this.iota-1;
    }
  }
  fun2(){
    if(this.iota<3){ 
    this.iota = this.iota+1;
      }
    }
  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', ]
    });
  }
}
