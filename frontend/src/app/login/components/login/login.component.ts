import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faFacebook, faGoogle, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { UserLoginFormInterface } from '../../interface/user.interface';


@Component({
  selector: 'bf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /** Contains icons we can login over. */
  public loginIcons: IconDefinition[] = [faFacebook, faGoogle, faTwitter];
  /** Login form for the component. */
  public loginForm!: FormGroup;
  constructor() {
   }

  ngOnInit(): void {
    this.setDefaultLoginForm();
  }
  /** Sets default value for login form. */
  public setDefaultLoginForm() {
    this.loginForm = new FormGroup<UserLoginFormInterface>({
      username: new FormControl(null, Validators.required),
      password: new FormControl('', Validators.required),
    })
  }
  /** Saves the configuration, and attempts to make login VIA REST. */
  public onLogin() {
    console.log(this.loginForm.getRawValue());
  }
}
