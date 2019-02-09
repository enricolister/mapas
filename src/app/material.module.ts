import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ANGULAR MATERIAL
import { MatSnackBarModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
  ],
})
export class MaterialModule { }
