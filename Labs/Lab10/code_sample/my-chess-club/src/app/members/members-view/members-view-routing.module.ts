import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersViewPage } from './members-view.page';

const routes: Routes = [
  {
    path: '',
    component: MembersViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersViewPageRoutingModule {}
