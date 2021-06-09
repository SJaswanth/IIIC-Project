import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private firestore: AngularFirestore) {

  }

  ngOnInit(): void {

  }

  logout(): void {
      this.afAuth.signOut();
  }
}