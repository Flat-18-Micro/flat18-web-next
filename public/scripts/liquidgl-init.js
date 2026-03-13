(function () {
  'use strict';

  var didInit = false;
  var didSignal = false;
  var domReady = document.readyState !== 'loading';
  var fallbackTimer = null;
  var attempts = 0;
  var maxAttempts = 80;
  var captureRetries = 0;
  var maxCaptureRetries = 4;

  function getBody() {
    return document.body || null;
  }

  function addPrebuild() {
    var body = getBody();
    if (!body) return;
    body.classList.add('liquid-prebuild');
    if (!fallbackTimer) {
      fallbackTimer = window.setTimeout(function () {
        if (didSignal) return;
        body.classList.remove('liquid-prebuild');
        body.classList.add('liquid-fallback');
      }, 6000);
    }
  }

  function signalReady() {
    if (didSignal) return;
    didSignal = true;
    if (fallbackTimer) {
      window.clearTimeout(fallbackTimer);
      fallbackTimer = null;
    }
    var body = getBody();
    if (body) {
      body.classList.remove('liquid-prebuild');
      body.classList.remove('liquid-fallback');
    }
    try {
      window.dispatchEvent(new Event('liquidgl:init'));
    } catch (e) {
      // Ignore dispatch errors in older browsers.
    }
  }

  function isReady() {
    return Boolean(window.liquidGL && window.html2canvas);
  }

  function getNav() {
    return document.querySelector('.liquidGL-nav');
  }

  function onInstanceInit(instance) {
    if (instance && instance.el && instance.el.style) {
      instance.el.style.pointerEvents = 'auto';
    }
    signalReady();
  }

  function init() {
    if (didInit || !domReady || !isReady()) return false;

    var nav = getNav();
    if (!nav) return false;

    didInit = true;

    var hasButtons = document.querySelector('.btn');

    try {
      window.liquidGL({
        snapshot: 'body',
        target: '.liquidGL-nav',
        resolution: 1.5,
        refraction: 0.01,
        bevelDepth: 0.08,
        bevelWidth: 0.15,
        frost: 0,
        shadow: true,
        specular: false,
        reveal: 'fade',
        tilt: false,
        tiltFactor: 5,
        magnify: 1,
        on: {
          init: onInstanceInit
        }
      });
    } catch (e) {
      didInit = false;
      return false;
    }

    if (window.__liquidGLNoWebGL__) {
      signalReady();
    }

    scheduleSnapshotRetry();

    // if (hasButtons) {
    //   window.liquidGL({
    //     snapshot: 'body',
    //     target: '.btn',
    //     resolution: 1.5,
    //     refraction: 0.008,
    //     bevelDepth: 0.04,
    //     bevelWidth: 0.12,
    //     frost: 0.05,
    //     shadow: true,
    //     specular: true,
    //     reveal: 'fade',
    //     tilt: true,
    //     tiltFactor: 4,
    //     magnify: 1,
    //     on: {
    //       init: onInstanceInit
    //     }
    //   });
    // }

    return true;
  }

  function scheduleSnapshotRetry() {
    var renderer = window.__liquidGLRenderer__;
    if (!renderer || window.__liquidGLNoWebGL__) return;
    if (renderer.texture || renderer._capturing) return;
    if (captureRetries >= maxCaptureRetries) return;
    captureRetries += 1;
    try {
      if (renderer.captureSnapshot) {
        renderer.captureSnapshot();
      }
    } catch (e) {
      // Ignore capture errors; we'll retry.
    }
    window.setTimeout(scheduleSnapshotRetry, 1400);
  }

  function attemptInit() {
    if (!domReady) return;
    if (isReady() && init()) return;
    if (attempts >= maxAttempts) return;
    attempts += 1;
    window.setTimeout(attemptInit, 100);
  }

  function onDomReady() {
    domReady = true;
    addPrebuild();
    attemptInit();
  }

  addPrebuild();

  if (domReady) {
    attemptInit();
  } else {
    document.addEventListener('DOMContentLoaded', onDomReady, { once: true });
  }

  window.addEventListener('load', function () {
    attemptInit();
    window.setTimeout(scheduleSnapshotRetry, 300);
  }, { once: true });
})();
