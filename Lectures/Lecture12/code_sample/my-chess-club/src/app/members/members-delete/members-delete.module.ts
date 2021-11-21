import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembersDeletePageRoutingModule } from './members-delete-routing.module';

import { MembersDeletePage } from './members-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembersDeletePageRoutingModule
  ],
  declarations: [MembersDeletePage]
})
export class MembersDeletePageModule {}
