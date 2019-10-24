import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor
    (private alertifyService: AlertifyService,
      private productService: ProductService,
      private activatedRoute: ActivatedRoute) { }
  title: string = "Ürün Listesi";
  filterText: string = "";
  products: product[];

  getCategory() {
    this.activatedRoute.params.subscribe(data => {
      this.getProducts(data["categoryId"]);
    })
  }

  getProducts(categoryId) {
    this.productService.getProductsService(categoryId).subscribe(data => {
      this.products = data;
      console.log("gelenn,",this.products)
    })
  }

  ngOnInit() {
    this.getCategory();
  }

  addToCard(product) {
    this.alertifyService.success(product.description + " sepete eklendi!");
  }

}
