import express from "express"
import path from "path"

import * as React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import createStore from './store'
import { reduxInit } from './actions/utils'
import { requestSeminars } from './actions/seminars'

import routes from './routes'

import App from "./App"


const app = express()
const PORT = process.env.PORT || 33023

app.use( express.static( path.resolve( __dirname, "../dist" ) ) )

app.get( "/*", async (req, res) => {
  const context = { }
  const store = createStore()

  store.dispatch( reduxInit() )
  await store.dispatch( requestSeminars() )

  const dataRequirements =
        routes
            .filter( route => matchPath( req.url, route ) ) // filter matching paths
            .map( route => route.component ) // map to components
            .filter( comp => comp.serverFetch ) // check if components have data requirement
            .map( comp => {
              return store.dispatch( comp.serverFetch( ) )
             } ); // dispatch data requirement

  Promise.all( dataRequirements ).then( () => { // performance?? the render of content only continues after all serverFetches are resolved

    const jsx = (
      <Provider store={ store }>
        <StaticRouter context={ context } location={ req.url }>
          <App />
        </StaticRouter>
      </Provider>
    );
    const reactDom = renderToString( jsx )
    const reduxState = store.getState()

    res.writeHead( 200, { "Content-Type": "text/html" } )
    res.end( htmlTemplate( reactDom, reduxState ) )

  

  } )
} );

app.listen( PORT, () => {
  console.log(`server listening on port ${PORT} `)
})

function htmlTemplate( reactDom, reduxState ) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Communicatie over Grenzen</title>
    <link rel="stylesheet" type="text/css" href="/style.css">
  </head>
  <body>
    <div id="root">${ reactDom }</div>
    <script>
      window.__INITIAL_STATE__ = ${ JSON.stringify( reduxState )}
    </script>
    <script src="/app.bundle.js"></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-135032110-1"></script>
<script>
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());

 gtag('config', 'UA-135032110-1');
</script>
  </body>
  </html>
  `
}