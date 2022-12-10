
import "@benev/swipe-snail/x/elements.js"

import {routing} from "./utils/routing.js"
import {swiping} from "./utils/swiping.js"
import {accessor} from "./utils/accessor.js"
import {runLogoAnimation} from "./utils/run-logo-animation.js"
import {queryWebsiteElements} from "./utils/query-website-elements.js"

const elements = queryWebsiteElements()

runLogoAnimation({
	element: elements.logoUnit,
	style: {opacity: "1", transform: "scale(1)"},
})

const [getGame, setGame] = accessor("humanoid")
const router = routing({elements, setGame})
swiping({elements, router, getGame})
