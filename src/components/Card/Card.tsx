import React from "react"

export interface ICardProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	> {
	chidlren?: React.ReactNode
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
	const { style, children } = props
	let _style: React.CSSProperties = style || {}
    
	return (
		<article style={_style} {...props}>
			{children}
		</article>
	)
}

export default Card
