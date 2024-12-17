import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-four-digit-code',
  templateUrl: './four-digit-code.component.html',
  styleUrls: ['./four-digit-code.component.scss'],
  standalone: false,
})
export class FourDigitCodeComponent {
  Form: FormGroup;

  constructor() {
    this.Form = new FormGroup({
      digit1: new FormControl(''),
      digit2: new FormControl(''),
      digit3: new FormControl(''),
      digit4: new FormControl(''),
    });
  }
  onSubmit(): void {
    console.log(this.Form.value);
    // Add additional form submission logic here
  }

}
