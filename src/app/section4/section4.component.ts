import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit {

  isProgressVisible: boolean;
  section4: FormGroup;
  firebaseErrorMessage: string;
  res:number;
  a:number;
 

  

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth) {
      this.isProgressVisible = false;
      this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {               // if the user is logged in, update the form value with their email address
        if (user) {
            this.section4.patchValue({
                email: user.email,
                
            });
           }
    });
      if (this.authService.userLoggedIn) {                       // if the user's logged in, navigate them to the dashboard (NOTE: don't use afAuth.currentUser -- it's never null)
          this.router.navigate(['/section80u']);
      }

      this.section4 = new FormGroup({
        //   'displayName': new FormControl('', Validators.required),
          'email':new FormControl('',Validators.required),
          'year': new FormControl('', Validators.required),
        //   'age': new FormControl('', Validators.required),
          'Medicalexpenses' :new FormControl('',Validators.required)
         
      });
  }
// get displayName(){
//     return this.section4.get('displayName')
// }
get email(){
    return this.section4.get('email')
}
get year(){
    return this.section4.get('year')
}
// get age(){
//     return this.section4.get('age')
// }
get Medicalexpenses(){
    return this.section4.get('Medicalexpenses')
}


verify(){
    this.res = this.a;

    if(this.res <= 100000){
      // window.alert("AMount cannot be exceeded greater than 1.5 lakh")
      return false;
    }
    else{
      return true;
    }
  }
  section80u() {
      if (this.section4.invalid)                            // if there's an error in the form, don't submit it
          return;

      this.isProgressVisible = true;
      this.authService.section80u(this.section4.value).then((result) => {
          if (result == null)                                 // null is success, false means there was an error
              this.router.navigate(['/section80u']);
          else if (result.isValid == false)
              this.firebaseErrorMessage = result.message;

          this.isProgressVisible = false;                     // no matter what, when the auth service returns, we hide the progress indicator
      }).catch(() => {
          this.isProgressVisible = false;
      });
  }
}