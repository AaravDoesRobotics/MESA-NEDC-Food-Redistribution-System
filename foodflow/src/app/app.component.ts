import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'foodflow';
  constructor(private router: Router) {}
  goToSignUp() {
    this.router.navigate(['/sign-up-page']);
  }
}
