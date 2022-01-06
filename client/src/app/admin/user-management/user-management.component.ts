import { Component, OnInit } from '@angular/core';
import { IUser } from '../../_models/user';
import { AdminService } from '../../_services/admin.service';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  users: Partial<IUser[]>

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getUserWithRoles();
  }

  getUserWithRoles() {
    this.adminService.getUserWithRoles().subscribe(users => {
      this.users = users;
    });
  }

}
