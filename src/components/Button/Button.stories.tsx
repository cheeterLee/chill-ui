import React from "react"
import { Meta } from "@storybook/react"
import Button from "./Button"

const meta: Meta = {
	title: "Button",
	component: Button,
}

export default meta

export const Solid1 = () => (
	<Button variant="solid" colorScheme="green">
		Solid1
	</Button>
)

export const Solid2 = () => (
	<Button variant="solid" colorScheme="red">
		Solid2
	</Button>
)

export const Outline1 = () => (
	<Button variant="outline" colorScheme="red">
		Outline1
	</Button>
)