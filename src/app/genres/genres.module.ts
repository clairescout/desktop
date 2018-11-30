import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatProgressBarModule, MatDialogModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { StorageService } from '../services/storage-service.service';
import { GenresComponent } from './genres.component';
import { SharedModule } from '../shared/shared.module';
import { TileViewComponent } from '../shared/tile-view/tile-view.component';

@NgModule({
  declarations: [GenresComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  entryComponents: [TileViewComponent],
  providers: [ StorageService ]
})
export class GenresModule { }
