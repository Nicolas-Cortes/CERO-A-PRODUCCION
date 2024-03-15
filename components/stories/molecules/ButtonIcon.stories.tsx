import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';


const meta: Meta<typeof ButtonIcon> = {
  component: ButtonIcon,
};

export default meta;

type Story = StoryObj<typeof ButtonIcon>;

export const Default: Story =  {
  args:{
    icon
  }
} 