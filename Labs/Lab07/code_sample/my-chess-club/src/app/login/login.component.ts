import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
  }

  makeLogin(loginData: any) {
    this.authService.login(loginData).subscribe(
      response => {
        console.log(response);
        if(response) {
          this.router.navigate(['/members']);
        }
        else{
          alert("Usuario Incorrecto");
        }
        
      },
      error => {
        console.error(error);
      }
    );
  }

}
