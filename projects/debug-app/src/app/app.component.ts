import { Component } from '@angular/core';
import { UiComponentProps, UiService } from '@sandbox/ui';

@Component({
  selector: 'debug-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;
  uiProps: UiComponentProps;

  constructor(private readonly ui: UiService) {
    this.title = ui.hello();
    this.uiProps = {
      text: 'input from debug-app',
    };
  }
}
