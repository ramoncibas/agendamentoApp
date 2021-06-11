import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAppointmentPageRoutingModule } from './my-appointment-routing.module';

import { MyAppointmentPage } from './my-appointment.page';
import { MyAppointmentModalPage } from '../../components/Modals/modal-appointment/modal-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAppointmentPageRoutingModule
  ],
  declarations: [MyAppointmentPage, MyAppointmentModalPage]
})
export class MyAppointmentPageModule {}
