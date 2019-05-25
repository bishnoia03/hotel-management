import { Component, OnInit } from '@angular/core';
import {MatSnackBar, mixinColor,} from '@angular/material';
@Component({
  selector: 'app-food-and-beverage',
  templateUrl: './food-and-beverage.component.html',
  styleUrls: ['./food-and-beverage.component.css']
})
export class FoodAndBeverageComponent implements OnInit {
  message: string;
  action: string;
  
  constructor(private snackBar: MatSnackBar ) { }
  mysnackBar() {
    this.snackBar.open(this.message = 'Thanks for Thumbs up', this.action = '', {
      duration: 2500 ,

    });
  }
  ngOnInit() {
  }

}
