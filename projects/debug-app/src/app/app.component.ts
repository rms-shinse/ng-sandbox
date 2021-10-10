import { Component } from '@angular/core';
import { UiComponentProps, UiService } from '@sandbox/ui';
import * as Sentry from '@sentry/angular';

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

  handleErrorButton(): void {
    try {
      throw new Error('Hello, world!');
    } catch (err) {
      Sentry.captureException(err);
    }
  }
}
