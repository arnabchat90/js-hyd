const express = require('express')
const http = require('http')
const next = require('next')

const port = process.env.PORT || 8080

const dev = process.env.NODE_ENV !== 'production'
console.log(dev)
const app = next({
  dev,
  dir: './'
})
const handle = app.getRequestHandler()
const bootServer = function () {
  const server = require('./serverconfig')
  server.get('*', handle)

  http.createServer(server).listen(port, () => {
    console.log(`listening on port ${port}`)
  })
}
const bootNext = function () {
  app.prepare().then(() => {
    console.log('after prepare')
    const persistence = require('./persistence/index')
    persistence.configureDB(bootServer);
    
    // handling everything else with Next.js
  })
}

bootNext();
