import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  template: ``,
  standalone: false,
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss',
})

export class SignUpPageComponent {
  constructor(private router: Router) {}
  goToSignUp1(){
    this.router.navigate(['/four-digit-code']);
}
  
}
