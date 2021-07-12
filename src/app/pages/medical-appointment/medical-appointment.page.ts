import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Subscription } from 'rxjs';
import { Appointment } from 'src/app/interfaces/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

import { ListItemsComponent } from '../../components/ListItems/list-items.component';

@Component({
  selector: 'app-medical-appointment',
  templateUrl: './medical-appointment.page.html',
  styleUrls: ['./medical-appointment.page.scss'],
})
@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    BrowserModule
  ],
  declarations: [ListItemsComponent],
})
export class MedicalAppointmentPage implements OnInit {

  constructor() {}

  // Fake data
  private appointments = [
    {
      name: 'Dr. Marcio',
      specialty: ['Clinico Geral', 'Cirurgião', 'Pediatra'],
      picture:
        'https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VsZmllfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      description: 'Consulta de rotina.',
      price: 150,
      timeAvaliable: '2021-05-01T15:43:40.394Z',
    },
    {
      name: 'Dr. Tanga',
      specialty: ['Clinico Geral'],
      picture:
        'https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VsZmllfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      description: 'Consulta de rotina.',
      price: null,
      timeAvaliable: '2021-05-01T15:43:40.394Z',
    },
    {
      name: 'Dr. Silva',
      specialty: ['Pediatra'],
      picture:
        'https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VsZmllfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      description: 'Consulta de rotina.',
      price: null,
      timeAvaliable: '2021-05-01T15:43:40.394Z',
    },
    {
      name: 'Dr. Mauricio',
      specialty: ['Cirurgião'],
      picture:
        'https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VsZmllfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      description: 'Consulta de rotina.',
      price: null,
      timeAvaliable: '2021-05-01T15:43:40.394Z',
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

  //appointments:Array<Appointment>  
}
