import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { Layout } from '.';

export default {
  title: 'MyComponents/Layout',
  component: Layout
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const LayoutTemplate = Template.bind({});
LayoutTemplate.args = {
  children: <div>Children</div>
};

export const LayoutComponent = Template.bind({});
LayoutComponent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.click(canvas.getByTestId('toggle-layout'));

  expect(await canvas.findByText('Pedidos')).not.toBeVisible();
};
