import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SearchComponent } from './search/search.component';
import { SubmitReviewComponent } from './submit-review/submit-review.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  },
  {
    path: 'book-details',
    component: BookDetailsComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'submit-review',
    component: SubmitReviewComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'about-us',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
