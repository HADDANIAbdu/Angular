import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxContainerComponent } from './box-container/box-container.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UniversityComponent } from './university/university.component';

const routes: Routes = [
  {path: '', component: BoxContainerComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'University', component: UniversityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
