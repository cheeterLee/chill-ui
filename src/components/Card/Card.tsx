import React from "react"
import { cardStyles, cardDirection } from "./CardStyles"

export interface ICardProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	> {
	chidlren?: React.ReactNode
    size: 'sm' | 'md' | 'lg'
	direction: 'row' | 'col'
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
	const { style, children, size, direction } = props
	let _style: React.CSSProperties = style || {}
    const cardStyling = `${cardStyles[size]} ${cardDirection[direction]}`

	return (
		<article className={cardStyling} style={_style} {...props}>
			{children}
		</article>
	)
}

export default Card
