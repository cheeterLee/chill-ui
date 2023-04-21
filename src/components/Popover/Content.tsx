import React, {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react"
import { Position, Rect, usePopoverContext } from "./Popover"

export interface IContentProps {
	children: React.ReactNode
}

const Content: React.FunctionComponent<IContentProps> = ({ children }) => {
	const { isShow } = usePopoverContext()

	if (!isShow) {
		return null
	}

	return <ContentInternal>{children}</ContentInternal>
}

function ContentInternal({ children }: { children: React.ReactNode }) {
	const { triggerRect, preferredPosition, setIsShow } = usePopoverContext()
	const ref = useRef<HTMLDialogElement>(null)
	const [coords, setCoords] = useState({
		left: 0,
		top: 0,
	})

	useLayoutEffect(() => {
		const element = ref.current
		if (element == null) {
			return
		}

		const rect = element.getBoundingClientRect()

		const coords = getPopoverCoords(triggerRect, rect, preferredPosition)
		setCoords(coords)
	}, [])

	const refFocusTrapping = useFocusTrapping()

	const dismiss = useCallback(() => {
		setIsShow(false)
	}, [])
	const refClickOutside = uesClickOutside(dismiss)

	const mergedRef = mergeRef(ref, refFocusTrapping, refClickOutside)
	return (
		<dialog
			open={true}
			ref={mergedRef}
			style={{
				position: "fixed",
				left: `${coords.left}px`,
				top: `${coords.top}px`,
				margin: 0,
			}}
		>
			{children}
		</dialog>
	)
}

function getPopoverCoords(
	triggerRect: Rect,
	popoverRect: Rect,
	position: Position
) {
	switch (position) {
		case "bottom-center":
		default:
			let top = triggerRect.top + triggerRect.height + 10
			let left = Math.max(
				triggerRect.left +
					triggerRect.width / 2 -
					popoverRect.width / 2,
				10
			)

			// failover to top if there is not enough space
			if (top + popoverRect.height > window.innerHeight - 10) {
				top = triggerRect.top - 10 - popoverRect.height
			}
			return {
				top,
				left,
			}
	}
}

const focusableQuery = ":is(input, button, [tab-index]"

// some hooks
function useFocusTrapping() {
	// @ts-ignore TODO: fix the typings
	const refTrigger = useRef<HTMLElement>(document.activeElement)
	const ref = useRef<HTMLElement>(null)

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		const popover = ref.current
		if (popover == null) {
			return
		}
		// @ts-ignore
		const focusables = [...popover.querySelectorAll(focusableQuery)]

		switch (e.key) {
			case "Tab":
				// check if it is the last focusable
				const lastFocusable = focusables[focusables.length - 1]
				if (document.activeElement === lastFocusable) {
					// @ts-ignore, TODO: fix typing
					focusables[0]?.focus()

					e.preventDefault()
				}
		}
	}, [])

	useEffect(() => {
		const popover = ref.current
		if (popover == null) {
			return
		}

		//@ts-ignore
		const focusables = [...popover.querySelectorAll(focusableQuery)]
		// @ts-ignore, TODO: fix typing
		focusables[0]?.focus()
		console.log("mount popover focusing", focusables[0])

		// 2. attach keyboard event listener to trap the focus
		document.addEventListener("keydown", onKeyDown)
		return () => {
			document.removeEventListener("keydown", onKeyDown)
			const trigger = refTrigger.current
			const currentActiveElement = document.activeElement
			if (currentActiveElement == document.body) {
				trigger?.focus()
			}
		}
	}, [])

	return ref
}

function mergeRef(...refs: any[]) {
	return (el: any) => {
		refs.forEach((ref) => {
			if (typeof ref === "function") {
				ref(el)
			} else {
				ref.current = el
			}
		})
	}
}

function uesClickOutside(callback: () => void) {
	const ref = useRef<HTMLElement>(null)
	useEffect(() => {
		const element = ref.current
		if (element == null) {
			return
		}

		const onClick = (e: MouseEvent) => {
			// @ts-ignore
			if (!element.contains(e.target)) {
				console.log("clicked outside")
				callback()
			}
		}

		// delay it to avoid treating trigger click as click outside
		window.setTimeout(() => document.addEventListener("click", onClick), 0)
		return () => {
			window.setTimeout(
				() => document.removeEventListener("click", onClick),
				0
			)
		}
	}, [])
	return ref
}

export default Content
