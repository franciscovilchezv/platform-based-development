import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersDeleteComponent } from './members-delete/members-delete.component';
import { MembersEditComponent } from './members-edit/members-edit.component';
import { MembersNewComponent } from './members-new/members-new.component';
import { MembersTableComponent } from './members-table/members-table.component';
import { MembersViewComponent } from './members-view/members-view.component';

const routes: Routes = [
  { path: '', component: MembersTableComponent },
  { path: 'members', component: MembersTableComponent },
  { path: 'members/new', component: MembersNewComponent },
  { path: 'members/delete/:member_id', component: MembersDeleteComponent },
  { path: 'members/edit/:member_id', component: MembersEditComponent },
  { path: 'members/view/:member_id', component: MembersViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
