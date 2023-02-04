import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"
import nesting from "postcss-nesting"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: false,
      strict: true,
    }),
  },
  preprocess: preprocess({
    postcss: {
      plugins: [nesting()]
    }
  })
}

export default config
