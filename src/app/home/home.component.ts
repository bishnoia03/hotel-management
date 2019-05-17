import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar, mixinColor} from '@angular/material';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string;
  action: string;
  countary: string;
  viewcountary: string;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  numb: number;
  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar ) { }
  mysnackBar() {
    this.snackBar.open(this.message = 'Reservation Success!', this.action = '', {
      duration: 2500 ,

    });
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
