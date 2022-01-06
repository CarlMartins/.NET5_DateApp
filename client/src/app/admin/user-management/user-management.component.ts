import { Component, OnInit } from '@angular/core';
import { IUser } from '../../_models/user';
import { AdminService } from '../../_services/admin.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { RolesModalComponent } from '../../modals/roles-modal/roles-modal.component';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  users: Partial<IUser[]>;
  bsModalRef: BsModalRef;

  constructor(
    private adminService: AdminService,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    this.getUserWithRoles();
  }

  getUserWithRoles() {
    this.adminService.getUserWithRoles().subscribe(users => {
      this.users = users;
    });
  }

  openRolesModal() {
    const initialState = {
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...',
        ],
        title: 'Modal with component',
      },
    };
    this.bsModalRef = this.modalService.show(RolesModalComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}