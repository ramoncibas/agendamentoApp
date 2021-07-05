import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-appointment',
  templateUrl: './modal-appointment.page.html',
  styleUrls: ['./modal-appointment.page.scss'],
})
export class MyAppointmentModalPage implements OnInit {
  // Fake data  
  @Input() data: any;
  @Input() type: any;

  constructor(private modalControll: ModalController) { }

  ngOnInit() {
    console.log(this.data)
  }
  
  async closeModal() {
    await this.modalControll.dismiss();
  }
 
  async shareItem(data) {
    console.log(data);
  }

  async deleteItem(data) {
    console.log(data);
  }

  async cleanHistory(data) {
    console.log(data);
  }
}
