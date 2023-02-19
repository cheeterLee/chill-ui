import React from 'react'
import { Meta } from '@storybook/react'
import Button from './Button'

const meta: Meta = {
	title: 'Button',
	component: Button
}

export default meta

export const Primary = () => <Button variant='primary'>Primary</Button>

export const Secondary = () => <Button variant='secondary'>Secondary</Button>