import { Meta, Story } from '@storybook/angular/types-6-0';

import { FooterComponent } from './footer.component';

export default {
  title: '@sandbox/ui/public/layouts/FooterComponent',
  component: FooterComponent,
} as Meta;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  template: `
    <div style="background-color: white; min-height: 480px;">
      <ui-footer></ui-footer>
    </div>
  `,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
