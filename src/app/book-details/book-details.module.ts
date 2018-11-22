import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  declarations: [BookDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [BookDetailsComponent],
})
export class BookDetailsModule { }
