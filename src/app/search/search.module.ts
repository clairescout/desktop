import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { StorageService } from '../services/storage-service.service';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [StorageService]
})
export class SearchModule { }
