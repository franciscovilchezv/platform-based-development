import { Component, OnInit } from '@angular/core';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styleUrls: ['./members-table.component.scss']
})
export class MembersTableComponent implements OnInit {

  members = [
    {
      fullname: "Francisco Vilchez",
      birthday: "1991/05/26",
      email: "francisco@vilchez.com"
    },
    {
      fullname: "Zlatan Ibrahimovic",
      birthday: "1981/10/03",
      email: "zlatan@ibrahimovic.com"
    }
  ]

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit(): void {
    this.memberService.getMembers().subscribe( (data) => {
      this.members = data;
    })
  }

}
