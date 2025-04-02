import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodFormPageRoutingModule } from './food-form-routing.module';

import { FoodFormPage } from './food-form.page';
import { FoodFormComponent } from 'src/app/components/food-form/food-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FoodFormPage,FoodFormComponent]
})
export class FoodFormPageModule {}
