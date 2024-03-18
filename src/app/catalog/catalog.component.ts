import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from '../services/product.service';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: IProduct[] = [];
  productsCopy: IProduct[] = [];
  filter: string = '';

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productsCopy = cloneDeep(this.products);
  }

  getImageUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product.imageName;
  }

  getFilteredProducts(filter: string): void {
    this.filter = filter;
    this.products = this.productsCopy;
    this.products = this.filter === ''
      ? this.products
      : this.products.filter((product) => product.category == filter);
  }
}
