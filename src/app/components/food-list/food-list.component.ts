import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
  standalone: false
})
export class FoodListComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  recipes = [
    {
      name: 'Chicken Curry',
      cuisine: 'Indian',
      time: 45,
      image: 'https://storage.googleapis.com/a1aa/image/QMacNG_Hqn4Bsjwn2Hc2cEUp0qb11hIuH4TeHI_-aj8.jpg',
    },
    {
      name: 'Fried Rice',
      cuisine: 'Chinese',
      time: 25,
      image: 'https://storage.googleapis.com/a1aa/image/tyYPcGAIzT_wFw6OhOteRJq-UYlVT9dM9MAw4ZOqnG0.jpg',
    },
    {
      name: 'Vegetable Stir Fry',
      cuisine: 'Chinese',
      time: 20,
      image: 'https://storage.googleapis.com/a1aa/image/jCAkU8tnhMHz_9dZ_eoaZFfInfUNZI1Z3OYxt4hpnPg.jpg',
    },
    {
      name: 'Chana Masala',
      cuisine: 'Indian',
      time: 40,
      image: 'https://storage.googleapis.com/a1aa/image/eqYNSXuVjPlP0DBRNV0WHIiT8wdgStDjTXNrn9lJdWI.jpg',
    },
  ];

  filteredRecipes = this.recipes;

  onSearch(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredRecipes = this.recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(searchTerm) ||
        recipe.cuisine.toLowerCase().includes(searchTerm)
    );
  }

}
