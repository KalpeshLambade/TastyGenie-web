import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonInput, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss'],
  standalone: false
})
export class FoodFormComponent  implements OnInit {
  foodForm!:FormGroup;

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.initReactiveForm();
  }

  initReactiveForm(){
    this.foodForm = this.fb.group({
      ingredients : [null,Validators.required],
      appliances : [null],
      preferences : [null],
      cuisine : [null]
    })
  }

  submitForm(){
    if(this.foodForm.valid){
      console.log(this.foodForm.value)
    }
  }

  appliancesText(transcript:string){
    if(transcript?.length){
      const currentValue = this.foodForm.get('appliances')?.value || '';
      this.foodForm.get('appliances')?.setValue(
        currentValue + (currentValue ? ' ' : '') + transcript
      );
    }
  }

  preferencesText(transcript:string){
    if(transcript?.length){
      const currentValue = this.foodForm.get('preferences')?.value || '';
      this.foodForm.get('preferences')?.setValue(
        currentValue + (currentValue ? ' ' : '') + transcript
      );
    }
  }

  cuisineText(transcript:string){
    if(transcript?.length){
      const currentValue = this.foodForm.get('cuisine')?.value || '';
      this.foodForm.get('cuisine')?.setValue(
        currentValue + (currentValue ? ' ' : '') + transcript
      );
    }
  }

  ingredientText(transcript:string){
    if(transcript?.length){
      const currentValue = this.foodForm.get('ingredients')?.value || '';
      this.foodForm.get('ingredients')?.setValue(
        currentValue + (currentValue ? ' ' : '') + transcript
      );
    }
  }

}
