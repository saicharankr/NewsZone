import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NdtvnewsPage } from './ndtvnews.page';

const routes: Routes = [
  {
    path: '',
    component: NdtvnewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NdtvnewsPageRoutingModule {}
