import express from "express"
import path from "path"

import * as React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from 'react-router-dom'

import App from "./App"

const app = express()
const PORT = process.env.PORT || 3000

app.use( express.static( path.resolve( __dirname, "../dist" ) ) )

app.get( "/*", (req, res) => {
  const context = { }
  const jsx = (
    <StaticRouter context={ context } location={ req.url }>
      <App />
    </StaticRouter>
  );
  const reactDom = renderToString( jsx )

  res.writeHead( 200, { "Content-Type": "text/html" } )
  res.end( htmlTemplate( reactDom ) )
} );

app.listen( PORT, () => {
  console.log(`server listening on port ${PORT} `)
})

function htmlTemplate( reactDom ) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Communicatie over Grenzen</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
  </head>
  <body>
    <div id="root">${ reactDom }</div>
    <script src="./app.bundle.js"></script>
  </body>
  </html>
  `
}