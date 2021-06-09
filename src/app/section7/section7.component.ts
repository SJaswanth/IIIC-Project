import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.css']
})
export class Section7Component implements OnInit {

  isProgressVisible: boolean;
  section7: FormGroup;
  firebaseErrorMessage: string;
  res:number;
  a:number;
  b:number;
  
  

  

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth) {
      this.isProgressVisible = false;
      this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {               // if the user is logged in, update the form value with their email address
        if (user) {
            this.section7.patchValue({
                email: user.email,
                
            });
           }
    });
      if (this.authService.userLoggedIn) {                       // if the user's logged in, navigate them to the dashboard (NOTE: don't use afAuth.currentUser -- it's never null)
          this.router.navigate(['/section80ccd']);
      }

      this.section7 = new FormGroup({
        //   'displayName': new FormControl('', Validators.required),
          'email':new FormControl('',Validators.required),
          'year': new FormControl('', Validators.required),
        //   'age': new FormControl('', Validators.required),
          'ForEmployees10percentofhissalary' :new FormControl('',Validators.required),
          'SelfEmployedPerson20percentofhisgrosstotalincome' :new FormControl('',Validators.required)
          
      });
  }
// get displayName(){
//     return this.section7.get('displayName')
// }
get email(){
    return this.section7.get('email')
}
get year(){
    return this.section7.get('year')
}
// get age(){
//     return this.section7.get('age')
// }
get ForEmployees10percentofhissalary(){
    return this.section7.get('ForEmployees10percentofhissalary')
}
get SelfEmployedPerson20percentofhisgrosstotalincome(){
    return this.section7.get('SelfEmployedPerson20percentofhisgrosstotalincome')
}


verify(){
    this.res = this.a + this.b;

    if(this.res <= 200000){
      // window.alert("AMount cannot be exceeded greater than 1.5 lakh")
      return false;
    }
    else{
      return true;
    }
  }
  section80ccd() {
      if (this.section7.invalid)                            // if there's an error in the form, don't submit it
          return;

      this.isProgressVisible = true;
      this.authService.section80ccd(this.section7.value).then((result) => {
          if (result == null)                                 // null is success, false means there was an error
              this.router.navigate(['/section80ccd']);
          else if (result.isValid == false)
              this.firebaseErrorMessage = result.message;

          this.isProgressVisible = false;                     // no matter what, when the auth service returns, we hide the progress indicator
      }).catch(() => {
          this.isProgressVisible = false;
      });
  }
}