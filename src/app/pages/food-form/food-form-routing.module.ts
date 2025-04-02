import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodFormPage } from './food-form.page';

const routes: Routes = [
  {
    path: '',
    component: FoodFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodFormPageRoutingModule {}
