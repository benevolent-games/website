
import {getXiomeConfig} from "./get-xiome-config.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"
import {HashVersioner} from "xiome/x/toolbox/hamster-html/versioning/hash-versioner.js"

export function xiomeInstallSnippet({mode, v}: {
		mode: "production" | "debug"
		v: HashVersioner
	}) {

	switch (mode) {

		case "production": return html`
			${getXiomeConfig("prod")}
			<script
				defer
				type=module
				src="${v("/node_modules/xiome/x/xiome.bundle.min.js")}"
			></script>
		`

		case "debug": return html`
			<xiome-mock mode=app root="/node_modules/xiome/x"></xiome-mock>
			<script
				defer
				type=module
				src="${v("/node_modules/xiome/x/xiome-mock.bundle.min.js")}"
			></script>
		`

		default:
			throw new Error(`unknown mode "${mode}"`)
	}
}
