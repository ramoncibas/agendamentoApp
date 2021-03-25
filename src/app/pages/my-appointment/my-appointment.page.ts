import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyAppointmentModalPage } from '../modals/myappointment/myappointment.page'

@Component({
  selector: 'app-my-appointment',
  templateUrl: './my-appointment.page.html',
  styleUrls: ['./my-appointment.page.scss'],
})
export class MyAppointmentPage implements OnInit {
  private appointments = [
    {
      type: 'Consulta de rotina',
      doctor: 'DrSilva',
      dayAt: new Date()
    },
    {
      type: 'Consulta de rotina',
      doctor: 'DrSilva',
      dayAt: new Date()
    },
  ]

  constructor(public modalControll: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalControll.create({
      component: MyAppointmentModalPage,
      cssClass: 'my-custom-class',
      swipeToClose: true      
    });
    return await modal.present();
  }

}
