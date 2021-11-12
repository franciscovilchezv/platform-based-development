import { Component, OnInit } from '@angular/core';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
  members: any;

  constructor(
    private memberService: MemberService
  ) { }
  

  ngOnInit(): void {
    
  }

  ionViewWillEnter(): void {
    this.memberService.getMembers().subscribe(data => {
      this.members = data;
    })
  }

}
