import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodFormPageRoutingModule } from './food-form-routing.module';

import { FoodFormPage } from './food-form.page';
import { FoodFormComponent } from 'src/app/components/food-form/food-form.component';
import { SpeechToTextComponent } from 'src/app/components/speech-to-text/speech-to-text.component';
import { FoodListComponent } from 'src/app/components/food-list/food-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FoodFormPage,FoodFormComponent,SpeechToTextComponent,FoodListComponent]
})
export class FoodFormPageModule {}
