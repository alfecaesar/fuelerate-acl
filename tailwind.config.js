module.exports = {
  prefix: 'tw-',
  corePlugins: {
    preflight: false, // turns off the reset that was messing with your layout
  },
  content: [
    './layout/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './templates/**/*.liquid',
    './blocks/**/*.liquid',
  ],

  theme: {
    extend: {},
  },

  plugins: [],
}