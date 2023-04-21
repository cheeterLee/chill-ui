import React, { ReactNode } from "react"
import { useTabContext } from "./TabContext"

export interface ITabPanelProps {
	children: ReactNode
	tab: string
}

const TabPanel: React.FunctionComponent<ITabPanelProps> = ({
	children,
	tab,
}) => {
	const { selectedTab, tabsPrefix } = useTabContext()

	if (selectedTab !== tab) return null

	return (
		<div
			role="tabpanel"
			tabIndex={0}
			id={`tab-${tabsPrefix}-tabpanel-${tab}`}
            className="border-2 border-teal-400"
		>
			{children}
		</div>
	)
}

export default TabPanel
