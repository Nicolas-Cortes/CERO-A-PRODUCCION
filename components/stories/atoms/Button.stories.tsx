import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from '../../atoms/Button/index';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    name: 'Primary',
  render: () => <Button type="primary">Primary</Button>,
  };

  export const Secondary: Story = {
    name: 'Secondary',
  render: () => <Button type="secondary">Secondary</Button>,
  };