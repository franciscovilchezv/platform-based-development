import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembersEditPageRoutingModule } from './members-edit-routing.module';

import { MembersEditPage } from './members-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembersEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MembersEditPage]
})
export class MembersEditPageModule {}
