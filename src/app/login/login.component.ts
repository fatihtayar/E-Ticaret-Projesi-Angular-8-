import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { AccountService } from '../services/account.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  model: User = new User();

  login(model:NgForm) {
    this.accountService.login(model.form.value);
  }

  ngOnInit() {
  }

}
