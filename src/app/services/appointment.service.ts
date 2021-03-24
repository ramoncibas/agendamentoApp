import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, } from '@angular/fire/firestore';
import { Appointment } from '../interfaces/appointment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private appointementCollection: AngularFirestoreCollection<Appointment>;

  constructor(private afs: AngularFirestore) {
    this.appointementCollection = this.afs.collection<Appointment>('appointment');
  }

  getAppointments() {
    return this.appointementCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        })
      })
    );
  }

  addAppointment(appointment) {}

  getAppointment(id: string) {}

  updateAppointment(id: string, appointment: Appointment) {}

  deleteAppointment(id: string) {}
}
