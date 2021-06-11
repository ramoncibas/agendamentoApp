import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalMedicalAppointmentPage } from './modal-medical-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMedicalAppointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalModalAppointmentPageRoutingModule {}
