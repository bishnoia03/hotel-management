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
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar ) { }
  mysnackBar() {
    this.snackBar.open(this.message = 'Reservation Success!', this.action = '', {
      duration: 4000 ,

    });
  }
  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
