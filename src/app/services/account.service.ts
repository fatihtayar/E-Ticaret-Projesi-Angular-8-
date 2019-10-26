import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }

  isLoggedIn:boolean = false;

  login (user:User):boolean{    
    if(user.userName=="fatih"&&user.password=="1"){      
      this.isLoggedIn=true;
      localStorage.setItem("isLoggedIn",user.userName);
      return true;
    }
    else{
      return false;
    }
  }

  isLoginIn ():boolean {
    return this.isLoggedIn;
  }

  logOut(){
    this.isLoggedIn=false;
    localStorage.removeItem("isLoggedIn");
  }

}
