import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAppointmentModalPageRoutingModule } from './modal-appointment-routing.module';

import { MyAppointmentModalPage } from './modal-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAppointmentModalPageRoutingModule
  ],
  declarations: [MyAppointmentModalPage]
})
export class MyAppointmentModalPageModule {}
