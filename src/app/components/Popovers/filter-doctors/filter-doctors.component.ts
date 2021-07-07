import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { Specialty, Value } from './filter-list';

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
  public dataPrice = Value;
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
    console.log(data);
    this.specialty = data;
  }

  // Select the assessments of doctor
  changeAssessment(event) {
    let data = event.target.value;
    console.log(data)
    this.assessment = data;
  }

  // Select the price of appointment
  changePrice(event) {
    let data = event.target.value;
    if (data.length <= 1) {
      console.log(data)
      this.price = data;
    } else if(data.length > 1) {
      console.log(data)
      this.price = [`${data[0]} a ${data[1]}`];
    }    
  }
}
