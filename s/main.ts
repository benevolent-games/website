
import {hashrouter} from "@benev/swipe-snail/x/hashrouter.js"
import {runLogoAnimation} from "./utils/run-logo-animation.js"
import {SnailSystem} from "@benev/swipe-snail/x/elements/system/element.js"
import {activateSpecificGameInPanel} from "./utils/activate-specific-game-in-panel.js"

const elements = {
	logoUnit: (
		document
			.querySelector<HTMLElement>(".logo-unit")!
	),
	snail: {
		system: (
			document
				.querySelector<SnailSystem>(`snail-system`)!
		),
		panel(route: string) {
			return document
				.querySelector<HTMLElement>(`[data-route="${route}"]`)!
		},
	},
	games: (
		document
			.querySelectorAll<HTMLElement>(`[data-panel="game"] [data-game]`)
	),
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

SnailSystem
	.events
	.PanelChangeEvent
		.listen(elements.snail.system)
		.handle(event => {
			const panel = event.detail
			const route = panel.getAttribute("data-route")
			router.update(
				route === "#/game"
					? "#/" + lastGame
					: "#/"
			)
		})
