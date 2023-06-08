import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {
  //isValid:boolean = true;
  isVisible:boolean = true;
  email1:any;
  //user = {email:'',password:''};

  user = { email: '', password: '' };
  isValid = true;

  constructor(private ds:DataService, private router:Router){}

  onSubmit(){
    console.log(this.user);
    this.ds.checkLogin(this.user).subscribe({
      next:data=>{
        if(data){
          alert("Login successfull");
          sessionStorage.setItem("user",this.user.email);
          this.router.navigate(['/quiz']);
      }},
      error:err=>{
        if(err){
          alert("Login unsucessfull");
          this.user = {email:'',password:''};
        };
      }

    })
  }



}
