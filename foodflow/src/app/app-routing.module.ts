import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FourDigitCodeComponent } from './four-digit-code/four-digit-code.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent },  // Default route to AppComponent
  { path: 'login-page', component: LoginPageComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'four-digit-code', component: FourDigitCodeComponent},
  {path:'sign-up-page', component: SignUpPageComponent},
  { path: '**', redirectTo: ''} // wildcard route
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

