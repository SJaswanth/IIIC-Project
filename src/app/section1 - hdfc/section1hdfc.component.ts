import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-section1hdfc',
  templateUrl: './section1hdfc.component.html',
  styleUrls: ['./section1hdfc.component.css']
})
export class Section1hdfcComponent implements OnInit {

  isProgressVisible: boolean;
  section1: FormGroup;
  firebaseErrorMessage: string;
  res:number;
  a:number;
  b:number;
  c:number;
  d:number;
  e:number;
  f:number;
  g:number;
  h:number;
  i:number;
  j:number;
  k:number;
  l:number;

  

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth) {
      this.isProgressVisible = false;
      this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
      this.a = 6000;
      this.c = 6000;
      this.d = 6000;
      this.g = 6000;
      this.j = 6000;
      this.afAuth.authState.subscribe(user => {               // if the user is logged in, update the form value with their email address
        if (user) {
            this.section1.patchValue({
                email: user.email,
                
            });
           }
    });
      if (this.authService.userLoggedIn) {                       // if the user's logged in, navigate them to the dashboard (NOTE: don't use afAuth.currentUser -- it's never null)
          this.router.navigate(['/section80c']);
      }

      this.section1 = new FormGroup({
        //   'displayName': new FormControl('', Validators.required),
          'email':new FormControl('',Validators.required),
          'year': new FormControl('', Validators.required),
        //   'age': new FormControl('', Validators.required),
          'lic' :new FormControl('',Validators.required),
          'TutionFeeforChildren' :new FormControl('',Validators.required),
          'PublicProvidentFund' :new FormControl('',Validators.required),
          'EmployeesProvidentFund' :new FormControl('',Validators.required),
          'EquityLinkedSavingsScheme' :new FormControl('',Validators.required),
          'UnitLinkedInsurancePlan' :new FormControl('',Validators.required),
          'TaxSaverFixedDeposits' :new FormControl('',Validators.required),
          'NationalPensionScheme' :new FormControl('',Validators.required),
          'HomeLoanPrincipalRepayment' :new FormControl('',Validators.required),
          'SukanyaSamriddhiYojana' :new FormControl('',Validators.required),
          'SeniorCitizensSavingsScheme' :new FormControl('',Validators.required),
          'NationalSavingsCertificate' :new FormControl('',Validators.required)

      });
  }
// get displayName(){
//     return this.section1.get('displayName')
// }
get email(){
    return this.section1.get('email')
}
get year(){
    return this.section1.get('year')
}
// get age(){
//     return this.section1.get('age')
// }
get lic(){
    return this.section1.get('lic')
}
get TutionFeeforChildren(){
    return this.section1.get('TutionFeeforChildren')
}
get PublicProvidentFund(){
    return this.section1.get('PublicProvidentFund')
}
get EmployeesProvidentFund(){
    return this.section1.get('EmployeesProvidentFund')
}
get EquityLinkedSavingsScheme(){
    return this.section1.get('EquityLinkedSavingsScheme')
}
get UnitLinkedInsurancePlan(){
    return this.section1.get('UnitLinkedInsurancePlan')
}
get TaxSaverFixedDeposits(){
    return this.section1.get('TaxSaverFixedDeposits')
}
get NationalPensionScheme(){
    return this.section1.get('NationalPensionScheme')
}
get HomeLoanPrincipalRepayment(){
    return this.section1.get('HomeLoanPrincipalRepayment')
}
get SukanyaSamriddhiYojana(){
    return this.section1.get('SukanyaSamriddhiYojana')
}
get SeniorCitizensSavingsScheme(){
    return this.section1.get('SeniorCitizensSavingsScheme')
}
get NationalSavingsCertificate(){
    return this.section1.get('NationalSavingsCertificate')
}
verify(){
    this.res = this.a + this.b + this.c + this.d + this.e + this.f + this. g + this.h +this.i+this.j+this.k+this.l;

    if(this.res <= 150000){
      // window.alert("AMount cannot be exceeded greater than 1.5 lakh")
      return false;
    }
    else{
      return true;
    }
  }
  section80chdfc() {
      if (this.section1.invalid)                            // if there's an error in the form, don't submit it
          return;

      this.isProgressVisible = true;
      this.authService.section80chdfc(this.section1.value).then((result) => {
          if (result == null)                                 // null is success, false means there was an error
              this.router.navigate(['/section80c']);
          else if (result.isValid == false)
              this.firebaseErrorMessage = result.message;

          this.isProgressVisible = false;                     // no matter what, when the auth service returns, we hide the progress indicator
      }).catch(() => {
          this.isProgressVisible = false;
      });
  }
}