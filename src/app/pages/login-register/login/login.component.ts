import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup = new FormGroup({});
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['',Validators.required],
      password: ['',Validators.required],
    });
  }

  login(){

  }

}
