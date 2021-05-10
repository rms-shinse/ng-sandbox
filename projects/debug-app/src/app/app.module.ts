import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule, UiService } from '@sandbox/ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicPagesModule } from './pages/public-pages/public-pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UiModule, PublicPagesModule],
  providers: [UiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
