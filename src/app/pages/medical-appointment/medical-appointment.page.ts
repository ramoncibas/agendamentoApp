import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Appointment } from 'src/app/interfaces/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-medical-appointment',
  templateUrl: './medical-appointment.page.html',
  styleUrls: ['./medical-appointment.page.scss'],
})
export class MedicalAppointmentPage implements OnInit {

  // Fake data
  private appointments = [
    {
      name: 'Dr. Marcio',
      specialty: 'Clinico Geral',
      picture:
        'https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VsZmllfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      description: 'Consulta de rotina.',
      createdAt: new Date(),
      price: null,
    },
  ];
  
  // private appointments =  new Array<Appointment>();
  // private appointmentsSubscription: Subscription;

  // constructor( private appointmentsService: AppointmentService ) {
  //   this.appointmentsSubscription = this.appointmentsService.getAppointments().subscribe(data => {
  //     this.appointments = data;
  //   });
  // }

  ngOnInit() {}

  // // Destroy listen
  // ngOnDestroy() {
  //   this.appointmentsSubscription.unsubscribe();
  // }
}
