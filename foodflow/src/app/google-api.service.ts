import { Injectable } from '@angular/core';
import { loadGapiInsideDOM } from 'gapi-script';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  private CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';
  private API_KEY = 'YOUR_API_KEY';
  private SCOPES = 'https://www.googleapis.com/auth/gmail.send';

  constructor() { }

  async initClient(): Promise<void> {
    const gapi = await loadGapiInsideDOM();
    gapi.client.init({
      apiKey: this.API_KEY,
      clientId: this.CLIENT_ID,
      scope: this.SCOPES,
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest']
    });
  }

  async signIn(): Promise<void> {
    const gapi = await loadGapiInsideDOM();
    const auth = gapi.auth2.getAuthInstance();
    await auth.signIn();
  }

  async sendEmail(to: string, subject: string, message: string): Promise<void> {
    const gapi = await loadGapiInsideDOM();
    const email = this.createEmail(to, subject, message);

    const request = gapi.client.gmail.users.messages.send({
      userId: 'me',
      resource: {
        raw: email
      }
    });

    await request.execute();
    console.log('Email sent successfully!');
  }

  private createEmail(to: string, subject: string, message: string): string {
    const email = [
      `To: ${to}`,
      'Subject: ' + subject,
      'Content-Type: text/plain; charset="UTF-8"',
      '',
      message
    ].join('\n');

    return btoa(email).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
}
