import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
  standalone:false
})
export class RecipePage implements OnInit {
  recipe:any;

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.recipe = navigation?.extras?.state?.['recipe'] || null;
    console.log('Received Recipe:', this.recipe);
  }

}
