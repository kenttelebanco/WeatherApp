import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  public weatherData: any;
  public weather: any;
  public weatherid: any;
  today: number = Date.now();

  constructor(private formBuilder: FormBuilder,  private apixuService: ApixuService) {
    setInterval(() => {this.today = Date.now()}, 1);
   }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues: any) {
    this.apixuService
      .getWeather(formValues.location)
      .subscribe(data => this.weatherData = data)
      console.log(this.weatherData)
      this.weatherid = 0
      this.weather = this.weatherData?.weather[0].main
  }

}
