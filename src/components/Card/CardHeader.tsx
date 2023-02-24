import React from "react"
import Heading from "../Heading/Heading"

export interface ICardHeaderProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	> {
	children?: React.ReactNode
}

const CardHeader: React.FunctionComponent<ICardHeaderProps> = (props) => {
	const { children, style } = props
	let _style: React.CSSProperties = style || {}
    
	return (
		<Heading level="lv4" style={_style}>
			{children}
		</Heading>
	)
}

export default CardHeader
