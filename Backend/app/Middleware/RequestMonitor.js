'use strict'

class RequestMonitor {
  async handle ({ request }, next) {
    console.log(request)

    // call next to advance the request
    await next()
  }
}

module.exports = RequestMonitor
