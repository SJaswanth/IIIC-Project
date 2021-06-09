import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {

  isProgressVisible: boolean;
  section3: FormGroup;
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
            this.section3.patchValue({
                email: user.email,
                
            });
           }
    });
      if (this.authService.userLoggedIn) {                       // if the user's logged in, navigate them to the dashboard (NOTE: don't use afAuth.currentUser -- it's never null)
          this.router.navigate(['/section80g']);
      }

      this.section3 = new FormGroup({
        //   'displayName': new FormControl('', Validators.required),
          'email':new FormControl('',Validators.required),
          'year': new FormControl('', Validators.required),
        //   'age': new FormControl('', Validators.required),
          'NationalDefenceFund' :new FormControl('',Validators.required),
          'PrimeMinistersNationalReliefFund' :new FormControl('',Validators.required),
          'NationalIllnessAssistanceFund' :new FormControl('',Validators.required),
          'NationalChildrenFund' :new FormControl('',Validators.required)
      });
  }
// get displayName(){
//     return this.section3.get('displayName')
// }
get email(){
    return this.section3.get('email')
}
get year(){
    return this.section3.get('year')
}
// get age(){
//     return this.section3.get('age')
// }
get NationalDefenceFund(){
    return this.section3.get('NationalDefenceFund')
}
get PrimeMinistersNationalReliefFund(){
    return this.section3.get('PrimeMinistersNationalReliefFund')
}
get NationalIllnessAssistanceFund(){
    return this.section3.get('NationalIllnessAssistanceFund')
}
get NationalChildrenFund(){
    return this.section3.get('NationalChildrenFund')
}

verify(){
    this.res = this.a + this.b + this.c + this.d ;
  }
  section80g() {
      if (this.section3.invalid)                            // if there's an error in the form, don't submit it
          return;

      this.isProgressVisible = true;
      this.authService.section80g(this.section3.value).then((result) => {
          if (result == null)                                 // null is success, false means there was an error
              this.router.navigate(['/section80g']);
          else if (result.isValid == false)
              this.firebaseErrorMessage = result.message;

          this.isProgressVisible = false;                     // no matter what, when the auth service returns, we hide the progress indicator
      }).catch(() => {
          this.isProgressVisible = false;
      });
  }
}