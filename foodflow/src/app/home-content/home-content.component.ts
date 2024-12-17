import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home-content',
  standalone: false,
  
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.scss'
})
export class HomeContentComponent {
  constructor(private router: Router) {}
  goToSignUp() {
    this.router.navigate(['/sign-up-page']);
  }
}
