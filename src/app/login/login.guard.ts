import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountService } from '../services/account.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private accounService: AccountService,
                private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let logged:boolean = this.accounService.isLoggedIn;
        if (logged==true) {
            return true;
        }
        else{
            this.router.navigate(["login"]);
            return false;
        }
    }
}