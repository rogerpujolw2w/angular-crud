import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule
  ],
  exports: [MatSidenavModule, MatToolbarModule, FlexLayoutModule, MatIconModule, MatCardModule, MatFormFieldModule]
})
export class MaterialModule { }
