import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface UiComponentProps {
  text: string;
}

@Component({
  selector: 'ui-ui',
  template: ` <p>{{ props.text }}</p> `,
  styleUrls: ['./ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiComponent {
  @Input() props: UiComponentProps = {
    text: 'ui works!',
  };

  constructor() {}
}
