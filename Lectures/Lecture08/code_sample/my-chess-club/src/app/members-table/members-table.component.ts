import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styleUrls: ['./members-table.component.scss']
})
export class MembersTableComponent implements OnInit {
  
  members: any[] = []

  constructor(
    private memberService: MemberService,
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.memberService.getMembers().subscribe( (data) => {
      this.members = data;
    })
  }

  deleteMember(member_id: any){
    this.router.navigate(['/members/delete', member_id]);
  }

}
