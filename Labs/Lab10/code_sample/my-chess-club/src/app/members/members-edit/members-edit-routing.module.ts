import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersEditPage } from './members-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MembersEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersEditPageRoutingModule {}
