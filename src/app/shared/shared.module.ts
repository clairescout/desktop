import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatCardModule, MatProgressBarModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { TileViewComponent } from './tile-view/tile-view.component';

@NgModule({
  declarations: [TileViewComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [TileViewComponent]
})
export class SharedModule { }
