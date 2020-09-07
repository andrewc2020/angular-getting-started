import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { NgxBarcodeModule } from 'ngx-barcode';


@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule,
    NgxBarcodeModule
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    NgxBarcodeModule

  ]
})
export class SharedModule { }
