import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.css']
})
export class Section6Component implements OnInit {

  isProgressVisible: boolean;
  section6: FormGroup;
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
            this.section6.patchValue({
                email: user.email,
                
            });
           }
    });
      if (this.authService.userLoggedIn) {                       // if the user's logged in, navigate them to the dashboard (NOTE: don't use afAuth.currentUser -- it's never null)
          this.router.navigate(['/section80ee']);
      }

      this.section6 = new FormGroup({
        //   'displayName': new FormControl('', Validators.required),
          'email':new FormControl('',Validators.required),
          'year': new FormControl('', Validators.required),
        //   'age': new FormControl('', Validators.required),
          'DeductionsonHomeLoanInterest' :new FormControl('',Validators.required)
          
      });
  }
// get displayName(){
//     return this.section6.get('displayName')
// }
get email(){
    return this.section6.get('email')
}
get year(){
    return this.section6.get('year')
}
// get age(){
//     return this.section6.get('age')
// }
get DeductionsonHomeLoanInterest(){
    return this.section6.get('DeductionsonHomeLoanInterest')
}

verify(){
    this.res = this.a ;

    if(this.res <= 50000){
      // window.alert("AMount cannot be exceeded greater than 1.5 lakh")
      return false;
    }
    else{
      return true;
    }
  }
  section80ee() {
      
      if (this.section6.invalid)                            // if there's an error in the form, don't submit it
          return;

      this.isProgressVisible = true;
      this.authService.section80ee(this.section6.value).then((result) => {
          if (result == null)                                 // null is success, false means there was an error
              this.router.navigate(['/section80ee']);
          else if (result.isValid == false)
              this.firebaseErrorMessage = result.message;

          this.isProgressVisible = false;                     // no matter what, when the auth service returns, we hide the progress indicator
      }).catch(() => {
          this.isProgressVisible = false;
      });
  }
}