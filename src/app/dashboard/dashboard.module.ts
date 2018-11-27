import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule, MatProgressBarModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list'

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
