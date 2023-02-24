import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Header } from '.';

export default {
  title: 'MyComponents/Header',
  component: Header
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderOpen = Template.bind({});
HeaderOpen.args = {
  isOpen: true
};

export const HeaderClose = Template.bind({});
HeaderClose.args = {
  isOpen: false
};
