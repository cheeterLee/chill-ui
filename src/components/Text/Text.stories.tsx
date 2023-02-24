import React from "react"
import { Meta } from "@storybook/react"
import Text from "./Text"

const meta: Meta = {
	title: "Text",
	component: Text,
}

export default meta

export const Texts = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
       <Text fontSize="xl">This is a xl fontSize Text</Text>
       <Text fontSize="lg">This is a lg fontSize Text</Text>
       <Text fontSize="base">This is a base fontSize Text</Text>
       <Text fontSize="sm">This is a sm fontSize Text</Text>
       <Text fontSize="xs">This is a xs fontSize Text</Text>
    </div>
)