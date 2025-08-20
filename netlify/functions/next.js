const { createRequestHandler } = require('@netlify/next')

const handler = createRequestHandler({
  distDir: '.next',
  buildDir: '.next',
})

exports.handler = handler
