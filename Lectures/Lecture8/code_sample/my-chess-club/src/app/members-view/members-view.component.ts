import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'app-members-view',
  templateUrl: './members-view.component.html',
  styleUrls: ['./members-view.component.scss']
})
export class MembersViewComponent implements OnInit {
  membersForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService
  ) {
    this.membersForm = this.formBuilder.group({
      fullname: [''],
      birthday: [''],
      ranking: [''],
      gender: [''],
      email: ['']
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      data => {
        const member_id = data.get('member_id');

        this.memberService.getMemberById(member_id).subscribe(
          response => {
            console.log(response);
            this.membersForm.patchValue(response);
          },
          error => {
            console.error(error);
          }
        )
      }
    );
  }

}
