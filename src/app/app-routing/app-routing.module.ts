import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { NewRatingComponent } from '../new-rating/new-rating.component';
import { ViewRatingsComponent } from '../view-ratings/view-ratings.component';
import { InsertRatingComponent } from '../insert-rating/insert-rating.component';


const routes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'new-rating', component: InsertRatingComponent },
  { path: 'view-ratings', component: ViewRatingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
