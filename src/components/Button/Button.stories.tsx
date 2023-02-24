import React from "react"
import { Meta } from "@storybook/react"
import Button from "./Button"

const meta: Meta = {
	title: "Button",
	component: Button,
}

export default meta

export const Solid = () => (
	<div style={{ display: 'flex', gap: '.5rem' }}>
		<Button variant="solid" colorScheme="green" size="sm">
			Solid1
		</Button>
		<Button variant="solid" colorScheme="indigo" size='md'>
			Solid2
		</Button>
		<Button variant="solid" colorScheme="red" size='lg'>
			Solid3
		</Button>
	</div>
)

export const Outline = () => (
	<div style={{ display: 'flex', gap: '.5rem' }}>
		<Button variant="outline" colorScheme="red" size='sm'>
			Outline1
		</Button>
		<Button variant="outline" colorScheme="teal" size='md'>
			Outline2
		</Button>
		<Button variant="outline" colorScheme="emerald" size='lg'>
			Outline3
		</Button>
	</div>
)

export const Ghost = () => (
	<div style={{ display: 'flex', gap: '.5rem' }}>
		<Button variant="ghost" colorScheme="slate" size='sm'>
			Ghost1
		</Button>
		<Button variant="ghost" colorScheme="teal" size='md'>
			Ghost2
		</Button>
		<Button variant="ghost" colorScheme="violet" size='lg'>
			Ghost3
		</Button>
	</div>
)