import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FourDigitCodeComponent } from './four-digit-code/four-digit-code.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent },  // Default route to AppComponent
  { path: 'login-page', component: LoginPageComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'four-digit-code', component: FourDigitCodeComponent},
  {
    path: 'sign-up-page',
    loadComponent: () =>
      import('./sign-up-page/sign-up-page.component').then(
        (m) => m.SignUpPageComponent
      ),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

