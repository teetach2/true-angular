import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLogComponent } from './login-log/login-log.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterLogComponent } from './register-log/register-log.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'loginLog',
    component: LoginLogComponent,
  },
  {
    path: 'registerlog',
    component: RegisterLogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
