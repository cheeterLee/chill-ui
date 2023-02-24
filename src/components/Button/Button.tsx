import React from "react"
import {
	solidGenericStyle,
	outlineGenericStyle,
	ghostGenericStyle,
	colorSolid,
	colorOutline,
	colorGhost,
	buttonSize,
} from "./ButtonStyles"

export interface IButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children?: React.ReactNode
	colorScheme:
		| "slate"
		| "gray"
		| "zinc"
		| "neutral"
		| "stone"
		| "red"
		| "orange"
		| "amber"
		| "yellow"
		| "lime"
		| "green"
		| "emerald"
		| "teal"
		| "cyan"
		| "sky"
		| "blue"
		| "indigo"
		| "violet"
		| "purple"
		| "fuchisia"
		| "pink"
		| "rose"
	variant?: "solid" | "outline" | "ghost" | "link"
	size: "sm" | "md" | "lg"
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
	const { children, style, variant, colorScheme, size } = props

	const solidStyle = `${solidGenericStyle} ${colorSolid[colorScheme]}`
	const outlineStyle = `${outlineGenericStyle} ${colorOutline[colorScheme]}`
	const ghostStyle = `${ghostGenericStyle} ${colorGhost[colorScheme]}`
	const btnSize = `${buttonSize[size]}`

	let _style: React.CSSProperties = style || {}

	return (
		<button
			className={`
				${variant === "solid"
					? `${solidStyle}`
					: variant === "outline"
					? `${outlineStyle}`
					: variant === 'ghost'
					? `${ghostStyle}`
					: ``} ${btnSize}`
			}
			style={_style}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
