import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [HeaderComponent, SideNavComponent, FooterComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, SideNavComponent, FooterComponent],
})
export class LayoutsModule {}
