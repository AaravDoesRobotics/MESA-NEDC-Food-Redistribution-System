import { Component } from '@angular/core';
import { GoogleApiService } from './google-api.service';

@Component({
  selector: 'app-send-email',
  template: `
   " <button (click)="signIn()">Sign In</button>
    <button (click)="sendEmail()">Send Email</button>"
  `,
})
export class SendEmailComponent {
  constructor(private googleApiService: GoogleApiService) {}

  async signIn(): Promise<void> {
    try {
      await this.googleApiService.initClient();
      await this.googleApiService.signIn();
      console.log('Signed in successfully!');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  }

  async sendEmail(): Promise<void> {
    try {
      await this.googleApiService.sendEmail(
        'recipient@example.com',
        'Test Email',
        'This is a test email sent from Angular using Gmail API!'
      );
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
