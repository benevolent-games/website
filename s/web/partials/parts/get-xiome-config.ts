
import {html} from "xiome/x/toolbox/hamster-html/html.js"

export function getXiomeConfig(xiomeHost: "stage" | "local" | "prod") {
	switch (xiomeHost) {

		case "stage": return html`
			<xiome-config
				app=fedbb791f7da51bb46af045b1e4dbbfeaf9100010d1c581ad4db3b9eeee510b1
				platform=https://stage.xiome.io
			></xiome-config>
		`

		case "local": return html`
			<xiome-config
				app=fedbb791f7da51bb46af045b1e4dbbfeaf9100010d1c581ad4db3b9eeee510b1
				platform=http://localhost:8081
				api-server=http://localhost:8000
				chat-server=http://localhost:8001
			></xiome-config>
		`

		case "prod": return html`
			<xiome-config
				app=b0d1e2425506922e784621bb143b2ab23d2d3baad04d8bad032aab9e76cbf4b8
			></xiome-config>
		`

		default:
			throw new Error(`unknown xiomeHost "${xiomeHost}"`)
	}
}
