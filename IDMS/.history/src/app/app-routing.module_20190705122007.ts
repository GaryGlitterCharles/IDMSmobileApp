import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'dash-board', loadChildren: './dash-board/dash-board.module#DashBoardPageModule' },
  { path: 'new-request', loadChildren: './new-request/new-request.module#NewRequestPageModule' },
  { path: 'my-pending-approval', loadChildren: './my-pending-approval/my-pending-approval.module#MyPendingApprovalPageModule' },
  { path: 'my-request-history', loadChildren: './my-request-history/my-request-history.module#MyRequestHistoryPageModule' },
  { path: 'my-request-approved', loadChildren: './my-request-approved/my-request-approved.module#MyRequestApprovedPageModule' },
  { path: 'self-service', loadChildren: './self-service/self-service.module#SelfServicePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
