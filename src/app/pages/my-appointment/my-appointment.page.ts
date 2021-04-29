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
      title: 'Meus Medicamentos',
      description: 'Medicamentos cadastrados e comprados',
      icon: 'person'      
    },
    {
      title: 'Minhas Vacinas',
      description: 'Carteirinha de vacinação',
      icon: 'eyedrop'      
    },
    {
      title: 'Meus Exames',
      description: 'Acompanhamento de exames realizados',
      icon: 'id-card'      
    },
    {
      title: 'Meus Profissionais',
      description: 'Veja sua lista de profissionais já consultado',
      icon: 'person-circle'      
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
