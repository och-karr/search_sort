import { NgModule } from '@angular/core';
import { MultiSortedJobListComponent } from './multi-sorted-job-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [MultiSortedJobListComponent],
  providers: [],
  exports: [MultiSortedJobListComponent]
})
export class MultiSortedJobListComponentModule {
}
