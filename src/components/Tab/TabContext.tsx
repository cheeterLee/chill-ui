import React, {
	createContext,
	useMemo,
	ReactNode,
	useState,
    useContext,
} from "react"

type TabContext = {
	selectedTab: string | null
	tabsPrefix: string
	setSelecetedTab: (tab: string) => void
}

type TabContextProviderProps = {
	children: ReactNode
	defaultSelectedTab: string
}

const TabContext = createContext({} as TabContext)

export const useTabContext = () => {
    return useContext(TabContext)
}

export const TabContextProvider = ({
	children,
	defaultSelectedTab,
}: TabContextProviderProps) => {
	const [selectedTab, setSelecetedTab] = useState(defaultSelectedTab)

	const tabsPrefix = useMemo(() => {
		return "tabxxx"
	}, [])

	const contextValue = React.useMemo(
		() => ({
			selectedTab,
			tabsPrefix,
			setSelecetedTab,
		}),
		[selectedTab, setSelecetedTab]
	)

	return (
		<TabContext.Provider value={contextValue}>
			{children}
		</TabContext.Provider>
	)
}
