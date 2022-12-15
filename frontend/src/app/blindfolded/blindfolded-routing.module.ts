import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../core/guards/auth-guard.service';
import { LoginComponent } from '../login/components/login/login.component';
import { RegisterComponent } from '../register/components/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'register',
    canActivate: [AuthGuardService],
    component: RegisterComponent
  },
  {
    path:'**',
    redirectTo: '/register',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BlindfoldedRoutingModule { }
