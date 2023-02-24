import React from "react"

export interface ICardBodyProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	children?: React.ReactNode
}

const CardBody: React.FunctionComponent<ICardBodyProps> = (props) => {
	const { children, style } = props
	const _style: React.CSSProperties = style || {}

	return <div style={_style}>{children}</div>
}

export default CardBody
