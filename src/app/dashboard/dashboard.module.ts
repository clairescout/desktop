import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule, MatProgressBarModule, MatDialogModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { StorageService } from '../services/storage-service.service';
import { SharedModule } from '../shared/shared.module';
import { TileViewComponent } from '../shared/tile-view/tile-view.component';

@NgModule({
  declarations: [DashboardComponent],
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
  providers: [StorageService]
})
export class DashboardModule { }
