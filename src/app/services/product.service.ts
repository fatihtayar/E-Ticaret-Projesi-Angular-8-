import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Type } from '@angular/compiler';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  path = "http://localhost:3000/products";

  getProductsService(categoryId): Observable<product[]> {

    let newPath = this.path;
    if (categoryId) {
      newPath = this.path + "?categoryId=" + categoryId;
    }
    console.log("newPath", newPath);
    return this.httpClient.get<product[]>(newPath).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError))
  }

  addProduct (product:product): Observable<product> {
    console.log("gelen ürün",product)
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'token'
      })       
    }
    return this.httpClient.post<product>(this.path,product,httpOptions).pipe(
      tap(data => console.log("Eklenen ürün",data)),
      catchError(this.handleError))
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = ""
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu" + err.error.message
    }
    else {
      errorMessage = "Server bağlantısı sağlanamadı."
    }
    return throwError(errorMessage);
  }
}
