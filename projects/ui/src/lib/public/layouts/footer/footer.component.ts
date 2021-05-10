import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-footer',
  templateUrl: './footer.component.html',
  // FIXME: When use scss, ng build frozen.
  // https://github.com/angular/angular-cli/issues/20726
  styles: [
    `
      :host {
        display: block;
        background-color: #eee;
        position: fixed;
        bottom: 0;
        min-height: 15em;
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  constructor() {}
}
