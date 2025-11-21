import { Injectable } from '@angular/core';
import { key } from './key';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
  private app;
  public auth;
  public firestore;
  public storage;

  constructor() {
    const firebaseConfig = {
      apiKey: key,
      authDomain: 'projeto-firebase-01-d340f.firebaseapp.com',
      projectId: 'projeto-firebase-01-d340f',
      storageBucket: 'projeto-firebase-01-d340f.firebasestorage.app',
      messagingSenderId: '59814835222',
      appId: '1:59814835222:web:7be6ce0395a217fa4e7137',
    };
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.storage = getStorage(this.app);
  }
}
