import express from "express"
import path from "path"

import * as React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import createStore, { sagaMiddleware } from './store'
import rootSaga from './sagas'
import { activeSagas } from 'redux-saga'
import { reduxInit } from './actions/utils'
import { requestPage } from './actions/page'
import routes from './routes'

import App from "./App"

const app = express()
const PORT = process.env.PORT || 3000

app.use( express.static( path.resolve( __dirname, "../dist" ) ) )

app.get( "/*", (req, res) => {
  const context = { }
  const store = createStore()
  const rootTask = sagaMiddleware.run(rootSaga)

  store.dispatch( reduxInit() )
  // werkt redux content
  // store.dispatch( requestPage() )

  const dataRequirements =
        routes
            .filter( route => matchPath( req.url, route ) ) // filter matching paths
            .map( route => route.component ) // map to components
            .filter( comp => comp.serverFetch ) // check if components have data requirement
            .map( comp => store.dispatch( comp.serverFetch( ) ) ); // dispatch data requirement

  Promise.all( [dataRequirements, rootTask] ).then( () => { // performance?? the render of content only continues after all serverFetches are resolved

    const jsx = (
      <Provider store={ store }>
        <StaticRouter context={ context } location={ req.url }>
          <App />
        </StaticRouter>
      </Provider>
    );
    const reactDom = renderToString( jsx )
    const reduxState = store.getState()
    console.log(reduxState)
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
    <link rel="stylesheet" type="text/css" href="./style.css">
  </head>
  <body>
    <div id="root">${ reactDom }</div>
    <script>
      window.REDUX_DATA = ${ JSON.stringify( reduxState )}
    </script>
    <script src="./app.bundle.js"></script>
  </body>
  </html>
  `
}