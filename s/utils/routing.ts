
import {hashrouter} from "@benev/swipe-snail/x/hashrouter.js"

import {Setter} from "./accessor.js"
import {WebsiteElements} from "./query-website-elements.js"
import {activateSpecificGameInPanel} from "./activate-specific-game-in-panel.js"

export function routing({elements, setGame}: {
		elements: WebsiteElements
		setGame: Setter<string>
	}) {

	const router = hashrouter((route, count) => {
		const go = count === 0
			? elements.snail.system.goInstantly
			: elements.snail.system.go

		switch (route) {

			case "#/":
				go(elements.snail.panel(route))
				return

			case "#/humanoid":
				go(elements.snail.panel("#/game"))
				activateSpecificGameInPanel(elements.games, "humanoid")
				setGame("humanoid")
				return

			case "#/aeterna":
				go(elements.snail.panel("#/game"))
				activateSpecificGameInPanel(elements.games, "aeterna")
				setGame("aeterna")
				return

			default:
				console.warn(`unknown route "${route}"`)
		}
	})

	router.hashchange()
	return router
}
