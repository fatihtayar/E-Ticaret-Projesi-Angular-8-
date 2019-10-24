import { Component, OnInit } from '@angular/core';
import { category } from './category';
import { CategoryService } from '../services/category.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }

  categories:category[];

  getCategories() {
    this.categoryService.getCategoriesService().subscribe(data=>{
      this.categories=data
    })
  }
  ngOnInit() {
    this.getCategories ();
  }

}
