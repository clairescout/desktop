import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BookDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [BookDetailsComponent],
})
export class BookDetailsModule { }
