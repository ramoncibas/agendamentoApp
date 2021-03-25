import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-myappointment',
  templateUrl: './myappointment.page.html',
  styleUrls: ['./myappointment.page.scss'],
})
export class MyAppointmentModalPage implements OnInit {

  // Fake data
  private appointments = 
    {
      type: 'Consulta de rotina',
      doctor: 'Dr. Tang',
      doctorPic: 'https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VsZmllfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      doctorSpeciality: 'Clinico Geral',
      patient: 'Ramon Cibas',
      dayAt: new Date()
    }
  

  constructor(private modalControll: ModalController) { }

  ngOnInit() {
  }
  
  async closeModal() {
    await this.modalControll.dismiss();
  }
}
