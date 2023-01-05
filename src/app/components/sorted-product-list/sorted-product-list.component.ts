import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {combineLatest, map, Observable, of} from "rxjs";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-sorted-product-list',
  styleUrls: ['./sorted-product-list.component.scss'],
  templateUrl: './sorted-product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortedProductListComponent {
  readonly orders: Observable<Array<string>> = of(['asc', 'desc']);
  readonly order = new FormControl();

  readonly list$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.order.valueChanges
  ]).pipe(
    map(([products, order]: [ProductModel[], string]) => {
      return products.sort((a, b) => {
        if (a.title < b.title) {
          return order === 'desc' ? 1 : -1;
        }
        if (a.title > b.title) {
          return order === 'desc' ? -1 : 1;
        }
        return 0;
      })
    })
  )

  constructor(private _productService: ProductService) {
  }
}
