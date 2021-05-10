import { Component, Input } from '@angular/core';

export interface UiComponentProps {
  text: string;
}

@Component({
  selector: 'ui-ui',
  template: ` <p>{{ props.text }}</p> `,
  // FIXME: When use scss, ng build frozen.
  // https://github.com/angular/angular-cli/issues/20726
  // styleUrls: ['./ui.component.scss'],
  styles: [],
})
export class UiComponent {
  @Input() props: UiComponentProps = {
    text: 'ui works!',
  };

  constructor() {}
}
