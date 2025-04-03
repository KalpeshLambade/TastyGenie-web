import { Injectable } from '@angular/core';
import { ExpressService } from './express.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private expressService:ExpressService
  ) { }

  async suggestFoodItems(params: {
    ingredients: string;
    cuisine: string;
    appliances: string;
    preferences: string;
  }){
    let response = await this.expressService.suggestFoodItems(params);

    if(response?.status == 'success'){
      return response?.formattedResponse
    }
    return null
  }
}
