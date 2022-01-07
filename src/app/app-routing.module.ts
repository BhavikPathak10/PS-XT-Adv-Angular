import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './features/banner/banner.component';
import { DynamicDivsComponent } from './features/dynamic-divs/dynamic-divs.component';
import { ECommerceComponent } from './features/e-commerce/e-commerce.component';
import { TableSortersComponent } from './features/table-sorters/table-sorters.component';

const routes: Routes = [
  {
    path: 'banner',
    component: BannerComponent,
  },
  {
    path: 'e-commerce',
    component: ECommerceComponent,
  },
  {
    path:'timer',
    loadChildren:() => import('./features/timer/timer.module').then(m => m.TimerModule)
  },
  {
    path: 'table-sorters',
    component: TableSortersComponent,
  },
  {
    path: 'dynamic-divs',
    component: DynamicDivsComponent,
  },
  { path: '',   redirectTo: '/banner', pathMatch: 'full' },
  { path: '**', redirectTo: '/banner' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
