import { Meta, Story } from '@storybook/angular/types-6-0';

import { SideNavComponent } from './side-nav.component';

export default {
  title: '@sandbox/ui/public/layouts/SideNavComponent',
  component: SideNavComponent,
} as Meta;

const Template: Story<SideNavComponent> = (args: SideNavComponent) => ({
  template: `
    <div style="background-color: white; min-height: 480px;">
      <ui-side-nav></ui-side-nav>
    </div>
  `,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
