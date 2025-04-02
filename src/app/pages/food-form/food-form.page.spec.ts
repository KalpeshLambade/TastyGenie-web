import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodFormPage } from './food-form.page';

describe('FoodFormPage', () => {
  let component: FoodFormPage;
  let fixture: ComponentFixture<FoodFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
