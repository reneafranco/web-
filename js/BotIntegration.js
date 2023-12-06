 webComponentsLoaderTag = document.createElement('script');
    webComponentsLoaderTag.src = policy.createScriptURL(WEBCOMPONENTS_LOADER_URL);
    if (nonce) {
      webComponentsLoaderTag.setAttribute('nonce', nonce);
    }
    global.document.head.appendChild(webComponentsLoaderTag);
  };

  global.addEventListener('WebComponentsReady', loadDfMessenger, false);

  var raf = global.requestAnimationFrame || global.mozRequestAnimationFrame ||
      global.webkitRequestAnimationFrame || global.msRequestAnimationFrame;
  if (raf) {
    raf(function () {
      global.setTimeout(loadWebComponentPolyfills, 0);
    });
  } else {
    global.addEventListener('load', loadWebComponentPolyfills);
  }
})(window);
