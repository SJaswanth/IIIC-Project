import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage'
import { ViewChild } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  user: Observable<any>;    
  constructor(private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private afStorage:AngularFireStorage,

    ){
      this.user = null;
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.afAuth.signOut();
}
}
