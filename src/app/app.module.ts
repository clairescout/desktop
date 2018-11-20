import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BookDetailsModule } from './book-details/book-details.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SearchModule } from './search/search.module';
import { SubmitReviewModule } from './submit-review/submit-review.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BookDetailsModule,
    DashboardModule,
    SearchModule,
    SubmitReviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
