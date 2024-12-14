import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goToSignUp() {
    this.router.navigate(['/sign-up-page']); // Replace 'sign-up' with your actual route path
  }
}
