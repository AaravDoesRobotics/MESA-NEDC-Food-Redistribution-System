import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about-us',
  standalone: false,
  template: `<button mat-button (click)="goAboutUs()">About Us</button>`,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
    constructor(private router: Router) {}
}
