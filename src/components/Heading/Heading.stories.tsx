import React from "react"
import { Meta } from "@storybook/react"
import Heading from "./Heading"

const meta: Meta = {
	title: "Heading",
	component: Heading,
}

export default meta

export const Headings = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
        <Heading level='lv1'>This is a lv1 Heading</Heading>
        <Heading level='lv2'>This is a lv2 Heading</Heading>
        <Heading level='lv3'>This is a lv3 Heading</Heading>
        <Heading level='lv4'>This is a lv4 Heading</Heading>
    </div>

)