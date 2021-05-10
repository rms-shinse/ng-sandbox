import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-heading',
  templateUrl: './heading.component.html',
  // FIXME: When use scss, ng build frozen.
  // https://github.com/angular/angular-cli/issues/20726
  // styleUrls: ['./heading.component.scss'],
  styles: [
    `
      :host {
        font-size: 24px;
        font-weight: 600;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadingComponent {}
