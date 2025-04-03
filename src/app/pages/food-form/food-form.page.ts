import { Component, OnInit } from '@angular/core';
import { formData, Recipe } from 'src/app/models/foodList';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-form-page',
  templateUrl: './food-form.page.html',
  styleUrls: ['./food-form.page.scss'],
  standalone: false
})
export class FoodFormPage implements OnInit {
  isLoader:boolean = false;
  isForm:boolean = true;
  isList:boolean = false;
  recipeList!:Record<string, Recipe>
  
  constructor(
    private foodService:FoodService
  ) { }

  ngOnInit() {
  }

  async getFoodList(event: formData) {
    let listResponse = await this.foodService.suggestFoodItems(event);
    if(listResponse){
      this.recipeList = listResponse
    }
    this.isLoader = false;
    this.isForm = false;
    this.isList = true
  }
  
  setFormLoader(event:any){
    this.isLoader = event;
    this.isForm = false;
    this.isList = false;
  }

}
