import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'app-members-new',
  templateUrl: './members-new.component.html',
  styleUrls: ['./members-new.component.scss']
})
export class MembersNewComponent implements OnInit {
  membersForm: FormGroup
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

  ngOnInit(): void {
    
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
