import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location: string){
      return this.http.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=452c8adab25018bee9e4c70c111f390d`
      );
  }
}
