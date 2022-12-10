
import "@benev/swipe-snail/x/elements.js"

import {hashrouter} from "@benev/swipe-snail/x/hashrouter.js"
import {SnailSystem} from "@benev/swipe-snail/x/elements/system/element.js"
import {PanelChangeEvent} from "@benev/swipe-snail/x/events/panel-change.js"

import {query} from "./utils/query.js"
import {runLogoAnimation} from "./utils/run-logo-animation.js"
import {activateSpecificGameInPanel} from "./utils/activate-specific-game-in-panel.js"

const elements = {
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
}

runLogoAnimation({
	element: elements.logoUnit,
	style: {
		opacity: "1",
		transform: "scale(1)",
	},
})

let lastGame = "humanoid"

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
			lastGame = "humanoid"
			return

		case "#/aeterna":
			go(elements.snail.panel("#/game"))
			activateSpecificGameInPanel(elements.games, "aeterna")
			lastGame = "aeterna"
			return

		default:
			console.warn(`unknown route "${route}"`)
	}
})

router.hashchange()

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
			? "#/" + lastGame
			: "#/"

		router.update(route)

	})
