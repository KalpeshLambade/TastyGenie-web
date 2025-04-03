import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PancakeLoaderComponent } from '../components/pancake-loader/pancake-loader.component';



@NgModule({
  declarations: [PancakeLoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [PancakeLoaderComponent]
})
export class SharedModule { }
