import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersDeletePage } from './members-delete.page';

const routes: Routes = [
  {
    path: '',
    component: MembersDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersDeletePageRoutingModule {}
