import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-medical-appointment',
  templateUrl: './modal-medical-appointment.page.html',
  styleUrls: ['./modal-medical-appointment.page.scss'],
})
export class ModalMedicalAppointmentPage implements OnInit {

  // Passando valores para o Modal from another Page.
  @Input() modalParam: any;
  constructor(private modalControll: ModalController) { }

  ngOnInit() {    
    console.log(this.modalParam)

     if (this.modalParam.picture == null || this.modalParam.picture == '') {
      this.modalParam.picture = "/assets/img/doctor-avatar.png";
    }
  }

  async closeModal() {
    await this.modalControll.dismiss();
  }

 

}
