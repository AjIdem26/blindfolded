import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebook, faGoogle, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { UserLoginFormInterface } from '../../interface/user.interface';
import { LoginService } from '../../services/login.service';


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
  constructor(
    private loginService: LoginService,
    private notifierService: NotifierService,
    private translateService: TranslateService,
    private router: Router) {
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
    this.loginService.login(this.loginForm.getRawValue()).subscribe({
      next: () => {
        this.notifierService.notify('success', this.translateService.instant('login.success'));
        // TODO change this to real page
        this.router.navigate(['']);
      }, error: () => {
        this.setDefaultLoginForm();
        this.notifierService.notify('error', this.translateService.instant('login.err'));
      }
    })
  }
}
