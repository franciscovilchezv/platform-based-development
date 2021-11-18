import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'app-members-delete',
  templateUrl: './members-delete.component.html',
  styleUrls: ['./members-delete.component.scss']
})
export class MembersDeleteComponent implements OnInit {
  member_id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.member_id = data.get('member_id');
      }
    );
  }

  deleteMember(member_id: any) {
    this.memberService.deleteMember(member_id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/members']);
      },
      error => {
        console.error(error);
      }
    );
  }

  goBack() {
    this.router.navigate(['/members']);
  }

}
