import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAppointmentModalPage } from './myappointment.page';

const routes: Routes = [
  {
    path: '',
    component: MyAppointmentModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAppointmentModalPageRoutingModule {}
