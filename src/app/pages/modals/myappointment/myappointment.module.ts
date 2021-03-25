import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAppointmentModalPageRoutingModule } from './myappointment-routing.module';

import { MyAppointmentModalPage } from './myappointment.page';

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
