import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { category } from 'src/app/category/category';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { product } from '../product';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers: [FormBuilder,CategoryService,ProductService,AlertifyService]
})
export class ProductAddForms2Component implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private categoryService: CategoryService,
              private productService: ProductService,
              private alertifyService:AlertifyService) { }

  productAddForm: FormGroup;

  categories: category[];
  product: product = new product();

  getCategory() {
    this.categoryService.getCategoriesService().subscribe(data => {
      this.categories = data
    });
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required],
    })
  }

  addProduct() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value);

      this.productService.addProduct(this.product).subscribe(result => {
        this.alertifyService.success(result.name + " Ürün eklendi!")
      });
    }
  }

  ngOnInit() {
    this.getCategory();
    this.createProductAddForm();
  }

}
