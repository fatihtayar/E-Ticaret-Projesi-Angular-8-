import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { category } from '../category/category';
import { Observable, throwError } from 'rxjs';
import { tap ,catchError } from 'rxjs/operators';

@Injectable()
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  path="http://localhost:3000/categories";

  getCategoriesService():Observable<category[]> {
    return this.httpClient.get<category[]>(this.path).pipe(
    tap(data=>console.log(data)),
    catchError(this.handleError))
   }
  handleError(err: HttpErrorResponse) {
    let errorMessage=""
    if(err.error instanceof ErrorEvent){
      errorMessage="Bir hata oluştu" + err.error.message
    }
    else {
      errorMessage="Sistemsel bir hata oluştu."
    }
    return throwError(errorMessage);
  }
}
