import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ListItemsComponent } from 'src/app/components/ListItems/list-items.component';

@Component({
  selector: 'app-pills',
  templateUrl: './pills.page.html',
  styleUrls: ['./pills.page.scss'],
})

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    BrowserModule
  ],
  declarations: [ListItemsComponent]
})
export class PillsPage implements OnInit {

  private pills = [];
  constructor() { }

  ngOnInit() {}

}
