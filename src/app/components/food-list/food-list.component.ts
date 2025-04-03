import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/foodList';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
  standalone: false
})
export class FoodListComponent  implements OnInit {
  @Input() foodFormList!: Record<string, Recipe>;

  constructor() { }

  ngOnInit() {}


}
