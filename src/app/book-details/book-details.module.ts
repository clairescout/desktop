import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatProgressBarModule, MatDialogModule, MatButtonModule, MatProgressSpinnerModule,
  MatExpansionModule } from '@angular/material';
import { ContentModalComponent } from './content-modal/content-modal.component';
import { StorageService } from '../services/storage-service.service';

@NgModule({
  declarations: [BookDetailsComponent, ContentModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
  providers: [BookDetailsComponent, ContentModalComponent, StorageService],
  entryComponents: [ContentModalComponent]
})
export class BookDetailsModule { }
