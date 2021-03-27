import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiatodayPage } from './indiatoday.page';

const routes: Routes = [
  {
    path: '',
    component: IndiatodayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndiatodayPageRoutingModule {}
