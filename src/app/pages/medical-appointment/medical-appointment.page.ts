import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MedicalAppointmentModalPage } from '../modals/modal-medical/modal-medical.page';
import { Subscription } from 'rxjs';
import { Appointment } from 'src/app/interfaces/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-medical-appointment',
  templateUrl: './medical-appointment.page.html',
  styleUrls: ['./medical-appointment.page.scss'],
})
export class MedicalAppointmentPage implements OnInit {

  constructor(public modalControll: ModalController) {}
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
      timeAvaliable: [
        {
          week: ['seg, quar, sex'],
          day: '2021-05-01T15:43:40.394Z'
        }
      ]
    },
  ];

  
  // private appointments =  new Array<Appointment>();
  // private appointmentsSubscription: Subscription;

  // constructor( private appointmentsService: AppointmentService ) {
  //   this.appointmentsSubscription = this.appointmentsService.getAppointments().subscribe(data => {
  //     this.appointments = data;
  //   });
  // }

  ngOnInit() {
    console.log(this.appointments[0].timeAvaliable[0].day);
  }

  // // Destroy listen
  // ngOnDestroy() {
  //   this.appointmentsSubscription.unsubscribe();
  // }

  // Show Modal with options (make-appointment and show time of doctor)
  async presentModal(modalParam) {
    console.log(modalParam)
    const modal = await this.modalControll.create({
      component: MedicalAppointmentModalPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {
        modalParam
      }
    });
    return await modal.present();
  }
}
