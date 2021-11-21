import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembersViewPageRoutingModule } from './members-view-routing.module';

import { MembersViewPage } from './members-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembersViewPageRoutingModule
  ],
  declarations: [MembersViewPage]
})
export class MembersViewPageModule {}
