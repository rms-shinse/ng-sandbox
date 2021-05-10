import { Component } from '@angular/core';

@Component({
  selector: 'ui-footer',
  templateUrl: './footer.component.html',
  // FIXME: When use scss, ng build frozen.
  // https://github.com/angular/angular-cli/issues/20726
  styles: [``],
})
export class FooterComponent {
  constructor() {}
}
