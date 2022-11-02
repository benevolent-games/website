
export async function activateSpecificGameInPanel(
		games: HTMLElement[] | NodeListOf<HTMLElement>,
		name: string,
	) {

	for (const game of Array.from(games)) {
		const isSpecified = game.getAttribute("data-game") === name
		if (isSpecified)
			game.setAttribute("data-active", "")
		else
			game.removeAttribute("data-active")
	}
}
