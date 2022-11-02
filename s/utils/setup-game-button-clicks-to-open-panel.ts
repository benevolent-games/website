
import type {SwipeSnail} from "@benev/swipe-snail/x/elements/swipe-snail.js"
import {activateSpecificGameInPanel} from "./activate-specific-game-in-panel.js"

export function setupGameButtonClicksToOpenPanels({
		swipeSnail,
		gamePanel,
		buttons,
		games,
	}: {
		swipeSnail: SwipeSnail
		gamePanel: HTMLElement
		buttons: HTMLElement[] | NodeListOf<HTMLElement>
		games: HTMLElement[] | NodeListOf<HTMLElement>
	}) {

	for (const button of Array.from(buttons)) {
		const name = button.getAttribute("data-game")!
		button.onclick = () => {
			activateSpecificGameInPanel(games, name)
			swipeSnail.go(gamePanel)
		}
	}
}
