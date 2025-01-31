
import {html} from "@benev/turtle"

export const games = {

	rogue: {
		label: "Rogue Crusade",
		motto: "The Ultimate Roguelike",
		poster: "/assets/posters/rogue.avif",
		url: "https://rogue.benevolent.games/",
		content: () => html`
			<p>We're building a new 1990s roguelike for 2025. It'll be a co-op/solo dungeon crawler with permadeath and procgen.</p>
		`,
	},

	regis: {
		label: "Regis.gg",
		motto: "A New Kind of 1v1 Strategy Game",
		poster: "/assets/posters/regis.avif",
		url: "https://regis.gg/",
		content: () => html`
			<p>Inspired by chess and modern rts games.</p>
		`,
	},
}

