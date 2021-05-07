import { Meta, Story } from '@storybook/angular/types-6-0';

import { UiComponent } from './ui.component';

export default {
  title: '@sandbox/ui/UiComponent',
  component: UiComponent,
} as Meta;

const Template: Story<UiComponent> = (args: UiComponent) => ({
  props: args,
});

export const Hello = Template.bind({});
Hello.args = {
  props: {
    text: 'hello, storybook',
  },
};
