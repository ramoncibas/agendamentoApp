import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ModalChatPage } from '../../components/Modals/modal-chat/modal-chat.page';

@Component({
  selector: 'app-sac',
  templateUrl: './sac.page.html',
  styleUrls: ['./sac.page.scss'],
})
export class SacPage implements OnInit {
  constructor(
    private actionSheetController: ActionSheetController,
    private modalControll: ModalController
  ) { }

  ngOnInit() { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Compartilhar',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'WhatsApp',
          icon: 'logo-whatsapp',
          handler: () => {
            console.log('WhatsApp clicked');
          },
        },
        {
          text: 'Facebook',
          icon: 'logo-facebook',
          handler: () => {
            console.log('Facebook clicked');
          },
        },
        {
          text: 'Instagram',
          icon: 'logo-instagram',
          handler: () => {
            console.log("Instagram clicked");
          },
        },
        {
          text: 'LinkedIn',
          icon: 'logo-linkedin',
          handler: () => {
            console.log('Linkedin clicked');
          },
        },
        {
          text: 'Email',
          icon: 'mail',
          handler: () => {
            console.log('Email clicked');
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log(role);
  }

  async presentModal(data) {
    const modal = await this.modalControll.create({
      component: ModalChatPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {
        data,
      },
    });
    return await modal.present();
  }
}
