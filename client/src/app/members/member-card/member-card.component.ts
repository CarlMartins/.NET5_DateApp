import { IMember } from './../../_models/member';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
})
export class MemberCardComponent implements OnInit {
  @Input() member: IMember;

  constructor(private memberService: MembersService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  addLike(member: IMember) {
    this.memberService.addLike(member.username).subscribe(() => {
      this.toastr.success('You have liked ' + member.knownAs);
    })
  }
}
