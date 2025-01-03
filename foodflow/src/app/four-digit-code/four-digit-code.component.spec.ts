import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourDigitCodeComponent } from './four-digit-code.component';

describe('FourDigitCodeComponent', () => {
  let component: FourDigitCodeComponent;
  let fixture: ComponentFixture<FourDigitCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FourDigitCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourDigitCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
