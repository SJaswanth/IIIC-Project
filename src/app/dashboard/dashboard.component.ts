import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage'
import { ViewChild } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    filePath:String="/assets/dummy-user.png";
    user: Observable<any>;              // Example: store the user's info here (Cloud Firestore: collection is 'users', docId is the user's email, lower case)

    constructor(private afAuth: AngularFireAuth,
         private firestore: AngularFirestore,
         private afStorage:AngularFireStorage,)
     {
        this.user = null;
    }
    urllink:String="/assets/dummy-user.png";
    
    selectFile(event)
    {
      if(event.target.files && event.target.files[0])
      {
        var Reader=new FileReader();
        Reader.readAsDataURL(event.target.files[0]);
        Reader.onload=(event:any)=>{
          this.urllink=event.target.result;
  
        }
      }
  
    }
    
    upload(event) {
      this.filePath= event.target.files[0]
    }
    uploadImage(){
      console.log(this.filePath)
      this.afStorage.upload('/images'+Math.random()+this.filePath, this.filePath);
  }
logout(): void {
    this.afAuth.signOut();
}


    ngOnInit(): void {
        this.afAuth.authState.subscribe(user => {
            //console.log('Dashboard: user', user);

            if (user) {
                let emailLower = user.email.toLowerCase();
                this.user = this.firestore.collection('users').doc(emailLower).valueChanges();
            }
        });
    }
}

 