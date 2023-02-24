import React from "react"
import { Meta } from "@storybook/react"
import Card from "./Card"
import CardHeader from "./CardHeader"
import CardBody from './CardBody'

const meta: Meta = {
	title: "Card",
	component: Card,
}

export default meta

export const Cards = () => (
    <Card size='md'>
        <CardHeader>This is a card header</CardHeader>
        <CardBody>
            This is a card body
        </CardBody>
    </Card>
)
