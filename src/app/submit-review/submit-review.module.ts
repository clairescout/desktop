import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitReviewComponent } from './submit-review.component';
import { MatCardModule, MatSliderModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

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
  ]
})
export class SubmitReviewModule { }
