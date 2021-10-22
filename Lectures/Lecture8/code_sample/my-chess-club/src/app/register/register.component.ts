import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  addUser(userData: any) {
    this.authService.addUser(userData).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error(error);
      }
    );
  }

}
