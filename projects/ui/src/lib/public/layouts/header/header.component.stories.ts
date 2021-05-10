import { Meta, Story } from '@storybook/angular/types-6-0';

import { HeaderComponent } from './header.component';

export default {
  title: '@sandbox/ui/public/layouts/HeaderComponent',
  component: HeaderComponent,
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  template: `
    <div style="background-color: white; min-height: 480px;">
      <ui-header></ui-header>
    </div>
  `,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
