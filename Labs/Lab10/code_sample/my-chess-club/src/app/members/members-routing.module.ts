import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersPage } from './members.page';

const routes: Routes = [
  {
    path: '',
    component: MembersPage
  },
  {
    path: 'view/:member_id',
    loadChildren: () => import('./members-view/members-view.module').then( m => m.MembersViewPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./members-create/members-create.module').then( m => m.MembersCreatePageModule)
  },
  {
    path: 'edit/:member_id',
    loadChildren: () => import('./members-edit/members-edit.module').then( m => m.MembersEditPageModule)
  },
  {
    path: 'delete/:member_id',
    loadChildren: () => import('./members-delete/members-delete.module').then( m => m.MembersDeletePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersPageRoutingModule {}
