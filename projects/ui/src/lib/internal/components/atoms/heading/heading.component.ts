import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadingComponent {}
