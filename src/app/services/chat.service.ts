import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Message, User } from '../interfaces/chat'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  currentUser: User = null;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.afAuth.onAuthStateChanged(user => {
      console.log("Changed", user);
      this.currentUser = user;
    });
  }

  addChatMessage(msg) {
    return this.afs.collection('messages').add({
      msg,
      from: this.currentUser.uid,
      createdAt: firebase.default.firestore.FieldValue.serverTimestamp()
    });
  }
  
  getChatMessage() {
    let users = [];

    return this.getUsers().pipe(
      switchMap(res => {
        users = res;
        console.log('all users: ', users);
        return this.afs.collection('messages', ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id' }) as Observable<Message[]>;
      }),
      map(messages => {
        for (let m of messages) {
          m.fromName = this.getUserForMsg(m.from, users);
          m.myMsg = this.currentUser.uid === m.from;
        }
        console.log('all messages', messages);
        return messages;
      })
    )
  }

  getUsers() {
    return this.afs.collection('users').valueChanges({ idField: 'uid' }) as Observable<User[]>;
  }

  getUserForMsg(msgFromId, users: User[]): string {
    for(let user of users) {
      if (user.uid == msgFromId) {
        return user.email;
      }
    }
    return 'Deleted';
  }
}
