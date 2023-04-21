import React, { ReactNode } from "react"
import { useTabContext } from "./TabContext"

export interface ITabProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children?: ReactNode
	tab: string
}

const Tab: React.FunctionComponent<ITabProps> = (props) => {
	const { children, tab } = props
	const { selectedTab, setSelecetedTab } = useTabContext()

	return (
		<button
			role="tab"
			onClick={() => setSelecetedTab(tab)}
			tabIndex={selectedTab === tab ? 0 : -1}
			style={{ fontWeight: selectedTab === tab ? "bold" : "normal" }}
			className="w-[50px] h-[30px] border-2 border-slate-500"
		>
			{children}
		</button>
	)
}

export default Tab
