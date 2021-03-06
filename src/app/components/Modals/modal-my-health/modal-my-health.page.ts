import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-my-health',
  templateUrl: './modal-my-health.page.html',
  styleUrls: ['./modal-my-health.page.scss'],
})
export class ModalMyHealthPage implements OnInit {
  // Fake data  
  @Input() data: any;
  @Input() type: any;

  constructor(private modalControll: ModalController) { }

  ngOnInit() {
    console.log(this.data)
  }
  
  async closeModal() {
    await this.modalControll.dismiss();
  }
 
  async shareItem(data) {
    console.log(data);
  }

  async deleteItem(data) {
    console.log(data);
  }

  async cleanHistory(data) {
    console.log(data);
  }
}
