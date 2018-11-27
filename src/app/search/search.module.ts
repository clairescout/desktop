import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { StorageService } from '../services/storage-service.service';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule
  ],
  providers: [StorageService]
})
export class SearchModule { }
