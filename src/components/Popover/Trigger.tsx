import React, { useRef } from "react"
import { usePopoverContext } from "./Popover"

export interface ITriggerProps {
	children: React.ReactElement
}

const Trigger: React.FunctionComponent<ITriggerProps> = ({ children }) => {
	const { setIsShow, setTriggerRect } = usePopoverContext()

	const ref = useRef<HTMLElement>(null)

	const onClick = (e: MouseEvent) => {
		const element = ref.current
		if (element == null) {
			return
		}

		const rect = element.getBoundingClientRect()
		setTriggerRect(rect)
		setIsShow((isShow) => !isShow)
	}

	const childrenToTriggerPopover = React.cloneElement(children, {
		onClick, 
		ref,
	})

	return childrenToTriggerPopover
}

export default Trigger
