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
  loginForm:FormGroup;
  isSubmitted = false;
  login:Login=new Login();
  logins: Observable <Login[]>;
  
  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,private toastr:ToastrService) { }

  ngOnInit() {

    this.logins=this.authService.getLoginDet();
    this.loginForm=this.formBuilder.group({
      username: ['',Validators.compose([Validators.required])],
      password:['',[Validators.required]]
  });
}

get formControls()
{
  return this.loginForm.controls;
}
loginUser()
{
  this.login.username=this.loginForm.controls.username.value;
  this.login.password=this.loginForm.controls.password.value;
  console.log(this.loginForm.value);
  this.isSubmitted=true;
  if(this.loginForm.invalid)
  {
    this.toastr.error('enter username and password');
    return;
  }

  this.authService.Login(this.login).subscribe(x=>{
    x.forEach(element => {
     this.login.usertype=element["usertype"];
     if(this.login.usertype=='Admin')
     {
       localStorage.setItem('username',this.login.username);
       this.router.navigateByUrl('assets');
       this.toastr.success('Login Successful..!!');
     }
     else
     {
       localStorage.setItem('username',this.login.username);
       this.router.navigateByUrl('assets');

       this.toastr.success('Login Successful..!!');
     }
   },
   error=>{
   
     this.toastr.error('Invalid Username or Password');
     
   });
   console.log(this.login.usertype);  
    });
 
  
}


}
