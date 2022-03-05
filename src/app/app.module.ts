import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { allAppRoutes } from './route';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from './apixu.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherSearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ApixuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
