import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/_services/login-register-services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder , private registerservice:RegisterService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
      city: ['', Validators.required],
      contact: ['', Validators.required],
    });

  }
  register() {
    this.registerservice.register(this.registerForm.value).subscribe(data=>{
      console.log(data);
    })

  }
}
