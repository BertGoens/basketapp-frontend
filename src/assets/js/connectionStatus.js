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
      let onlineMessage = document.querySelector('.online')
      if (onlineMessage) {
        onlineMessage.style.display = 'none'
      }
      // Show offline message
      let offlineMessage = document.querySelector('.offline')
      if (offlineMessage) {
        offlineMessage.style.display = 'block'
      }
    }

    function handleOnline() {
      // Hide offline message
      let offlineMessage = document.querySelector('.offline')
      if (offlineMessage) {
        offlineMessage.style.display = 'none'
      }

      // Show online message
      let onlineMessage = document.querySelector('.online')
      if (onlineMessage) {
        onlineMessage.style.opacity = 1
        onlineMessage.style.display = 'block'

        // Hide the element after some time
        let delayMillis = 1000; //1 second
        setTimeout(function () {
          fadeOut(onlineMessage)
        }, delayMillis);
      }
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
