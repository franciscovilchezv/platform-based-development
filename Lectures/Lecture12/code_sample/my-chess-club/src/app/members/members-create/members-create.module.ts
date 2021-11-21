import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembersCreatePageRoutingModule } from './members-create-routing.module';

import { MembersCreatePage } from './members-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembersCreatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MembersCreatePage]
})
export class MembersCreatePageModule {}
