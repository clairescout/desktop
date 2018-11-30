import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitReviewComponent } from './submit-review.component';
import { MatCardModule, MatSliderModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../services/storage-service.service';

@NgModule({
  declarations: [SubmitReviewComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSliderModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [StorageService]
})
export class SubmitReviewModule { }
