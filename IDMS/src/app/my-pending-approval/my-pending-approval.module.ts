import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyPendingApprovalPage } from './my-pending-approval.page';

const routes: Routes = [
  {
    path: '',
    component: MyPendingApprovalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyPendingApprovalPage]
})
export class MyPendingApprovalPageModule {}
