import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersCreatePage } from './members-create.page';

const routes: Routes = [
  {
    path: '',
    component: MembersCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersCreatePageRoutingModule {}
