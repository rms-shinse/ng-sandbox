import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  // FIXME: When use scss, ng build frozen.
  // https://github.com/angular/angular-cli/issues/20726
  // styleUrls: ['./header.component.scss'],
  styles: [
    `
      :host {
        display: block;
        min-height: 5em;
        background-color: #eee;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor() {}
}
