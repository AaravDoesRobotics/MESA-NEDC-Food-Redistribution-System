import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-sign-up-page',
  template: ``,
  standalone: true,
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss',
  imports: [ 
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule,
      MatToolbarModule,
      MatCardModule,
      MatIconModule,
      MatSidenavModule,
      MatListModule
    ]
})

export class SignUpPageComponent {
  constructor(private router: Router) {}
  goToSignUp1(){
    this.router.navigate(['/four-digit-code']);
}
  
}
