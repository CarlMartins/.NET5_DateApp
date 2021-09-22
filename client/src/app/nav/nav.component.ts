import { IUser } from './../_models/user';
import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe(
      (res) => {
        this.router.navigateByUrl('/members');
      },
      (err) => console.log(err)
    );
  }

  logOut() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
