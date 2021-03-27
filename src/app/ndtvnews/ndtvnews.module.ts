import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NdtvnewsPageRoutingModule } from './ndtvnews-routing.module';

import { NdtvnewsPage } from './ndtvnews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NdtvnewsPageRoutingModule
  ],
  declarations: [NdtvnewsPage]
})
export class NdtvnewsPageModule {}
