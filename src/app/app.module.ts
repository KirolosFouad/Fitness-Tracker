import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NutritionComponent,
    ExerciseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
