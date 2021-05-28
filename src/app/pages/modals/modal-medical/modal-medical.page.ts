import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-medical',
  templateUrl: './modal-medical.page.html',
  styleUrls: ['./modal-medical.page.scss'],
})
export class MedicalAppointmentModalPage implements OnInit {

  // Passando valores para o Modal from another Page.
  @Input() modalParam: any;
  constructor(private modalControll: ModalController) { }

  ngOnInit() {    
  }

  async closeModal() {
    await this.modalControll.dismiss();
  }

}
