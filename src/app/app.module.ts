import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewRatingComponent } from './new-rating/new-rating.component';
import { ViewRatingsComponent } from './view-ratings/view-ratings.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewRatingComponent,
    ViewRatingsComponent,
    NavigationComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
