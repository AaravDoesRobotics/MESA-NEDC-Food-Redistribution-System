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
    const code = this.generateFourDigitCode();
    this.router.navigate(['/four-digit-code'], { queryParams: { code: code } });
}
generateFourDigitCode(): string {
  // Generate your four-digit code logic here
  return Math.floor(1000 + Math.random() * 9000).toString();
}
}
