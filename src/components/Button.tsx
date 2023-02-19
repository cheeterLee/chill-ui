import React from "react"

export interface IButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children?: React.ReactNode
	variant: 'primary' | 'secondary'
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
	const { children, style, variant } = props

	let _style: React.CSSProperties = style || {}

	// Override Defaults
	return (
		<button className={variant === 'primary' ? 'bg-indigo-400' : 'bg-emerald-400'} style={_style} {...props}>
			{children}
		</button>
	)
}

export default Button