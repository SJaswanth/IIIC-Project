import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-section80ee',
  templateUrl: './section80ee.component.html',
  styleUrls: ['./section80ee.component.css']
})
export class Section80eeComponent implements OnInit {

  form: Observable<any>;              // Example: store the user's info here (Cloud Firestore: collection is 'users', docId is the user's email, lower case)
  user: Observable<any>; 
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
      this.form = null;
      this.user = null;
  }
  downloadpdf()
  {
  var element= document.getElementById('table');
  html2canvas(element).then((canvas)=>{
  console.log(canvas);
  var imgData=canvas.toDataURL('image/png')
  var imgHeight=canvas.height*208/canvas.width;
  var doc = new jsPDF();
  doc.addImage(imgData,0,0,208,imgHeight);
  doc.save('tax.pdf');
  })

  }


  ngOnInit(): void {
      this.afAuth.authState.subscribe(form => {
         // console.log('Section80c: form', form);

          if (form) {
            let emailLower = form.email.toLowerCase();

              this.form = this.firestore.collection('section80ee').doc(emailLower).valueChanges();
          }
      });
      this.afAuth.authState.subscribe(user => {
        //console.log('Dashboard: user', user);

        if (user) {
            let emailLower = user.email.toLowerCase();
            this.user = this.firestore.collection('users').doc(emailLower).valueChanges();
        }
    });

  }
  logout(): void {
    this.afAuth.signOut();
}
}

