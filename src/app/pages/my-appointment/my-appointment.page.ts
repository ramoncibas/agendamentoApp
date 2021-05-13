import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyAppointmentModalPage } from '../modals/myappointment/myappointment.page'

@Component({
  selector: 'app-my-appointment',
  templateUrl: './my-appointment.page.html',
  styleUrls: ['./my-appointment.page.scss'],
})
export class MyAppointmentPage implements OnInit {  

  constructor(public modalControll: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const dateHj = new Date();
    const modal = await this.modalControll.create({
      component: MyAppointmentModalPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {
        'firtName': 'Dr. Yang',
        'doctorImg': 'https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VsZmllfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        'doctorSpeciality': 'Clinico Geral',
        'dayAt': dateHj
      }
    });
    return await modal.present();
  }
}
