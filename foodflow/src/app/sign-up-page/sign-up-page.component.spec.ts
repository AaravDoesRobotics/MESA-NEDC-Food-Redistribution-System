import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { SignUpPageComponent } from './sign-up-page.component';

describe('SignUpPageComponent', () => {
  let component: SignUpPageComponent;
  let fixture: ComponentFixture<SignUpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

//added for wvr akash told me on dc
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent {

  constructor(private router: Router) { }

  goToFourDigitCode(): void {
    this.router.navigate(['/four-digit-code']); // Navigate to the 4-digit code page
  }

}