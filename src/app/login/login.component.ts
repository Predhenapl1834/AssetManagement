import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: Login = new Login();
  isSubmitted = false;
  logins: Observable<Login[]>;

  
  constructor(private service: AuthService, private router: Router,
    private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  loginUser() {
    console.log(this.loginForm.value);
    
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      this.toastr.error('Enter username and password');
      return;
    }
    this.service.Login(this.loginForm.value).subscribe(element=> {
      if(element!=null){


        if (element["usertype"] == 'Admin') {
         
          localStorage.setItem('ACCESS_TOKEN', element["username"]);
          this.router.navigateByUrl('/admin');
          this.toastr.success('Welcome Admin', 'Login Successful');
        }
        else if (element["usertype"] == 'User') {
          this.router.navigateByUrl('/user');
          this.toastr.success('Welcome Purchase Manager', 'Login Successful');
        }
      }
      else{
        this.toastr.warning('enter valid username and password');
      }
      });

    
    
  }


}
