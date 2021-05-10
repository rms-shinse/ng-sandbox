import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-side-nav',
  templateUrl: './side-nav.component.html',
  // FIXME: When use scss, ng build frozen.
  // https://github.com/angular/angular-cli/issues/20726
  // styleUrls: ['./side-nav.component.scss'],
  styles: [
    `
      :host {
        display: block;
        background-color: #eee;
        position: fixed;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {
  constructor() {}
}
