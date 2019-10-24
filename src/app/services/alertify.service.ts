import { Injectable } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
declare let alertify:any;

@Injectable()
export class AlertifyService {

  constructor() { 
    
  }

  success (Message:String){
   return alertify.success(Message);   
  }
}
