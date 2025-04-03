import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/foodList';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
  standalone: false,
})
export class FoodListComponent implements OnInit {
  @Input() foodFormList!: Record<string, Recipe>;
  @Output() selectedRecipe = new EventEmitter<{
    name: string;
    imgUrl: string;
    cuisine:string
  }>();

  constructor() {}

  ngOnInit() {}

  onRecipeSelect(name: string, imgUrl: string,cuisine:string) {
    this.selectedRecipe.emit({
      name,
      imgUrl,
      cuisine
    })
  }
}
