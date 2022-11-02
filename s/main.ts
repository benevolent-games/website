
import {runLogoAnimation} from "./utils/run-logo-animation.js"
import {setupGameButtonClicksToOpenPanels} from "./utils/setup-game-button-clicks-to-open-panel.js"

runLogoAnimation({
	element: document.querySelector(".logo-unit")!,
	style: {
		opacity: "1",
		transform: "scale(1)",
	},
})

setupGameButtonClicksToOpenPanels({
	swipeSnail: document.querySelector(`swipe-snail`)!,
	gamePanel: document.querySelector(`[data-panel="game"]`)!,
	buttons: document.querySelectorAll(`.games [data-game]`),
	games: document.querySelectorAll(`[data-panel="game"] [data-game]`),
})
