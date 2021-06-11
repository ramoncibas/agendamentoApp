import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-appointment',
  templateUrl: './modal-appointment.page.html',
  styleUrls: ['./modal-appointment.page.scss'],
})
export class MyAppointmentModalPage implements OnInit {
  @Input() modalParam: any;
  // Fake data  

  constructor(private modalControll: ModalController) { }

  ngOnInit() {
    console.log(this.modalParam)
  }
  
  async closeModal() {
    await this.modalControll.dismiss();
  }
  
}
