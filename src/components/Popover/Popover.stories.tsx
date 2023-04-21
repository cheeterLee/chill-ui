import React from "react"
import { Meta } from "@storybook/react"
import { Popover } from "./Popover"

const meta: Meta = {
	title: "Popover",
	component: Popover,
}

export default meta

export const Popovers = () => (
	<div className="flex border-2 border-teal-600 p-2">
		<Popover preferredPosition="bottom-center">
			<Popover.Trigger>
				<button className="border-2 border-pink-300 rounded-md mr-2 px-2">show popover</button>
			</Popover.Trigger>
			<Popover.Content>
				<input className="border-2 border-slate-500 rounded-md" type="text" />
				<Popover.Close>
					<button className="border-pink-300 border-2 mx-2 rounded-md px-2">close</button>
				</Popover.Close>

				<Popover preferredPosition="bottom-center">
					<Popover.Trigger>
						<button className="border-2 border-pink-300 rounded-md px-2">show popover</button>
					</Popover.Trigger>
					<Popover.Content>
						<input className="border-2 border-slate-500 rounded-md" type="text" />
						<Popover.Close>
							<button className="border-pink-300 border-2 ml-2 rounded-md px-2">close</button>
						</Popover.Close>
					</Popover.Content>
				</Popover>
			</Popover.Content>
		</Popover>

		<Popover preferredPosition="bottom-center">
			<Popover.Trigger>
				<button className="border-pink-300 border-2 ml-2 rounded-md px-2">show popover</button>
			</Popover.Trigger>
			<Popover.Content>
				<input className="border-2 border-slate-500 rounded-md" type="text" />
				<Popover.Close>
					<button className="border-pink-300 border-2 ml-2 rounded-md px-2">close</button>
				</Popover.Close>
			</Popover.Content>
		</Popover>
	</div>
)
