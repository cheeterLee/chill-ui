import React, { createContext, useContext, ReactNode, useState } from "react"
import Trigger from "./Trigger"
import Content from "./Content"
import Close from "./Close"

export type Position = "bottom-center" | "bottom-left" | "bottom-right"

const defaultRect = {
	left: 0,
	top: 0,
	width: 0,
	height: 0,
}

export type Rect = Pick<DOMRect, "left" | "top" | "height" | "width">

type PopoverContext = {
	isShow: boolean
	setIsShow: React.Dispatch<React.SetStateAction<boolean>>
	preferredPosition: Position
	triggerRect: Rect
	setTriggerRect: React.Dispatch<React.SetStateAction<Rect>>
}

type PopoverContextProps = {
	children: ReactNode
	preferredPosition: Position
}

const PopoverContext = createContext({
	isShow: false,
	setIsShow: () => {
		throw new Error(
			"PopoverContext setIsShow should be used under provider"
		)
	},
	preferredPosition: "bottom-center",
	triggerRect: defaultRect,
	setTriggerRect: () => {
		throw new Error(
			"PopoverContext setTriggerRect should be used under provider"
		)
	},
} as PopoverContext)

export const usePopoverContext = () => {
	return useContext(PopoverContext)
}

export const Popover = ({
	children,
	preferredPosition = "bottom-center",
}: PopoverContextProps) => {
	const [isShow, setIsShow] = useState(false)
	const [triggerRect, setTriggerRect] = useState(defaultRect)

	const contextValue = {
		isShow,
		setIsShow,
		preferredPosition,
		triggerRect,
		setTriggerRect,
	}

	return (
		<PopoverContext.Provider value={contextValue}>
			{children}
		</PopoverContext.Provider>
	)
}

Popover.Trigger = Trigger
Popover.Content = Content
Popover.Close = Close