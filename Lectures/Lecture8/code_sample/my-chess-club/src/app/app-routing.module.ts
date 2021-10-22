import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MembersDeleteComponent } from './members-delete/members-delete.component';
import { MembersEditComponent } from './members-edit/members-edit.component';
import { MembersNewComponent } from './members-new/members-new.component';
import { MembersTableComponent } from './members-table/members-table.component';
import { MembersViewComponent } from './members-view/members-view.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'members', component: MembersTableComponent, canActivate: [AuthGuard] },
  { path: 'members/new', component: MembersNewComponent, canActivate: [AuthGuard] },
  { path: 'members/delete/:member_id', component: MembersDeleteComponent, canActivate: [AuthGuard] },
  { path: 'members/edit/:member_id', component: MembersEditComponent, canActivate: [AuthGuard] },
  { path: 'members/view/:member_id', component: MembersViewComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
