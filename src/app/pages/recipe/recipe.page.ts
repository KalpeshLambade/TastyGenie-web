import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeDetail } from 'src/app/models/foodList';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
  standalone:false
})
export class RecipePage implements OnInit {
  recipeInfo:any;
  isLoader:boolean= true

  recipe!:RecipeDetail

  constructor(
    private router:Router,
    private foodService:FoodService
  ) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.recipeInfo = navigation?.extras?.state?.['recipe'] || null;
    this.getRecipeDetails();
  }

  async getRecipeDetails(){
    let recipeResponse = await this.foodService.getRecipeDetails(this.recipeInfo);
    if(recipeResponse !== null){
      this.recipe = recipeResponse
    }
    this.isLoader = false;
  }

}
