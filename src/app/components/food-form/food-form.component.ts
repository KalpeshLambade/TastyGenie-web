import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formData} from 'src/app/models/foodList';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss'],
  standalone: false
})
export class FoodFormComponent  implements OnInit {
  @Output() foodFormData = new EventEmitter<formData>();
  @Output() isFormLoader = new EventEmitter<boolean>();   
  foodForm!:FormGroup;

  constructor(
    private fb:FormBuilder,
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

  async submitForm(){
    if(this.foodForm.valid){
      this.isFormLoader.emit(true);
      let foodFormData = {
        ingredients : this.foodForm.get('ingredients')?.value,
        appliances : this.foodForm.get('appliances')?.value,
        preferences : this.foodForm.get('preferences')?.value,
        cuisine : this.foodForm.get('cuisine')?.value
      }
      this.foodFormData.emit(foodFormData);
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
