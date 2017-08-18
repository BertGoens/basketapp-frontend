export default function setupConnectionStatus() {
  window.addEventListener('load', function () {
    // Fade-out functions
    // Old browser compatability
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (fn) {
        let timer = 16.66; // 60 fps
        setTimeout(fn, timer);
      }
    }

    function fadeOut(element) {
      let opacity = 1;
      function decrease() {
        opacity -= 0.05;
        if (opacity <= 0) {
          // complete
          element.style.opacity = 0;
          element.style.display = 'none';
          return true;
        }
        element.style.opacity = opacity;
        requestAnimationFrame(decrease);
      }
      decrease();
    }

    function handleOffline() {
      // Hide online message
      document.querySelector('.online').style.display = 'none'
      // Show offline message
      document.querySelector('.offline').style.display = 'block'
    }

    function handleOnline() {
      // Hide offline message
      document.querySelector('.offline').style.display = 'none'
      // Show online message
      let onlineDiv = document.querySelector('.online')
      onlineDiv.style.opacity = 1
      onlineDiv.style.display = 'block'

      // Hide the element after some time
      let delayMillis = 1000; //1 second
      setTimeout(function () {
        fadeOut(onlineDiv)
      }, delayMillis);
    }

    window.addEventListener('online', function () {
      handleOnline()
    })

    window.addEventListener('offline', function () {
      handleOffline()
    })

    // When we are offline and load up a new page (with a serviceworker) 
    // the status won't change but we still need to display that we are offline
    if (navigator.onLine) {
      // We're online
    } else {
      handleOffline()
    }
  })
}
