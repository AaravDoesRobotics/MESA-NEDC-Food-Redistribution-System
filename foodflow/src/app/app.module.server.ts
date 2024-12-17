import { NgModule } from '@angular/core';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';  // Make sure this import is present
import { ServerModule } from '@angular/platform-server'; // Import the ServerModule

@NgModule({
  imports: [
    AppModule, // Import your main app module
    ServerModule // Import ServerModule
  ],
  bootstrap: [AppComponent] // Specify the bootstrap component for server-side rendering
})
export class AppServerModule {}
