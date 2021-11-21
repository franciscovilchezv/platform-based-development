import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-members-create',
  templateUrl: './members-create.page.html',
  styleUrls: ['./members-create.page.scss'],
})
export class MembersCreatePage implements OnInit {
  membersForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private memberService: MemberService,
    private router: Router
  ) {
    this.membersForm = this.formBuilder.group({
      fullname: [''],
      birthday: [''],
      ranking: [''],
      gender: [''],
      email: ['']
    });
  }

  ngOnInit() {
  }

  addChessMember(values: any){
    this.memberService.insertMember(values).subscribe(
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
