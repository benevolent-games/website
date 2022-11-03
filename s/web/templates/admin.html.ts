
import {BenevolentWebsiteContext} from "../types.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"

import pageHtml from "../partials/page.html.js"

export default (context: BenevolentWebsiteContext) => pageHtml({
	...context,
	htmlClass: "admin",
	headContent: html``,
	mainContent: html`

		<h1>benevolent admin page</h1>

		<h2>xiome-store-connect</h2>
		<xiome-store-connect></xiome-store-connect>

		<h2>xiome-store-subscription-planning</h2>
		<xiome-store-subscription-planning></xiome-store-subscription-planning>
		
		<h2>xiome-store-subscription-catalog</h2>
		<xiome-store-subscription-catalog></xiome-store-subscription-catalog>

	`,
})
