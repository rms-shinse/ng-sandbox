import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [RouterModule, CommonModule],
  exports: [LoginPageComponent],
})
export class PublicPagesModule {}
