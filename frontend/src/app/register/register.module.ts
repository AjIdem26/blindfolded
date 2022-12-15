import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    TranslateModule,
    MatInputModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatIconModule,
    FontAwesomeModule,
    HttpClientModule,
    NotifierModule,
  ],
})
export class RegisterModule { }
