import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyRequestApprovedPage } from './my-request-approved.page';

const routes: Routes = [
  {
    path: '',
    component: MyRequestApprovedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyRequestApprovedPage]
})
export class MyRequestApprovedPageModule {}
