import { Meta, Story } from '@storybook/angular/types-6-0';

import { HeadingComponent } from './heading.component';

export default {
  title: '@sandbox/ui/internal/components/atoms/HeadingComponent',
  component: HeadingComponent,
} as Meta;

const Template: Story<HeadingComponent> = (args: HeadingComponent) => ({
  template: `
    <ui-heading>{{ text }}</ui-heading>
  `,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  text: 'hello, heading',
};
