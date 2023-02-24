import React from "react"
import { textStyles } from "./TextStyle"

export interface ITextProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	children?: React.ReactNode
	fontSize: "xs" | "sm" | "base" | "lg" | "xl"
}

const Text: React.FunctionComponent<ITextProps> = (props) => {
	const { style, children, fontSize } = props
	const fontStyle = `${textStyles[fontSize]}`
	let _style: React.CSSProperties = style || {}

	return (
		<p className={fontStyle} style={_style}>
			{children}
		</p>
	)
}

export default Text
