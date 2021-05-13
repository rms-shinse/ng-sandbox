import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {
  constructor() {}
}
