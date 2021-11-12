import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'members',
        loadChildren: () => import('../members/members.module').then( m => m.MembersPageModule)
      },
      {
        path: '',
        redirectTo: '/members',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/members',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
