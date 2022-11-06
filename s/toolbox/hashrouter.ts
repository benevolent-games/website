
export function hashrouter<R extends {
		[route: string]: () => (void | (() => void))
	}>(routesSpec: R) {

	const routes = new Map(Object.entries(routesSpec))
	const cleanups = new Set<() => void>()

	function hashchange() {
		let {hash} = location

		if (hash === "" || hash === "#")
			hash = "#/"
	
		const route = routes.get(hash)

		if (route) {
			for (const clean of cleanups)
				clean()
			cleanups.clear()
			const cleanup = route() ?? (() => {})
			cleanups.add(cleanup)
		}
		else
			console.error(`route "${hash}" not found`)
	}

	window.addEventListener("hashchange", hashchange)
	hashchange()

	return {
		go(route: string) {
			history.pushState(
				{},
				"",
				route,
			)
		},
	}
}
