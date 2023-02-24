import React from "react"
import { Meta } from "@storybook/react"
import Card from "./Card"
import CardHeader from "./CardHeader"
import CardBody from "./CardBody"

const meta: Meta = {
	title: "Card",
	component: Card,
}

export default meta

export const Cards = () => (
	<div style={{ display: "flex", gap: ".5rem" }}>
		<Card size="md" direction="col">
			<CardHeader>This is a card header</CardHeader>
			<CardBody>This is a card body</CardBody>
		</Card>
        <Card size="md" direction="row">
			<CardHeader>This is a card header</CardHeader>
			<CardBody>This is a card body</CardBody>
		</Card>
	</div>
)
