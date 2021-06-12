import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-services',
  templateUrl: './health-services.page.html',
  styleUrls: ['./health-services.page.scss'],
})
export class HealthServicesPage implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  backButton() {
    this.location.back()
  }

}
