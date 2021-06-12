import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PillsPageRoutingModule } from './pills-routing.module';

import { PillsPage } from './pills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PillsPageRoutingModule
  ],
  declarations: [PillsPage]
})
export class PillsPageModule {}
