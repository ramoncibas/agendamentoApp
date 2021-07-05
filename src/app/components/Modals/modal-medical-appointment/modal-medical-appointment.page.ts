import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-medical-appointment',
  templateUrl: './modal-medical-appointment.page.html',
  styleUrls: ['./modal-medical-appointment.page.scss'],
})

export class ModalMedicalAppointmentPage implements OnInit {

  // Passando valores para o Modal from another Page.
  @Input() data: any;  
  constructor(private modalControll: ModalController) { }

  ngOnInit() {    
    console.log(this.data.specialty)

     if (this.data.picture == null || this.data.picture == '') {
      this.data.picture = "/assets/img/doctor-avatar.png";
    }
  }

  async closeModal() {
    await this.modalControll.dismiss();
  }

  async mkAppointment(data) {
    console.log(data)
  }
}
