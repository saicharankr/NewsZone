import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiatodayPageRoutingModule } from './indiatoday-routing.module';

import { IndiatodayPage } from './indiatoday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiatodayPageRoutingModule
  ],
  declarations: [IndiatodayPage]
})
export class IndiatodayPageModule {}
