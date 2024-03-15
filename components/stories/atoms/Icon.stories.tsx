import type { Meta, StoryObj } from '@storybook/react';
import React from 'react'
import Icon from '../../atoms/icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    name: 'Default',
  render: () => <Icon type="right-arrow"/>,
  };