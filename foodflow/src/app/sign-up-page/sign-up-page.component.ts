import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-component',
  template: `<button mat-button (click)="goToSignIn()">Sign up now!</button>`,
})
export class YourComponent {
  constructor(private router: Router) {}

  goToSignIn() {
    this.router.navigate(['/signin']);
  }
}
