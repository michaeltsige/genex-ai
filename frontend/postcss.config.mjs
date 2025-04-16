// postcss.config.mjs
/** @type {import('postcss').Config} */
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    // autoprefixer is bundled in Next.js by default, but you can add it explicitly:
    // 'autoprefixer': {},
  },
};
