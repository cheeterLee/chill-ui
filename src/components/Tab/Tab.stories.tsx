import React from 'react'
import { Meta } from '@storybook/react'
import Tab from './Tab'
import TabList from './TabList'
import TabPanel from './TabPanel'
import { TabContextProvider } from './TabContext'

const meta: Meta = {
    title: "Tab",
    component: Tab
}

export default meta

export const Tabs = () => (
    <div className='flex flex-col '>

    <TabContextProvider defaultSelectedTab="tab2">
      <TabList>
        <Tab tab="tab1">tab 1</Tab>
        <Tab tab="tab2">tab 2</Tab>
        <Tab tab="tab3">tab 3</Tab>
      </TabList>
      <TabPanel tab="tab1">content for tab 1</TabPanel>
      <TabPanel tab="tab2">content for tab 2</TabPanel>
      <TabPanel tab="tab3">content for tab 3</TabPanel>
    </TabContextProvider>
    </div>
)