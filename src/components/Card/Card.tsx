import React from "react"
import { cardStyles } from "./CardStyles"

export interface ICardProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	> {
	chidlren?: React.ReactNode
    size: 'sm' | 'md' | 'lg'
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
	const { style, children, size } = props
	let _style: React.CSSProperties = style || {}
    const cardStyling = `${cardStyles[size]}`

	return (
		<article className={cardStyling} style={_style} {...props}>
			{children}
		</article>
	)
}

export default Card
