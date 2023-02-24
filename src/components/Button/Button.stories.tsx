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
		<Button variant="solid" colorScheme="green">
			Solid1
		</Button>
		<Button variant="solid" colorScheme="indigo">
			Solid2
		</Button>
		<Button variant="solid" colorScheme="red">
			Solid3
		</Button>
	</div>
)

export const Outline = () => (
	<div style={{ display: 'flex', gap: '.5rem' }}>
		<Button variant="outline" colorScheme="red">
			Outline1
		</Button>
		<Button variant="outline" colorScheme="teal">
			Outline2
		</Button>
		<Button variant="outline" colorScheme="emerald">
			Outline3
		</Button>
	</div>
)

export const Ghost = () => (
	<div style={{ display: 'flex', gap: '.5rem' }}>
		<Button variant="ghost" colorScheme="slate">
			Ghost1
		</Button>
		<Button variant="ghost" colorScheme="teal">
			Ghost2
		</Button>
		<Button variant="ghost" colorScheme="violet">
			Ghost3
		</Button>
	</div>
)