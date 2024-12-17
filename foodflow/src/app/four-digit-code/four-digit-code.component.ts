import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // Correct import!
import {  FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-four-digit-code',
  templateUrl: './four-digit-code.component.html',
  styleUrls: ['./four-digit-code.component.scss'],
  standalone: false,
})
export class FourDigitCodeComponent implements OnInit  {
  Form: FormGroup;
  code: string | null = null;
  constructor(private route: ActivatedRoute) {
    this.Form = new FormGroup({
      digit1: new FormControl(''),
      digit2: new FormControl(''),
      digit3: new FormControl(''),
      digit4: new FormControl(''),
      
    });
  
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.code = params['code'];
    });
    submitForm() {
      if (this.Form.valid) {
        console.log(this.Form.value); // Access form values
        // Your submission logic (e.g., HTTP request)
      } else {
        // Handle validation errors (e.g., display error messages)
        console.log("form is invalid");
      }

}
}
}
