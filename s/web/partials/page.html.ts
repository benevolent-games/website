
import {BenevolentWebsiteContext} from "../types.js"
import {html, HtmlTemplate} from "xiome/x/toolbox/hamster-html/html.js"

import headBasicsHtml from "./head-basics.html.js"

export default ({
	mode, v,
	htmlClass,
	headContent,
	mainContent,
	...options
}: BenevolentWebsiteContext & {
	htmlClass?: string
	headContent?: HtmlTemplate
	mainContent?: HtmlTemplate
}) => html`

<!doctype html>
<html class="${htmlClass ?? ""}">
<head>
	${headBasicsHtml({...options, mode, v, title: "benevolent.games"})}

	<script defer type=importmap-shim src="${v("/importmap.json")}"></script>
	${headContent}
	${
		mode === "production"
			? html`<script defer type=module-shim src="${v("/node_modules/xiome/x/xiome.js")}"></script>`
			: html`<script defer type=module-shim src="${v("/node_modules/xiome/x/xiome-mock.js")}"></script>`
	}
	<script defer src="/node_modules/es-module-shims/dist/es-module-shims.wasm.js"></script>
</head>
<body>
	<div class=menubar>
		<xio-menu sticky>
			<xio-menu-item>
				<xiome-my-avatar></xiome-my-avatar>
				<xiome-login-panel slot=panel show-logout>
					<xiome-my-account></xiome-my-account>
					<xiome-store-subscription-status></xiome-store-subscription-status>
					<xiome-store-billing-area></xiome-store-billing-area>
				</xiome-login-panel>
			</xio-menu-item>
		</xio-menu>
	</div>
	<main>
		${mainContent}
	</main>
</body>
`
