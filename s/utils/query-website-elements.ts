
import {query} from "./query.js"
import {SnailSystem} from "@benev/swipe-snail/x/elements/system/element.js"

export type WebsiteElements = ReturnType<typeof queryWebsiteElements>

export const queryWebsiteElements = () => ({
	logoUnit:
		query.one<HTMLElement>(".logo-unit"),

	games:
		query.all<HTMLElement>(`[data-panel="game"] [data-game]`),

	snail: {
		system:
			query.one<SnailSystem>(`snail-system`),

		panel: (route: string) =>
			query.one<HTMLElement>(`[data-route="${route}"]`),
	},
})
