
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Bastian.Gurtner/Webdev/b-web/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Bastian.Gurtner/Webdev/b-web/src/pages/index.js")),
  "component---src-templates-generic-js": preferDefault(require("/Users/Bastian.Gurtner/Webdev/b-web/src/templates/Generic.js"))
}

