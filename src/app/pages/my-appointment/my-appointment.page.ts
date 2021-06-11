import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyAppointmentModalPage } from '../../components/Modals/modal-appointment/modal-appointment.page'

@Component({
  selector: 'app-my-appointment',
  templateUrl: './my-appointment.page.html',
  styleUrls: ['./my-appointment.page.scss'],
})
export class MyAppointmentPage implements OnInit {

  constructor(public modalControll: ModalController) { }

  ngOnInit() {
  }

  // Fake data
  showModal(e) {
    if (e == 'pills') {
      console.log(e)
      const data = {    
        name: 'Medicalmento: Paracetamol',        
        secondName: '12mg',
        dayAt: new Date()
      }
      this.presentModal(data)

    } else if (e == 'vaccine') {
      console.log(e)
      const data = {
        name: 'Vacinando contra: Covid-19',
        secondName: 'Vacina: CoronaVac',
        dayAt: new Date()
      }
      this.presentModal(data)

    } else if (e == 'check-up') {
      const data = {    
        name: 'Exame: Consulta de Rotina',
        secondName: 'Medico: Dr. Yang',
        dayAt: new Date()
      }
      this.presentModal(data)

    } else  {
      console.log(e)
      const data = {    
        name: 'Medico: Dr. Yang',
        doctorImg: 'https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VsZmllfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        secondName: 'Especialidade: Clinico Geral',
        dayAt: new Date()
      }
      this.presentModal(data)
    }

  }

  async presentModal(modalParam) { 
    console.log(modalParam)
    const modal = await this.modalControll.create({
      component: MyAppointmentModalPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {
        modalParam
      }
    });
    return await modal.present();
  }
}
