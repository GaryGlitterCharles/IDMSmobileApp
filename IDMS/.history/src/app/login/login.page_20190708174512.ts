import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

// tslint:disable-next-line: whitespace
  constructor(public menuCtrl: MenuController,private screenOrientation: ScreenOrientation) {
    this.menuCtrl.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
   }

  ngOnInit() {
  }

}
