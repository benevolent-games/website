
import type {SwipeSnail} from "@benev/swipe-snail/x/elements/swipe-snail.js"

async function animationFrame() {
	return new Promise(resolve => requestAnimationFrame(resolve))
}

async function activateSpecificGameInPanel(name: string) {
	const games = Array.from(
		document.querySelectorAll<HTMLElement>(`[data-panel="game"] [data-game]`)
	)

	for (const game of games) {
		const isSpecified = game.getAttribute("data-game") === name
		game.hidden = !isSpecified
	}
}

//
// intro animation
//
{
	const {style} = document.querySelector<HTMLElement>(".logo-unit")!

	await animationFrame()
	style.opacity = "1"
	style.transform = "scale(1)"
}

//
// game buttons
//
{
	const snail = document.querySelector<SwipeSnail>("swipe-snail")!
	const gamePanel = document.querySelector<HTMLElement>(`[data-panel="game"]`)!

	const buttons = Array.from(
		document.querySelectorAll<HTMLElement>(".games [data-game]")
	)

	for (const button of buttons) {
		const name = button.getAttribute("data-game")!
		button.onclick = () => {
			activateSpecificGameInPanel(name)
			snail.go(gamePanel)
		}
	}
}
