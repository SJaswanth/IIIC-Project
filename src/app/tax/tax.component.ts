import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
income:number;
deduction:number;
TotaltaxableIncome:number;
Basicexemption:number;
TaxableAmount:number;
PayableTax:number;
rebate:number;

  constructor(public afAuth: AngularFireAuth, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.afAuth.signOut();
}
calculate(){

  if(this.income >= 250000){

  this.TotaltaxableIncome=(this.income)-(this.deduction);
  this.Basicexemption=250000;
  this.TaxableAmount=this.TotaltaxableIncome-this.Basicexemption;

  if(this.TotaltaxableIncome>=0 && this.TotaltaxableIncome < 250000){
    if(this.TotaltaxableIncome <= 350000){
      this.rebate = 2500;
    this.PayableTax=this.TaxableAmount*(0.05)-this.rebate;
    }
    if(this.TotaltaxableIncome > 350000){
      this.PayableTax=this.TaxableAmount*(0.05);
    }
    
    
  }
  else if(this.TotaltaxableIncome>=250000 && this.TotaltaxableIncome < 500000){
    if(this.TotaltaxableIncome <= 350000){
      this.rebate = 2500;
    this.PayableTax=this.TaxableAmount*(0.05)-this.rebate;
    }
    if(this.TotaltaxableIncome > 350000){
      this.PayableTax=this.TaxableAmount*(0.05);
    }
     
  }
  else if(this.TotaltaxableIncome>=500000 && this.TotaltaxableIncome < 750000){
    this.PayableTax=this.TaxableAmount*(0.2);
  }
  else if(this.TotaltaxableIncome>=750000 && this.TotaltaxableIncome < 1000000){
    this.PayableTax=this.TaxableAmount*(0.2);
  }
  else if(this.TotaltaxableIncome>=1000000 && this.TotaltaxableIncome < 1250000){
    this.PayableTax=this.TaxableAmount*(0.3);
  }
  else if(this.TotaltaxableIncome>=1250000 && this.TotaltaxableIncome < 1500000){
    this.PayableTax=this.TaxableAmount*(0.3);
  }
  else if(this.TotaltaxableIncome>=1500000){
    this.PayableTax=this.TaxableAmount*(0.3);
  }
}
else if(this.income < 250000){
  this.TotaltaxableIncome=0;
  this.Basicexemption=0;
  this.TaxableAmount=0;
  this.PayableTax=0;
}
if(this.PayableTax<0){
  this.PayableTax=0;
}

}
}
