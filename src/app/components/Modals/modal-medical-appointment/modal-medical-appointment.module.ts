import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalModalAppointmentPageRoutingModule } from './modal-medical-appointment-routing.module';

import { ModalMedicalAppointmentPage } from './modal-medical-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalModalAppointmentPageRoutingModule
  ],
  declarations: [ModalMedicalAppointmentPage]
})
export class MedicalModalAppointmentPageModule {}
