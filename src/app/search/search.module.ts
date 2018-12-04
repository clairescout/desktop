import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MatCardModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatProgressBarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { StorageService } from '../services/storage-service.service';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule
  ],
  providers: [StorageService]
})
export class SearchModule { }
