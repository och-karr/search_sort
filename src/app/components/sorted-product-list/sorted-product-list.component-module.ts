import { NgModule } from '@angular/core';
import { SortedProductListComponent } from './sorted-product-list.component';
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    MatListModule,
    CommonModule
  ],
  declarations: [SortedProductListComponent],
  providers: [],
  exports: [SortedProductListComponent]
})
export class SortedProductListComponentModule {
}
