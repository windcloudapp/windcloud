(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var toast = document.getElementById('toast');
  var toastTimer;

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 24);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('show');
    }, 2200);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    return Promise.resolve();
  }

  var copyCode = document.getElementById('copyCode');
  var copyLink = document.getElementById('copyLink');
  var inviteCode = document.getElementById('inviteCode');
  var inviteLink = document.getElementById('inviteLink');

  if (copyCode && inviteCode) {
    copyCode.addEventListener('click', function () {
      copyText(inviteCode.value).then(function () {
        showToast('邀请码已复制');
      });
    });
  }

  if (copyLink && inviteLink) {
    copyLink.addEventListener('click', function () {
      copyText(inviteLink.value).then(function () {
        showToast('邀请链接已复制');
      });
    });
  }

  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  var speedValue = document.getElementById('speedValue');
  var speedFill = document.getElementById('speedFill');
  var pings = document.querySelectorAll('.node-ping');

  pings.forEach(function (el) {
    el.dataset.base = parseInt(el.textContent, 10);
  });

  function jitter(base, range) {
    return Math.round(base + (Math.random() * 2 - 1) * range);
  }

  function updateBandwidth() {
    var val = jitter(30, 4);
    val = Math.max(24, Math.min(36, val));
    if (speedValue) speedValue.textContent = val + '%';
    if (speedFill) speedFill.style.width = val + '%';
  }

  function updatePings() {
    pings.forEach(function (el) {
      var base = parseInt(el.dataset.base, 10);
      var range = Math.max(2, Math.round(base * 0.06));
      var val = Math.max(1, jitter(base, range));
      el.textContent = val + 'ms';
    });
  }

  function tickLiveMetrics() {
    updateBandwidth();
    updatePings();
    setTimeout(tickLiveMetrics, 2000 + Math.random() * 2000);
  }

  updateBandwidth();
  updatePings();
  setTimeout(tickLiveMetrics, 2000);

  var heroContent = document.querySelector('.hero-content');
  var glassCard = document.querySelector('.glass-card');
  var desktopMq = window.matchMedia('(min-width: 961px)');

  function syncHeroCardHeight() {
    if (!heroContent || !glassCard) return;
    if (desktopMq.matches) {
      var h = heroContent.offsetHeight;
      glassCard.style.setProperty('--hero-card-max', h + 'px');
      glassCard.style.height = h + 'px';
      glassCard.style.maxHeight = h + 'px';
    } else {
      glassCard.style.removeProperty('--hero-card-max');
      glassCard.style.height = '';
      glassCard.style.maxHeight = '';
    }
  }

  if (heroContent && glassCard) {
    if (window.ResizeObserver) {
      var heroRo = new ResizeObserver(syncHeroCardHeight);
      heroRo.observe(heroContent);
    }
    desktopMq.addEventListener('change', syncHeroCardHeight);
    window.addEventListener('resize', syncHeroCardHeight);
    window.addEventListener('load', syncHeroCardHeight);
    document.fonts && document.fonts.ready && document.fonts.ready.then(syncHeroCardHeight);
    setTimeout(syncHeroCardHeight, 100);
    setTimeout(syncHeroCardHeight, 800);
    syncHeroCardHeight();
  }
})();
