
import {BenevolentWebsiteContext} from "../types.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"

import headBasicsHtml from "../partials/head-basics.html.js"

const urls = {
	discord: "https://discord.gg/BnZx2utdev",
	github: "https://github.com/benevolent-bees/benevolent.games",
	discussions: "https://github.com/benevolent-bees/benevolent.games/discussions",
}

export default ({mode, v, ...options}: BenevolentWebsiteContext) => html`

<!doctype html>
<html class=home>
<head>
	${headBasicsHtml({...options, mode, v, title: "benevolent.games"})}

	<script defer src="/node_modules/es-module-shims/dist/es-module-shims.wasm.js"></script>
	<script defer type=importmap-shim src="${v("/importmap.json")}"></script>
	<script defer type=module-shim src="${v("/main.js")}"></script>

	${
		mode === "production"
		? html`<script defer type=module-shim src="${v("/node_modules/xiome/x/xiome.js")}"></script>`
		: html`<script defer type=module-shim src="${v("/node_modules/xiome/x/xiome-mock.js")}"></script>`
	}
	<style>
		main > h1 > .logo-unit { display: none; }
	</style>
</head>
<body>
	<main>
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
		<h1>
			<div class="logo">
				<div class="logo-unit">
					<img src="/assets/benevolent.svg" alt=""/>
					<span>benevolent.games</span>
				</div>
			</div>
		</h1>
		<div class="slice">
			<hr/>
			<section>
				<h2>community-powered games</h2>
				<p>we're all growing tired of the greed and corporatism of the modern gaming industry. <em>let's make something new!</em></p>
				<h3>introducing humanoid</h3>
				<p><strong>humanoid</strong> is a prototype sandbox game template. it's where we experiment with new game mechanics, building a common platform for developers to make new games. it's an early prototype, and we make progress every week.</p>
				<p>all of the source code and art assets are 100% open source.</p>
				<br/>
				<p>
					<a href="${urls.discord}">🗫 join benevolent on discord</a>
					<br/>
					<a href="${urls.discussions}">💬 see updates on the discussions board</a>
					<br/>
					<a href="${urls.github}">👨‍💻 collaborate together on github</a>
				</p>
			</section>
			<hr/>
			<h2 class="believe">we believe games can...</h2>
			<div class="explaingrid">
				<div>
					<h3>🌎 run on any device</h3>
					<h4>let's invite everyone to play.</h4>
					<p>laptops, desktops, phones, and eventually, even vr. we develop games for the web, where no installations are required.</p>
				</div>
				<div>
					<h3>📖 be open source</h3>
					<h4>mit licensed.</h4>
					<p>anybody can freely contribute, use our code and art, fork our games, and make their own new games. let's blur the lines between developers, modders, and the community.</p>
				</div>
				<div>
					<h3>😇 involve the community</h3>
					<h4>games don't need secrecy or nda's.</h4>
					<p>join the developers for weekly play-testing sessions, participate in discussions about new ideas, and report bugs directly to our github issues page.</p>
				</div>
				<div>
					<h3>💸 be funded by donations</h3>
					<h4>what goes around comes around.</h4>
					<p>we believe that if developers act with benevolence and generosity towards gamers, the community just might return the favor.</p>
				</div>
			</div>
			<hr/>
			<footer>
				<p>join the <a href="${urls.discord}">discord</a> and get involved on <a href="${urls.github}">github</a></p>
			</footer>
		</div>
	</main>
</body>
</html>

`
