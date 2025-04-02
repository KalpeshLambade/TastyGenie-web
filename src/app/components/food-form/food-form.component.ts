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

}
