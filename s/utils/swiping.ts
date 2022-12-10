
import type {hashrouter} from "@benev/swipe-snail/x/hashrouter.js"
import {PanelChangeEvent} from "@benev/swipe-snail/x/events/panel-change.js"

import {Getter} from "./accessor.js"
import {WebsiteElements} from "./query-website-elements.js"

export function swiping({elements, router, getGame}: {
		elements: WebsiteElements
		router: ReturnType<typeof hashrouter>
		getGame: Getter<string>
	}) {

	const firstTime = (() => {
		let count = 0
		return () => count++ < 1
	})()
	
	PanelChangeEvent
		.listen(elements.snail.system)
		.handle(event => {
	
			if (firstTime())
				return undefined
	
			const panel = event.detail
			const attribute = panel.getAttribute("data-route")
			const route = attribute === "#/game"
				? "#/" + getGame()
				: "#/"
	
			router.update(route)
	
		})
}
