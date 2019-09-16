import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'reset-password', component: ResetPassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
