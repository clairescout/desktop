import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatProgressBarModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { ContentModalComponent } from './content-modal/content-modal.component';

@NgModule({
  declarations: [BookDetailsComponent, ContentModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [BookDetailsComponent, ContentModalComponent],
  entryComponents: [ContentModalComponent]
})
export class BookDetailsModule { }
