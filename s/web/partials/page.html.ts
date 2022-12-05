
import {BenevolentWebsiteContext} from "../types.js"
import {html, HtmlTemplate} from "xiome/x/toolbox/hamster-html/html.js"

import headBasicsHtml from "./head-basics.html.js"

export default ({
	mode, v,
	headContent,
	mainContent,
	htmlClass = "",
	...options
}: BenevolentWebsiteContext & {
	htmlClass?: string
	headContent?: HtmlTemplate
	mainContent?: HtmlTemplate
}) => html`

<!doctype html>
<html class="${htmlClass}">
<head>
	${headBasicsHtml({...options, mode, v, title: "benevolent.games"})}
	${mode === "production"
		? html`
			<script
				defer
				type=module-shim
				src="${v("/node_modules/xiome/x/xiome.bundle.min.js")}"
			></script>
		`
		: html`
			<script
				defer
				type=module-shim
				src="${v("/node_modules/xiome/x/xiome-mock.bundle.min.js")}"
			></script>
		`}
	${headContent}
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
