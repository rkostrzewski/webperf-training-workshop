self.addEventListener('install', function(event) {
  var resourcesToCache = [
    '/index.html',
    '/index.js',
    'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css'
  ]

  // open desired cache
  // each service worker can have several caches
  // that can keep different versions of same resources
  var openCachePromise = caches.open('my-cache')

  // download desired resources and cache them
  var saveResourcesPromise = openCachePromise.then(function (cache) {
    return cache.addAll(resourcesToCache)
  })

  // inform that we are waiting for cache
  event.waitUntil(
    saveResourcesPromise
  )
})

self.addEventListener('fetch', function(event) {
  var getResponseFromCachePromise = caches.match(event.request)

  var responsePromise = getResponseFromCachePromise.then(function(response) {
    // we have cached response
    if (response !== undefined) {
      if (!isApiRequest(event.request)) {
        return response
      } else if (!isRequestStale (event.request)) {
        return response
      }
    }

    console.log('Making request to: ' + event.request.url, 'at:', new Date())
    saveRequestDate(event.request.url, new Date())

    // we don't have response in cache
    // let's fetch the response and cache it for later
    return fetch(event.request).then(function (response) {
      // response may be used only once
      // we need to save clone to put one copy in cache
      // and serve second one
      let responseClone = response.clone()
      
      // open cache and store the cloned response
      caches.open('my-cache').then(function (cache) {
        cache.put(event.request, responseClone)
      })

      return response
    })
  })

  event.respondWith(responsePromise)
})

function isApiRequest(request) {
  return request.url.indexOf('api') > -1
}

function isRequestStale (request) {
  var lastRequestDate = getRequestDate(request.url)

  console.log('isStale', request.url)
  if (!lastRequestDate) {
    console.log('not stale')
    return true
  }

  console.log('diff', Date.now() - lastRequestDate.valueOf())
  return Date.now() - lastRequestDate.valueOf() > 5 * 1000
}

var requestDates = {}

function saveRequestDate(url, date) {
  requestDates[url] = date
}

function getRequestDate(url) {
  var saved = requestDates[url]
  if (!saved) {
    return null
  }

  return new Date(saved)
}
