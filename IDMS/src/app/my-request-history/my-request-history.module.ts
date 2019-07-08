import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyRequestHistoryPage } from './my-request-history.page';

const routes: Routes = [
  {
    path: '',
    component: MyRequestHistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyRequestHistoryPage]
})
export class MyRequestHistoryPageModule {}
