import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'sign-up-page', component: SignUpPageComponent }, // About page
  { path: '', component: LandingPageComponent },  // Default route to AppComponent
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

