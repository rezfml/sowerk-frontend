module.exports = {
  preset: 'ts-jest',
  verbose: true,
  // tell Jest to handle `*.vue` files
  moduleFileExtensions: ["js", "json", "vue"],
  watchman: false,
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/$1",
    "^~~/(.*)$": "<rootDir>/$1",
    "^@/(.*)$": "<rootDir>/$1",
    '^vue$': 'vue/dist/vue.common.js',
    '@nuxtjs/composition-api': '@nuxtjs/composition-api/lib/cjs/entrypoint.js',
  },
  transform: {
    // process js with `babel-jest`
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  collectCoverage: false,
  collectCoverageFrom: [
    "<rootDir>/components/**/*.vue",
    "<rootDir>/pages/*.vue"
  ],
  transformIgnorePatterns: ['/node_modules/(?!gmap-vue)', '/plugins'],
  globals: {
    'vue-jest': {
      pug: {
        doctype: 'html',
      },
    },
  },
};
