import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { category } from 'src/app/category/category';
import { NgForm } from '@angular/forms';
import { product } from '../product';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductAddForms1Component implements OnInit {

  constructor(private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService) { }

  model: product = new product();

  categories: category[];

  getCategory() {
    this.categoryService.getCategoriesService().subscribe(data => {
      this.categories = data
    });
  }

  addProduct(model: NgForm) {
    this.productService.addProduct(model.form.value).subscribe(result => {
      this.alertifyService.success(result.name + " Ürün eklendi!")
    });
  }

  ngOnInit() {
    this.getCategory();
  }

}
