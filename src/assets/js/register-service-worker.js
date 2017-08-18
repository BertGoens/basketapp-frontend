// register service worker

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' })
    .then(function (registration) {
      // Registration was successful

      var newWorker = registration.installing

      // Only hook to .installing
      if (newWorker) {
        console.log('Installing')
        // statechange fires every time the ServiceWorker.state changes
        newWorker.onstatechange = function (e) {
          // show the message on activation
          if (e.target.state == 'activated') { //&& !navigator.serviceWorker.controller) {
            Materialize.toast('Offline ready!', 3000) // 3000 is the duration of the toast
            //document.querySelector('.offline-ready').classList.add('active')
          }
        }
      }

    }).catch(function (error) {
      // registration failed
      console.dir(error)
      console.error('Registration failed with ' + error)
    })
} else {
  // The current browser doesn't support service workers.
  console.log("The current browser doesn't support service workers.")
}