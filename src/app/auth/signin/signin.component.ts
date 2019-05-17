import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
gate = false;
password = ['aman', 'admin123', '2233'];
db:string='';
linker:string;
condition;
fun2(x){

  console.log(x);
  console.log(this.password[2]);
  if(x==this.password[0])
  { this.linker = 'routerLink';
    this.gate=true;
    this.db='dashboard';
  
  }
}
fun(x){
  for(let i=0;i<this.password.length;i++)
  
  if(x===this.password[i])
  {
    this.gate=true;
    this.db='dashboard';
    break;
  }
  else
  {
    this.gate=false;
  }
}
funif(){
  this.condition = true;
}
  constructor() { }

  ngOnInit() {
  }

}
