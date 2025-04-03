import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExpressService {
  constructor(private http: HttpClient) {}

  suggestFoodItems(params: {
    ingredients: string;
    cuisine: string;
    appliances: string;
    preferences: string;
  }):Promise<any> {
    return new Promise((resolve, reject) => {
      let url = environment.serverUrl + '/v1/suggestFoodItems';
      this.http
        .post(url, {
          ingredients: params?.ingredients,
          cuisine: params?.cuisine,
          appliances: params?.appliances,
          preferences: params?.appliances,
        })
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (err) => {
            resolve(null);
          },
        });
    });
  }
}
