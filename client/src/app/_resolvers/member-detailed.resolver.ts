import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IMember } from '../_models/member';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MembersService } from '../_services/members.service';


@Injectable({
  providedIn: 'root',
})
export class MemberDetailedResolver implements Resolve<IMember> {

  constructor(private memberService: MembersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IMember> {
    return this.memberService.getMember(route.paramMap.get('username'));
  }

}
