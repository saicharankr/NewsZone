import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiaExpressPageRoutingModule } from './india-express-routing.module';

import { IndiaExpressPage } from './india-express.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiaExpressPageRoutingModule
  ],
  declarations: [IndiaExpressPage]
})
export class IndiaExpressPageModule {}
