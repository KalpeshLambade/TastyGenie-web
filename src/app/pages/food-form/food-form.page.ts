import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formData, Recipe } from 'src/app/models/foodList';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-form-page',
  templateUrl: './food-form.page.html',
  styleUrls: ['./food-form.page.scss'],
  standalone: false,
})
export class FoodFormPage implements OnInit {
  isLoader: boolean = false;
  isForm: boolean = true;
  isList: boolean = false;
  recipeList!: Record<string, Recipe>;

  previousFormData!:formData;

  constructor(
    private foodService: FoodService,
    private router: Router
  ) {}

  ngOnInit() {}

  async getFoodList(event: formData) {
    let listResponse = await this.foodService.suggestFoodItems(event);
    if (listResponse) {
      this.recipeList = listResponse;
      this.previousFormData = event
      this.isLoader = false;
      this.isForm = false;
      this.isList = true;
    }else{
      this.isLoader = false;
      this.isForm = true;
      this.isList = false;
      this.router.navigate(['/error']);
    }
    
  }

  setFormLoader(event: any) {
    this.isLoader = event;
    this.isForm = false;
    this.isList = false;
  }

  async getRecipe(event: { name: string; imgUrl: string }) {
    let selectedRecipe = {
      ...this.previousFormData,
      recipeName : event?.name,
      imgUrl : event?.imgUrl
    }

    this.router.navigate(['/recipe'],{state : {recipe : selectedRecipe}})
  }
}
