import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiaExpressPage } from './india-express.page';

const routes: Routes = [
  {
    path: '',
    component: IndiaExpressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndiaExpressPageRoutingModule {}
