import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registeration-form',
  templateUrl: './registeration-form.component.html',
  styleUrls: ['./registeration-form.component.css']
})
export class RegisterationFormComponent {
  constructor(private ds:DataService){}
  emailPattern = '^[a-zA-Z0-9._]+@[a-zA-z0-9.-]+\\.[a-z]{2,4}$';

  RegistrationForm = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern), this.emailDomainValidator]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });

  submi(){
    this.ds.createNewUser(this.RegistrationForm.value).subscribe(data=>{
      return alert(data);
    });    
    console.table(this.RegistrationForm.value);
  }

  get f(){
    return this.RegistrationForm.controls;
  }

  emailDomainValidator(control:FormControl){
    let email = control.value;

    if(email && email.indexOf("@")!=-1){
      let[first,domain] = email.split("@");
      if(domain!== "gmail.com"){
        return {
          emailDomain:{
            parseDomain:domain
          }
        }
      }
    }
    return null;
  }


}
