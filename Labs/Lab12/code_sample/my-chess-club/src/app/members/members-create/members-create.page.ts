import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/_services/member.service';
import { PhotoService } from 'src/app/_services/photo.service';
import { LocalNotifications } from '@capacitor/local-notifications';

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
    private router: Router,
    private photoService: PhotoService
  ) {
    this.membersForm = this.formBuilder.group({
      fullname: [''],
      birthday: [''],
      ranking: [''],
      gender: [''],
      email: [''],
      picture_url: ['']
    });
  }

  ngOnInit() {
  }

  addChessMember(values: any){
    this.memberService.insertMember(values).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/members']);

        LocalNotifications.schedule({
          notifications: [
            {
              id: new Date().getTime(),
              title: "New member",
              body: `${values.fullname} is a new member. Don't forget to welcome him`,
              schedule: {
                at: new Date(new Date().getTime() + 10000)
              }
            }
          ]
        })

      },
      error => {
        console.error(error);
      }
    );
  }

  async openCamera() {
    const picture_data = await this.photoService.takePicture();
    
    this.membersForm.patchValue(picture_data);
  }
}
