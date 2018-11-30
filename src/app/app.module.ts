import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageService } from './services/storage-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BookDetailsModule } from './book-details/book-details.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SearchModule } from './search/search.module';
import { SubmitReviewModule } from './submit-review/submit-review.module';
import { MatCardModule, MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AboutUsComponent } from './about-us/about-us.component';
import { GenresComponent } from './genres/genres.component';
import { GenresModule } from './genres/genres.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BookDetailsModule,
    DashboardModule,
    SearchModule,
    SubmitReviewModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    BrowserAnimationsModule,
    GenresModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
