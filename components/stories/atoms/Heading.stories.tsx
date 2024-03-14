import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Heading from '../../atoms/Heading/index';

const meta: Meta<typeof Heading> = {
  component: Heading,
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
    name: 'Default',
  render: () => <Heading>Heading</Heading>,
  };

  export const ColorPrimary: Story = {
    name: 'Color Primary',
  render: () => <Heading color='primary'>Heading</Heading>,
  };

  export const ColorDefault: Story = {
    name: 'Color Default',
  render: () => <Heading color='default'>Heading</Heading>,
  };

  export const Medium: Story = {
    name: 'Medium',
  render: () => <Heading size='md'>Heading</Heading>,
  };

  export const Small: Story = {
    name: 'Small',
  render: () => <Heading size='sm'>Heading</Heading>,
  };

  export const ExtraSmall: Story = {
    name: 'Extra Small',
  render: () => <Heading size='xs'>Heading</Heading>,
  };

