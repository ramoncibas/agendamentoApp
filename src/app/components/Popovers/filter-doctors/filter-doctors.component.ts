import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { Specialty, Price } from './filter-list';

@Component({
  selector: 'app-filter-doctors',
  templateUrl: './filter-doctors.component.html',
  styleUrls: ['./filter-doctors.component.scss'],
})

export class FilterDoctorsComponent implements OnInit {
  public specialty;
  public price;
  public assessment;
  public data = Specialty;
  public dataPrice = Price;
  constructor(
    private popover: PopoverController
  ) { }

  ngOnInit() {}

  closePopover() {
    this.popover.dismiss();
  }

  // Select the specialty of doctor
  changeSpecialty(event) {
    let data = event.target.value;
    this.specialty = data;
  }

  // Select the assessments of doctor
  async changeAssessment(event) {
    let data = event.target.value;
    this.assessment = data;
  }

  // Select the price of appointment
  changePrice(event) {
    let data = event.target.value;
    if (data.length <= 1) {
      this.price = data;

    } else if(data.length > 1) {
      data.length > 2 ? alert("Selecione somente dois valores!") : this.price = data;
    }
  }

  async setFilter() {
    const data = [this.specialty, this.price, this.assessment];
    console.log(data)
    // Sql query with data


    this.popover.dismiss();
  }
}
