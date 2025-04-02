import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodFormPageRoutingModule } from './food-form-routing.module';

import { FoodFormPage } from './food-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodFormPageRoutingModule
  ],
  declarations: [FoodFormPage]
})
export class FoodFormPageModule {}
