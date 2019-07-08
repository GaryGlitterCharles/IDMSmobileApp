import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.page.html',
  styleUrls: ['./dash-board.page.scss'],
})
export class DashBoardPage implements OnInit {

// tslint:disable-next-line: no-trailing-whitespace
  constructor(public menuCtrl: MenuController) { 
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
  }

}
