import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css'],

})
export class HomeDashboardComponent implements OnInit {


  constructor(public afAuth: AngularFireAuth, private firestore: AngularFirestore) {

  }

  ngOnInit(): void {

  }

  logout(): void {
      this.afAuth.signOut();
  }
}
