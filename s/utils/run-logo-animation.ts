
import {animationFrame} from "./animation-frame.js"

export async function runLogoAnimation({element, style}: {
		element: HTMLElement
		style: Partial<CSSStyleDeclaration>
	}) {

	await animationFrame()
	Object.assign(element.style, style)
}
