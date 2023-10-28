// import adapter from "@sveltejs/adapter-vercel";
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: [".md", ".svx"],
	layout: {
		_: "src/routes/terms-of-service/__layout.svelte",
	},
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: [".svelte", ...mdsvexOptions.extensions],
	preprocess: [vitePreprocess({}), mdsvex(mdsvexOptions)],

	kit: {
		// adapter: adapter({
		// 	runtime: "nodejs18.x",
		// }),
		adapter: adapter(),
	},
};

export default config;
