import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    isProgressVisible: boolean;
    signupForm: FormGroup;
    firebaseErrorMessage: string;
    countries: string[] = ['MALE', 'FEMALE'];

    constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth,public fb: FormBuilder) {
        this.isProgressVisible = false;
        this.firebaseErrorMessage = '';
    }
    ngOnInit(): void {
        if (this.authService.userLoggedIn) {                       // if the user's logged in, navigate them to the dashboard (NOTE: don't use afAuth.currentUser -- it's never null)
            this.router.navigate(['/verify-email']);
        }

        this.signupForm = new FormGroup({
            'displayName': new FormControl('', [Validators.required,Validators.minLength(4)]),
            'email': new FormControl('', [Validators.required, Validators.email]),
            'age': new FormControl('', Validators.required),
            'dob': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required),
            'aadhar': new FormControl('',[Validators.required,Validators.minLength(12)]),
            'gender': new FormControl('', Validators.required)
           

        });
    }
    
    get displayName(){
        return this.signupForm.get('displayName')
    }
    get email(){
        return this.signupForm.get('email')
    }
    get dob(){
        return this.signupForm.get('dob')
    }
    get age(){
        return this.signupForm.get('age')
    }
    get aadhar(){
        return this.signupForm.get('aadhar')
    }
    get password(){
        return this.signupForm.get('password')
    }
    get gender(){
        return this.signupForm.get('gender')
    }
   
    signup() {
        if (this.signupForm.invalid)                            // if there's an error in the form, don't submit it
            return;

        this.isProgressVisible = true;
        this.authService.signupUser(this.signupForm.value).then((result) => {
            if (result == null)                                 // null is success, false means there was an error
                this.router.navigate(['/verify-email']);
            else if (result.isValid == false)
                this.firebaseErrorMessage = result.message;

            this.isProgressVisible = false;                     // no matter what, when the auth service returns, we hide the progress indicator
        }).catch(() => {
            this.isProgressVisible = false;
        });
    }
}
