
export type Getter<S> = () => S
export type Setter<S> = (valueOrFunction: S | ((p: S) => S)) => void

export function accessor<S>(initial: S): [Getter<S>, Setter<S>] {
	let currentValue = initial
	return [

		() => currentValue,

		valueOrFunction => {
			currentValue = (typeof valueOrFunction === "function")
				? (valueOrFunction as any)(currentValue)
				: valueOrFunction as S
		},

	]
}
