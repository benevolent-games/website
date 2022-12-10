
export const query = {
	one<E extends Element>(selector: string) {
		const result = document.querySelector<E>(selector)
		if (!result)
			throw new Error(`could not find ${selector}`)
		return result
	},
	all<E extends Element>(selector: string) {
		const result = document.querySelectorAll<E>(selector)
		if (!result)
			throw new Error(`could not find ${selector}`)
		return result
	},
}
