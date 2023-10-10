import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { ViewRatingsComponent } from '../view-ratings/view-ratings.component';
import { InsertRatingComponent } from '../insert-rating/insert-rating.component';
import { AuthGuard } from '../auth.guard';
import { LoginComponent } from '../login/login.component';



const routes: Routes = [
  { path: '', component: NavigationComponent, canActivate: [AuthGuard] },
  { path: 'new-rating', component: InsertRatingComponent, canActivate: [AuthGuard] },
  { path: 'view-ratings', component: ViewRatingsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
