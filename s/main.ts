
async function animationFrame() {
	return new Promise(resolve => requestAnimationFrame(resolve))
}

void async function introAnimation() {
	const {style} = document.querySelector<HTMLElement>(".logo-unit")!

	// await animationFrame()
	// style.transition = "all ease 10s"

	await animationFrame()
	style.opacity = "1"
	style.transform = "scale(1)"
}()
