import { AnimationDriver } from '@angular/animations/browser';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    userLoggedIn: boolean;      // other components can check on this variable for the login status of the user

    constructor(private router: Router, private afAuth: AngularFireAuth, private afs: AngularFirestore) {
        this.userLoggedIn = false;

        this.afAuth.onAuthStateChanged((user) => {              // set up a subscription to always know the login status of the user
            if (user) {
                this.userLoggedIn = true;
            } else {
                this.userLoggedIn = false;
            }
        });
    }

    loginUser(email: string, password: string): Promise<any> {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('Auth Service: loginUser: success');
                this.router.navigate(['/dashboard']);
            })
            // .catch((error: { message: any; }) => {
            //     window.alert(error.message)
            //   })
            .catch(error => {
                window.alert(error.message)
                if (error.code)
                    return { isValid: false, message: error.message };
            });
    }

    signupUser(user: any): Promise<any> {
        return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
            .then((result) => {
                let emailLower = user.email.toLowerCase();

                this.afs.doc('/users/' + emailLower)                        // on a successful signup, create a document in 'users' collection with the new user's info
                    .set({
                        accountType: 'endUser',
                        displayName: user.displayName,
                        // displayName_lower: user.displayName.toLowerCase(),
                        email: user.email,
                        age: user.age,
                        dob: user.dob,
                        aadhar: user.aadhar,
                        gender:user.gender
                        // email_lower: emailLower
                        

                    });

                    result.user.sendEmailVerification();                    // immediately send the user a verification email
            })
            .catch(error => {
                console.log('Auth Service: signup error', error);
                if (error.code)
                    return { isValid: false, message: error.message };
            });
    }
    section80c(user: any): Promise<any> {
        let emailLower = user.email.toLowerCase();

        return this.afs.doc('/section80c/'+emailLower)                        // on a successful signup, create a document in 'users' collection with the new user's info
                    .set({
                        // displayName: user.displayName,
                        // age:user.age,
                        year:user.year,
                        lic:user.lic,
                        TutionFeeforChildren:user.TutionFeeforChildren,
                        PublicProvidentFund:user.PublicProvidentFund,
                        EmployeesProvidentFund:user.EmployeesProvidentFund,
                        EquityLinkedSavingsScheme:user.EquityLinkedSavingsScheme,
                        UnitLinkedInsurancePlan:user.UnitLinkedInsurancePlan,
                        TaxSaverFixedDeposits:user.TaxSaverFixedDeposits,
                        NationalPensionScheme:user.NationalPensionScheme,
                        HomeLoanPrincipalRepayment:user.HomeLoanPrincipalRepayment,
                        SukanyaSamriddhiYojana:user.SukanyaSamriddhiYojana,
                        SeniorCitizensSavingsScheme:user.SeniorCitizensSavingsScheme,
                        NationalSavingsCertificate:user.NationalSavingsCertificate
                        
                    })
                    .catch(error => {
                        console.log('Auth Service: sectionadding error', error);
                        if (error.code)
                            return { isValid: false, message: error.message };
                    });

                }
                section80csbi(user: any): Promise<any> {
                    let emailLower = user.email.toLowerCase();
            
                    return this.afs.doc('/section80c/'+emailLower)                        // on a successful signup, create a document in 'users' collection with the new user's info
                                .set({
                                    // displayName: user.displayName,
                                    // age:user.age,
                                    year:user.year,
                                    lic:user.lic,
                                    TutionFeeforChildren:user.TutionFeeforChildren,
                                    PublicProvidentFund:user.PublicProvidentFund,
                                    EmployeesProvidentFund:user.EmployeesProvidentFund,
                                    EquityLinkedSavingsScheme:user.EquityLinkedSavingsScheme,
                                    UnitLinkedInsurancePlan:user.UnitLinkedInsurancePlan,
                                    TaxSaverFixedDeposits:user.TaxSaverFixedDeposits,
                                    NationalPensionScheme:user.NationalPensionScheme,
                                    HomeLoanPrincipalRepayment:user.HomeLoanPrincipalRepayment,
                                    SukanyaSamriddhiYojana:user.SukanyaSamriddhiYojana,
                                    SeniorCitizensSavingsScheme:user.SeniorCitizensSavingsScheme,
                                    NationalSavingsCertificate:user.NationalSavingsCertificate
                                    
                                })
                                .catch(error => {
                                    console.log('Auth Service: sectionadding error', error);
                                    if (error.code)
                                        return { isValid: false, message: error.message };
                                });
            
                            }
                            section80chdfc(user: any): Promise<any> {
                                let emailLower = user.email.toLowerCase();
                        
                                return this.afs.doc('/section80c/'+emailLower)                        // on a successful signup, create a document in 'users' collection with the new user's info
                                            .set({
                                                // displayName: user.displayName,
                                                // age:user.age,
                                                year:user.year,
                                                lic:user.lic,
                                                TutionFeeforChildren:user.TutionFeeforChildren,
                                                PublicProvidentFund:user.PublicProvidentFund,
                                                EmployeesProvidentFund:user.EmployeesProvidentFund,
                                                EquityLinkedSavingsScheme:user.EquityLinkedSavingsScheme,
                                                UnitLinkedInsurancePlan:user.UnitLinkedInsurancePlan,
                                                TaxSaverFixedDeposits:user.TaxSaverFixedDeposits,
                                                NationalPensionScheme:user.NationalPensionScheme,
                                                HomeLoanPrincipalRepayment:user.HomeLoanPrincipalRepayment,
                                                SukanyaSamriddhiYojana:user.SukanyaSamriddhiYojana,
                                                SeniorCitizensSavingsScheme:user.SeniorCitizensSavingsScheme,
                                                NationalSavingsCertificate:user.NationalSavingsCertificate
                                                
                                            })
                                            .catch(error => {
                                                console.log('Auth Service: sectionadding error', error);
                                                if (error.code)
                                                    return { isValid: false, message: error.message };
                                            });
                        
                                        }
               
                                        section80cbaroda(user: any): Promise<any> {
                                            let emailLower = user.email.toLowerCase();
                                    
                                            return this.afs.doc('/section80c/'+emailLower)                        // on a successful signup, create a document in 'users' collection with the new user's info
                                                        .set({
                                                            // displayName: user.displayName,
                                                            // age:user.age,
                                                            year:user.year,
                                                            lic:user.lic,
                                                            TutionFeeforChildren:user.TutionFeeforChildren,
                                                            PublicProvidentFund:user.PublicProvidentFund,
                                                            EmployeesProvidentFund:user.EmployeesProvidentFund,
                                                            EquityLinkedSavingsScheme:user.EquityLinkedSavingsScheme,
                                                            UnitLinkedInsurancePlan:user.UnitLinkedInsurancePlan,
                                                            TaxSaverFixedDeposits:user.TaxSaverFixedDeposits,
                                                            NationalPensionScheme:user.NationalPensionScheme,
                                                            HomeLoanPrincipalRepayment:user.HomeLoanPrincipalRepayment,
                                                            SukanyaSamriddhiYojana:user.SukanyaSamriddhiYojana,
                                                            SeniorCitizensSavingsScheme:user.SeniorCitizensSavingsScheme,
                                                            NationalSavingsCertificate:user.NationalSavingsCertificate
                                                            
                                                        })
                                                        .catch(error => {
                                                            console.log('Auth Service: sectionadding error', error);
                                                            if (error.code)
                                                                return { isValid: false, message: error.message };
                                                        });
                                    
                                                    }                        
                                                    section80cicic(user: any): Promise<any> {
                                                        let emailLower = user.email.toLowerCase();
                                                
                                                        return this.afs.doc('/section80c/'+emailLower)                        // on a successful signup, create a document in 'users' collection with the new user's info
                                                                    .set({
                                                                        // displayName: user.displayName,
                                                                        // age:user.age,
                                                                        year:user.year,
                                                                        lic:user.lic,
                                                                        TutionFeeforChildren:user.TutionFeeforChildren,
                                                                        PublicProvidentFund:user.PublicProvidentFund,
                                                                        EmployeesProvidentFund:user.EmployeesProvidentFund,
                                                                        EquityLinkedSavingsScheme:user.EquityLinkedSavingsScheme,
                                                                        UnitLinkedInsurancePlan:user.UnitLinkedInsurancePlan,
                                                                        TaxSaverFixedDeposits:user.TaxSaverFixedDeposits,
                                                                        NationalPensionScheme:user.NationalPensionScheme,
                                                                        HomeLoanPrincipalRepayment:user.HomeLoanPrincipalRepayment,
                                                                        SukanyaSamriddhiYojana:user.SukanyaSamriddhiYojana,
                                                                        SeniorCitizensSavingsScheme:user.SeniorCitizensSavingsScheme,
                                                                        NationalSavingsCertificate:user.NationalSavingsCertificate
                                                                        
                                                                    })
                                                                    .catch(error => {
                                                                        console.log('Auth Service: sectionadding error', error);
                                                                        if (error.code)
                                                                            return { isValid: false, message: error.message };
                                                                    });
                                                
                                                                }
        section80d(user: any): Promise<any> {
        let emailLower = user.email.toLowerCase();

        return this.afs.doc('/section80d/'+emailLower)                        // on a successful signup, create a document in 'users' collection with the new user's info
                    .set({
                        // displayName: user.displayName,
                        // age:user.age,
                        year:user.year,
                        medicalinsurancepremium:user.medicalinsurancepremium,
                        medicalinsurancepremiumsrcitizen:user.medicalinsurancepremiumsrcitizen,
                        preventivehealthcheckup:user.preventivehealthcheckup,
                        MedicalexpenditureonthehealthofResident:user.MedicalexpenditureonthehealthofResident
                       
                        
                    })
                    .catch(error => {
                        console.log('Auth Service: sectionadding error', error);
                        if (error.code)
                            return { isValid: false, message: error.message };
                    });

                }
                section80g(user: any): Promise<any> {
                    let emailLower = user.email.toLowerCase();
            
                    return this.afs.doc('/section80g/'+emailLower)                        // on a successful signup, create a document in 'users' collection with the new user's info
                                .set({
                                    // displayName: user.displayName,
                                    // age:user.age,
                                    year:user.year,
                                    NationalDefenceFund:user.NationalDefenceFund,
                                    PrimeMinistersNationalReliefFund:user.PrimeMinistersNationalReliefFund,
                                    NationalIllnessAssistanceFund:user.NationalIllnessAssistanceFund,
                                    NationalChildrenFund:user.NationalChildrenFund
                                   
                                    
                                })
                                .catch(error => {
                                    console.log('Auth Service: sectionadding error', error);
                                    if (error.code)
                                        return { isValid: false, message: error.message };
                                });
            
                            }
                            section80u(user: any): Promise<any> {
                                let emailLower = user.email.toLowerCase();
                        
                                return this.afs.doc('/section80u/'+emailLower)                        // on a successful signup, create a document in 'users' collection with the new user's info
                                            .set({
                                                // displayName: user.displayName,
                                                // age:user.age,
                                                year:user.year,
                                                Medicalexpenses:user.Medicalexpenses    
                                            })
                                            .catch(error => {
                                                console.log('Auth Service: sectionadding error', error);
                                                if (error.code)
                                                    return { isValid: false, message: error.message };
                                            });
                        
                                        }
     section80tta(user: any): Promise<any> {
        let emailLower = user.email.toLowerCase();

        return this.afs.doc('/section80tta/'+emailLower)                        // on a successful signup, create a document in 'users' collection with the new user's info
                    .set({
                        // displayName: user.displayName,
                        // age:user.age,
                        year:user.year,
                        Interestearnedonasavingsaccount:user.Interestearnedonasavingsaccount    
                    })
                    .catch(error => {
                        console.log('Auth Service: sectionadding error', error);
                        if (error.code)
                            return { isValid: false, message: error.message };
                    });

                }

                section80ee(user: any): Promise<any> {
                    let emailLower = user.email.toLowerCase();
            
                    return this.afs.doc('/section80ee/'+emailLower)                        // on a successful signup, create a document in 'users' collection with the new user's info
                                .set({
                                    // displayName: user.displayName,
                                    // age:user.age,
                                    year:user.year,
                                    DeductionsonHomeLoanInterest:user.DeductionsonHomeLoanInterest    
                                })
                                .catch(error => {
                                    console.log('Auth Service: sectionadding error', error);
                                    if (error.code)
                                        return { isValid: false, message: error.message };
                                });
            
                            }

            section80ccd(user: any): Promise<any> {
                    let emailLower = user.email.toLowerCase();
            
                    return this.afs.doc('/section80ccd/'+emailLower)                        // on a successful signup, create a document in 'users' collection with the new user's info
                                .set({
                                    // displayName: user.displayName,
                                    // age:user.age,
                                    year:user.year,
                                    ForEmployees10percentofhissalary:user.ForEmployees10percentofhissalary,
                                    SelfEmployedPerson20percentofhisgrosstotalincome:user.SelfEmployedPerson20percentofhisgrosstotalincome
                                })
                                .catch(error => {
                                    console.log('Auth Service: sectionadding error', error);
                                    if (error.code)
                                        return { isValid: false, message: error.message };
                                });
            
                            }
    resetPassword(email: string): Promise<any> {
        return this.afAuth.sendPasswordResetEmail(email)
            .then(() => {
                console.log('Auth Service: reset password success');
                // this.router.navigate(['/amount']);
            })
            .catch(error => {
                console.log('Auth Service: reset password error...');
                console.log(error.code);
                console.log(error)
                if (error.code)
                    return error;
            });
    }

    async resendVerificationEmail() {                         // verification email is sent in the Sign Up function, but if you need to resend, call this function
        return (await this.afAuth.currentUser).sendEmailVerification()
            .then(() => {
                // this.router.navigate(['home']);
            })
            .catch(error => {
                console.log('Auth Service: sendVerificationEmail error...');
                console.log('error code', error.code);
                console.log('error', error);
                if (error.code)
                    return error;
            });
    }

    logoutUser(): Promise<void> {
        return this.afAuth.signOut()
            .then(() => {
                this.router.navigate(['/home']);                    // when we log the user out, navigate them to home
            })
            .catch(error => {
                console.log('Auth Service: logout error...');
                console.log('error code', error.code);
                console.log('error', error);
                if (error.code)
                    return error;
            });
    }

    setUserInfo(payload: object) {
        console.log('Auth Service: saving user info...');
        this.afs.collection('users')
            .add(payload).then(function (res) {
                console.log("Auth Service: setUserInfo response...")
                console.log(res);
            })
    }

    getCurrentUser() {
        return this.afAuth.currentUser;                                 // returns user object for logged-in users, otherwise returns null 
    }
}
