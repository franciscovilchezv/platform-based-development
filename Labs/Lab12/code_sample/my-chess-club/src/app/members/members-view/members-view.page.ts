import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/app/_services/member.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-members-view',
  templateUrl: './members-view.page.html',
  styleUrls: ['./members-view.page.scss'],
})
export class MembersViewPage implements OnInit {
  member: any;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        const member_id = data.get('member_id');

        this.memberService.getMemberById(member_id).subscribe(
          response => {
            console.log(response);
            this.member = response
          },
          error => {
            console.error(error);
          }
        )
      }
    );
  }

  getPictureUrl(picture_url) {
    if (picture_url.includes("http://") || picture_url.includes("https://")){
      return picture_url;  
    }
    return environment.apiUrl + "/" + picture_url;
  }

}
