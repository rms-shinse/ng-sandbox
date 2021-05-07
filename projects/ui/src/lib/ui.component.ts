import { Component, Input } from '@angular/core';

export interface UiComponentProps {
  text: string;
}

@Component({
  selector: 'ui-ui',
  template: ` <p>{{ props.text }}</p> `,
  styles: [],
})
export class UiComponent {
  @Input() props: UiComponentProps = {
    text: 'ui works!',
  };

  constructor() {}
}
