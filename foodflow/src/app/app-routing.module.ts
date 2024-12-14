import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
const routes: Routes = [
  { path: 'sign-up-page', component: SignUpPageComponent }, // About page
  { path: '', component: LandingPageComponent },  // Default route to AppComponent
  { path: 'login-page', component: LoginPageComponent},
  { path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

