
import {BenevolentWebsiteContext} from "../types.js"
import {html, html as svg, attrBool} from "xiome/x/toolbox/hamster-html/html.js"

import headBasicsHtml from "../partials/head-basics.html.js"

import githubSvg from "../icons/akar/github.svg.js"
import discordSvg from "../icons/akar/discord.svg.js"
import circleTriangleRightFillSvg from "../icons/akar/circle-triangle-right-fill.svg.js"

const urls = {
	discord: "https://discord.gg/BnZx2utdev",
	github: "https://github.com/benevolent-games/",
}

const games = [
	["humanoid", "explore the benevolent testing facility"],
	["aeterna", "open world rpg"],
]

const tools = [
	["nubs", "mobile thumbsticks"],
	["swipe-snail", "fastest web swipe-panels around"],
	// ["humanoid", "1st/3rd person gameplay template"],
	// ["terrarium", "generate infinite outdoor worlds"],
	// ["underworld", "generate infinite dungeons"],
	// ["pilot", "pathfinding"],
	// ["shad", "shader devlab"],
	// ["octo", "netcode for action games"],
	// ["weaver", "netcode for rts games"],
	// ["sparrow-rtc", "webrtc connectivity library"],
	// ["mouseplay", "pointer-lock cursor systems"],
]

export default ({mode, v, ...options}: BenevolentWebsiteContext) => html`

<!doctype html>
<html class=home>
<head>
	${headBasicsHtml({...options, mode, v, title: "benevolent.games"})}

	<script defer src="/node_modules/es-module-shims/dist/es-module-shims.wasm.js"></script>
	<script defer type=importmap-shim src="${v("/importmap.json")}"></script>
	<script defer type=module-shim src="${v("/main.js")}"></script>
	<script defer type=module src="/node_modules/@benev/swipe-snail/x/elements.js"></script>
	${
		mode === "production"
			? html`<script defer type=module-shim src="${v("/node_modules/xiome/x/xiome.js")}"></script>`
			: html`<script defer type=module-shim src="${v("/node_modules/xiome/x/xiome-mock.js")}"></script>`
	}

	<style>
		.logo-unit {
			opacity: 0.1;
			transform: scale(0.8);
			transition: all 5s ease;
		}
	</style>
</head>
<body>
	<div class=menubar>
		<xio-menu sticky initially-hidden>
			<xio-menu-item>
				<xiome-my-avatar></xiome-my-avatar>
				<xiome-login-panel slot=panel show-logout>
					<xiome-my-account></xiome-my-account>
				</xiome-login-panel>
			</xio-menu-item>
		</xio-menu>
	</div>
	<main>
		<swipe-snail>
			<snail-panel data-home>

				<section data-panel=primary>
					<h1>
						<div class="logo">
							<div class="logo-unit">
								<img src="/assets/benevolent.svg" alt=""/>
								<span>benevolent.games</span>
							</div>
						</div>
					</h1>
	
					<section class=games>
						<ul>
							${games.map(([name, description]) => html`
								<li data-game="${name}" tabindex=0>
									<img src="/assets/games/${name}/poster.webp" alt="${name}"/>
								</li>
							`)}
						</ul>
					</section>
	
					<section class=tools>
						<h2>developer tools</h2>
						<nav>
							${tools.map(([name, description]) => html`
								<a
									href="https://github.com/benevolent-games/${name}#readme"
									style="background-image: url('/assets/tools/tools.webp')">
										<span data-name>${name}</span>
										<span data-description>${description}</span>
								</a>
							`)}
						</nav>
					</section>
	
					<section class=community>
						<h2>community-powered games</h2>
						<p>we're making games, and along the way, building tools to improve the indie web game development ecosystem.</p>
						<ul>
							<li>📖 everything we make is open source</li>
							<li>📲 runs on mobile and computer</li>
							<li>💸 community funded</li>
						</ul>
						<nav>
							<a data-link=discord target=_blank href="${urls.discord}">
								<div>${svg(discordSvg)}</div>
								<p>join our community on <strong>discord</strong></p>
							</a>
							<a data-link=github href="${urls.github}">
								<div>${svg(githubSvg)}</div>
								<p>checkout the <strong>github</strong> repos</p>
							</a>
						</nav>
					</section>
				</section>

			</snail-panel>
			<snail-panel>

				<section data-panel=game>
					${games.map(([name, description], index) => html`
	
						<section data-game="${name}">
							<header style="background-image: url('/assets/games/${name}/wallpaper.webp')">
								<h1>
									<img src="/assets/games/${name}/label.webp" alt="${name}"/>
								</h1>
								<p>${description}</p>
								<button>
									${svg(circleTriangleRightFillSvg)}
									<span>play</span>
								</button>
							</header>
							<div>
								<p></p>
							</div>
						</section>
					`)}
				</section>

			</snail-panel>
		</swipe-snail>
	</main>
</body>
</html>

`
