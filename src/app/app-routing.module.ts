import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { MultiSortedJobListComponent } from './components/multi-sorted-job-list/multi-sorted-job-list.component';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { MultiSortedJobListComponentModule } from './components/multi-sorted-job-list/multi-sorted-job-list.component-module';
import { JobServiceModule } from './services/job.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'list-2-form-sorting-single-product', component: SortedProductListComponent }, { path: 'list-2-form-sorting-multi-jobs', component: MultiSortedJobListComponent }]), SortedProductListComponentModule, ProductServiceModule, MultiSortedJobListComponentModule, JobServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
