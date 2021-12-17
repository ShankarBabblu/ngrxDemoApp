import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/store/app.state';
import { loginStart } from '../state/auth.actions';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  loginForm! : FormGroup
  constructor(private store:Store<appState>) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('email', [Validators.required, Validators.email]),
      password : new FormControl('password', [Validators.required])
    })
  }
  onLogin() {
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.store.dispatch(loginStart({email, password}))
    }
  }
  showErrorMessage(formName:string) {
    let formData = this.loginForm.get(formName)
    if( formData!.touched && !formData!.valid){
      if(formData?.errors?.['required']){
        return 'data is required'
      }
      if(formData?.errors?.['email']){
        return 'email should be entered correctly'
      }
      if(formData?.errors?.['minlength']){
        return 'length must be minimum 7 characters'
      }
      return;
    }
    return;
  }
}
