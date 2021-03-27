import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [{
          path: '',
          loadChildren: () => import('./../home/home.module').then( m => m.HomePageModule)
        },
        {
          path: 'ndtvnews',
          loadChildren: () => import('./../ndtvnews/ndtvnews.module').then( m => m.NdtvnewsPageModule)
        },
        {
          path: 'indiatoday',
          loadChildren: () => import('./../indiatoday/indiatoday.module').then( m => m.IndiatodayPageModule)
        },
        {
          path: 'india-express',
          loadChildren: () => import('./../india-express/india-express.module').then( m => m.IndiaExpressPageModule)
          },
        ],
        
      },
      {
        path: 'about',
        loadChildren:() => import('./../about/about.module').then(m => m.AboutPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
