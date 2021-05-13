import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-myappointment',
  templateUrl: './myappointment.page.html',
  styleUrls: ['./myappointment.page.scss'],
})
export class MyAppointmentModalPage implements OnInit {
  @Input() firstName: string;
  @Input() doctorImg: string;
  @Input() doctorSpeciality: string;
  @Input() dayAt: Date;
  //@Array() []: any;
  // Fake data

  constructor(private modalControll: ModalController) { }

  ngOnInit() {
  }
  
  async closeModal() {
    await this.modalControll.dismiss();
  }

}
