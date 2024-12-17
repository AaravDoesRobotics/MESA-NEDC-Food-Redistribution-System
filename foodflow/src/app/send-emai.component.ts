import { Component } from '@angular/core';
import { GoogleApiService } from './google-api.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html', // Reference to the HTML file
  styleUrls: ['./send-email.component.scss'] // Reference to the SCSS file
})
export class SendEmailComponent {

  constructor(private googleApiService: GoogleApiService) {}

  onSendEmail() {
    console.log("Send email function triggered.");
  }
}
