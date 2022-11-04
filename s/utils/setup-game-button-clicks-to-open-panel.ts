
import type {SnailSystem} from "@benev/swipe-snail/x/elements/system/element.js"
import {activateSpecificGameInPanel} from "./activate-specific-game-in-panel.js"

export function setupGameButtonClicksToOpenPanels({
		snailSystem,
		gamePanel,
		buttons,
		games,
	}: {
		snailSystem: SnailSystem
		gamePanel: HTMLElement
		buttons: HTMLElement[] | NodeListOf<HTMLElement>
		games: HTMLElement[] | NodeListOf<HTMLElement>
	}) {

	for (const button of Array.from(buttons)) {
		const name = button.getAttribute("data-game")!
		button.onclick = () => {
			activateSpecificGameInPanel(games, name)
			snailSystem.go(gamePanel)
		}
	}
}
