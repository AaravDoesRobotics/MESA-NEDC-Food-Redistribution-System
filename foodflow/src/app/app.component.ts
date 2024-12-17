import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {  FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'foodflow';
  showHomeContent = true; // Declare the property
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showHomeContent = !['/sign-up-page', '/login-page','/about-us'].includes(event.url);
    });
  }
  goToSignUp() {
    this.router.navigate(['/sign-up-page']);
  }
  goToLogin() {
    this.router.navigate(['/login-page']);
  }
  goToAboutUs(){
    this.router.navigate(['/about-us']);
  }
  goToSignUp1(){
    this.router.navigate(['/sign-up-page']);
}
submitForm() {
  if (this.Form.valid) {
    console.log(this.Form.value); // Access form values
    // Your submission logic (e.g., HTTP request)
  } else {
    // Handle validation errors (e.g., display error messages)
    console.log("form is invalid");
  }
}
