import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'app-members-edit',
  templateUrl: './members-edit.component.html',
  styleUrls: ['./members-edit.component.scss']
})
export class MembersEditComponent implements OnInit {
  membersForm: FormGroup;
  member: any;
  member_id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.membersForm = this.formBuilder.group({
      id: [''],
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
        this.member_id = data.get('member_id');

        this.memberService.getMemberById(this.member_id).subscribe(
          response => {
            console.log(response);
            this.member = response
            this.membersForm.patchValue(response);
          },
          error => {
            console.error(error);
          }
        )
      }
    );
  }

  saveChessMember(member: any) {
    this.memberService.updateMember(this.member_id, member).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/members']);
      },
      error => {
        console.error(error);
      }
    );
  }

}
