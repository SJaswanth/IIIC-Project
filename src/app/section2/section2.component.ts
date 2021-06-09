import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  isProgressVisible: boolean;
  section2: FormGroup;
  firebaseErrorMessage: string;
  res:number;
  a:number;
  b:number;
  c:number;
  d:number;
  

  

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth) {
      this.isProgressVisible = false;
      this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {               // if the user is logged in, update the form value with their email address
        if (user) {
            this.section2.patchValue({
                email: user.email,
                
            });
           }
    });
      if (this.authService.userLoggedIn) {                       // if the user's logged in, navigate them to the dashboard (NOTE: don't use afAuth.currentUser -- it's never null)
          this.router.navigate(['/section80d']);
      }

      this.section2 = new FormGroup({
        //   'displayName': new FormControl('', Validators.required),
          'email':new FormControl('',Validators.required),
          'year': new FormControl('', Validators.required),
        //   'age': new FormControl('', Validators.required),
          'medicalinsurancepremium' :new FormControl('',Validators.required),
          'medicalinsurancepremiumsrcitizen' :new FormControl('',Validators.required),
          'preventivehealthcheckup' :new FormControl('',Validators.required),
          'MedicalexpenditureonthehealthofResident' :new FormControl('',Validators.required)
      });
  }
// get displayName(){
//     return this.section2.get('displayName')
// }
get email(){
    return this.section2.get('email')
}
get year(){
    return this.section2.get('year')
}
// get age(){
//     return this.section2.get('age')
// }
get medicalinsurancepremium(){
    return this.section2.get('medicalinsurancepremium')
}
get medicalinsurancepremiumsrcitizen(){
    return this.section2.get('medicalinsurancepremiumsrcitizen')
}
get preventivehealthcheckup(){
    return this.section2.get('preventivehealthcheckup')
}
get MedicalexpenditureonthehealthofResident(){
    return this.section2.get('MedicalexpenditureonthehealthofResident')
}

verify(){
    this.res = this.a + this.b + this.c + this.d ;

    if(this.res <= 25000){
      // window.alert("AMount cannot be exceeded greater than 1.5 lakh")
      return false;
    }
    else{
      return true;
    }
  }
  section80d() {
      if (this.section2.invalid)                            // if there's an error in the form, don't submit it
          return;

      this.isProgressVisible = true;
      this.authService.section80d(this.section2.value).then((result) => {
          if (result == null)                                 // null is success, false means there was an error
              this.router.navigate(['/section80d']);
          else if (result.isValid == false)
              this.firebaseErrorMessage = result.message;

          this.isProgressVisible = false;                     // no matter what, when the auth service returns, we hide the progress indicator
      }).catch(() => {
          this.isProgressVisible = false;
      });
  }
}