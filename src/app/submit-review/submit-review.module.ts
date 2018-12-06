import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitReviewComponent } from './submit-review.component';
import { MatCardModule, MatSliderModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,
  MatGridListModule, MatMenuModule} from '@angular/material';
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
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [StorageService]
})
export class SubmitReviewModule { }
