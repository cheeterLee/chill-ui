import React, { ReactNode, useRef, useCallback } from "react"

export interface ITabListProps {
	children: ReactNode
}

const TabList: React.FunctionComponent<ITabListProps> = ({ children }) => {
	const refList = useRef<HTMLDivElement>(null)

	const onKeyDown = useCallback((e: React.KeyboardEvent) => {
		const list = refList.current
		if (!list) return
		const tabs = Array.from<HTMLElement>(
			list.querySelectorAll('[role="tab"]:not([diabled])')
		)
		const index = tabs.indexOf(document.activeElement as HTMLElement)
		if (index < 0) return

		switch (e.key) {
			case "ArrowUp":
			case "ArrowLeft": {
				const next = (index - 1 + tabs.length) % tabs.length
				tabs[next]?.focus()
				break
			}
			case "ArrowDown":
			case "ArrowRight": {
				const next = (index + 1 + tabs.length) % tabs.length
				tabs[next]?.focus()
				break
			}
		}
	}, [])

	return (
		<div ref={refList} role="tablist" onKeyDown={onKeyDown} className="">
			{children}
		</div>
	)
}

export default TabList
