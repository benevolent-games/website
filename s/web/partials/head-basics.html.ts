
import {html} from "xiome/x/toolbox/hamster-html/html.js"

import {BenevolentWebsiteContext} from "../types.js"
import {xiomeInstallSnippet} from "./parts/xiome-install-snippet.js"

export default ({title, v, mode}: BenevolentWebsiteContext & {title: string}) => html`

<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<meta name="darkreader" content="dark"/>
<title>${title}</title>

<link rel=stylesheet href="${v("/style.css")}"/>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital@0;1&family=Titillium+Web:ital@0;1&display=swap" rel="stylesheet"/>

<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"/>
<link rel="manifest" href="/assets/site.webmanifest"/>

${(mode === "debug" || null) && html`

	<script
		defer
		type=importmap-shim
		src="${v("/importmap.json")}"
	></script>

	<script
		defer
		src="/node_modules/es-module-shims/dist/es-module-shims.wasm.js"
	></script>
`}

${xiomeInstallSnippet({mode, v})}

`
