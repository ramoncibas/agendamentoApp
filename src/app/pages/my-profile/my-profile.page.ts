import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  public userProfile: User = {};
  
  constructor(private authServices: AuthService, private navgation: NavController) { }

  ngOnInit() {}

  async logout() {
    try {
      await this.authServices.logout();
      this.navgation.navigateForward("/login")
    } catch (err) {
      console.log(err)
    }
  }
}
