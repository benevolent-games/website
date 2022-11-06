
import {hashrouter} from "./toolbox/hashrouter.js"
import {runLogoAnimation} from "./utils/run-logo-animation.js"
import {PanelChangeEvent} from "@benev/swipe-snail/x/events/panel-change.js"
import type {SnailSystem} from "@benev/swipe-snail/x/elements/system/element.js"
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
		panels: {
			primary: (
				document
					.querySelector<HTMLElement>(`[data-panel="primary"]`)!
			),
			game: (
				document
					.querySelector<HTMLElement>(`[data-panel="game"]`)!
			),
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

const router = hashrouter({
	"#/": () => {
		console.log("setup HOME")
		elements.snail.system.go(elements.snail.panels.primary)
	},
	"#/humanoid": () => {
		console.log("setup HUMANOID")
		activateSpecificGameInPanel(elements.games, "humanoid")
		elements.snail.system.go(elements.snail.panels.game)
	},
	"#/aeterna": () => {
		console.log("setup AETERNA")
		activateSpecificGameInPanel(elements.games, "aeterna")
		elements.snail.system.go(elements.snail.panels.game)
	},
})

PanelChangeEvent
	.listen(elements.snail.system)
	.handle(event => {
		const panel = event.detail
		const route = panel.getAttribute("data-route")
		console.log("PANEL CHANGE", route, panel)
		router.go(route === "game" ? "#/humanoid" : "#/")
	})
