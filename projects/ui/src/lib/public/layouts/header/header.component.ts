import { Component } from '@angular/core';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  // FIXME: When use scss, ng build frozen.
  // https://github.com/angular/angular-cli/issues/20726
  // styleUrls: ['./header.component.scss'],
  styles: [``],
})
export class HeaderComponent {
  constructor() {}
}
