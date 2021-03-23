import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalAppointmentPageRoutingModule } from './medical-appointment-routing.module';

import { MedicalAppointmentPage } from './medical-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalAppointmentPageRoutingModule
  ],
  declarations: [MedicalAppointmentPage]
})
export class MedicalAppointmentPageModule {}
