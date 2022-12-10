
export const query = {
	one<E extends Element>(selector: string) {
		return throwWhenNotFound(
			selector,
			document.querySelector<E>(selector),
		)
	},
	all<E extends Element>(selector: string) {
		return throwWhenNotFound(
			selector,
			document.querySelectorAll<E>(selector),
		)
	},
}

function throwWhenNotFound<T>(selector: string, result: T): NonNullable<T> {
	if (!result)
		throw new Error(`could not find ${selector}`)
	return result
}
