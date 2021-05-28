import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalAppointmentModalPageRoutingModule } from './modal-medical-routing.module';

import { MedicalAppointmentModalPage } from './modal-medical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalAppointmentModalPageRoutingModule
  ],
  declarations: [MedicalAppointmentModalPage]
})
export class MedicalAppointmentModalPageModule {}
