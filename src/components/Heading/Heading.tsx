import React from "react"
import { headingStyles } from "./HeadingStyles"

export interface IHeadingProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	> {
	chidlren?: React.ReactNode
	level: "lv1" | "lv2" | "lv3" | 'lv4'
}

const Heading: React.FunctionComponent<IHeadingProps> = (props) => {
	const { children, style, level } = props
	let _style: React.CSSProperties = style || {}
	const headingSize = `${headingStyles[level]}`

	return (
		<h2 className={headingSize} style={_style}>
			{children}
		</h2>
	)
}

export default Heading
