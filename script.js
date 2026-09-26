/**
 * Forsko Platform - Main Script
 * Isolated functions to prevent script crashes across pages.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFAB();
  initStudyTips();
  initCounterStats();
});

/* ==========================================================================
   1. Mobile Hamburger Menu
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      const icon = hamburger.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
          icon.classList.replace('fa-xmark', 'fa-bars');
        }
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) icon.classList.replace('fa-xmark', 'fa-bars');
      });
    });
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const visualCard = document.getElementById('aboutVisualCard');
  const spotlight = document.getElementById('aboutSpotlight');

  if (visualCard) {
    visualCard.addEventListener('mousemove', (e) => {
      const rect = visualCard.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X inside card
      const y = e.clientY - rect.top;  // Mouse Y inside card

      // Update light spotlight position
      if (spotlight) {
        visualCard.style.setProperty('--spot-x', `${x}px`);
        visualCard.style.setProperty('--spot-y', `${y}px`);
      }

      // Calculate 3D Parallax Tilt Angles
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8; // Max tilt 8 deg
      const rotateY = ((x - centerX) / centerX) * 8;

      visualCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    // Reset card position smoothly on mouse leave
    visualCard.addEventListener('mouseleave', () => {
      visualCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  }
});


// ==========================================
// Forsko - Bento Grid 3D Tilt & Spotlight
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const bentoCards = document.querySelectorAll('.bento-card[data-tilt]');

  bentoCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X inside card
      const y = e.clientY - rect.top;  // Mouse Y inside card

      // Update light spotlight position
      card.style.setProperty('--bento-x', `${x}px`);
      card.style.setProperty('--bento-y', `${y}px`);

      // Calculate 3D Parallax Tilt Angles
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6; // Max tilt 6 deg
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.015)`;
    });

    // Reset card position smoothly on mouse leave
    card.style.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
    });
  });
});

/**
 * Forsko
 * iOS 18 Liquid Glass Floating Action Button
 */

(function () {
  "use strict";

  function initFAB() {
    const fabContainer = document.getElementById("fabContainer");
    const fabMainBtn = document.getElementById("fabMainBtn");
    const fabMenu = document.getElementById("fabMenu");
    const fabBackdrop = document.getElementById("fabBackdrop");
    const fabProgressCircle = document.getElementById("fabProgressCircle");

    const fabSearch = document.getElementById("fabSearch");
    const fabBackToTop = document.getElementById("fabBackToTop");
    const fabFeedback = document.getElementById("fabFeedback");

    const menuItems = document.querySelectorAll(".fab-menu-item");

    // Stop safely if FAB doesn't exist on the page
    if (!fabContainer || !fabMainBtn) {
      return;
    }

    let lastScrollY = window.scrollY || 0;
    let ticking = false;

    /* ==========================================
       OPEN / CLOSE MENU
       ========================================== */

    function openFabMenu() {
      fabContainer.classList.add("active");

      if (fabBackdrop) {
        fabBackdrop.classList.add("active");
      }

      fabMainBtn.setAttribute("aria-expanded", "true");

      if (fabMenu) {
        fabMenu.setAttribute("aria-hidden", "false");
      }
    }

    function closeFabMenu() {
      fabContainer.classList.remove("active");

      if (fabBackdrop) {
        fabBackdrop.classList.remove("active");
      }

      fabMainBtn.setAttribute("aria-expanded", "false");

      if (fabMenu) {
        fabMenu.setAttribute("aria-hidden", "true");
      }
    }

    function toggleFabMenu(event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      const isActive = fabContainer.classList.contains("active");

      if (isActive) {
        closeFabMenu();
      } else {
        openFabMenu();
      }
    }

    /* ==========================================
       MAIN BUTTON
       ========================================== */

    fabMainBtn.addEventListener("click", toggleFabMenu);

    /* ==========================================
       BACKDROP
       ========================================== */

    if (fabBackdrop) {
      fabBackdrop.addEventListener("click", closeFabMenu);
    }

    /* ==========================================
       SEARCH
       ========================================== */

    if (fabSearch) {
      fabSearch.addEventListener("click", function (event) {
        event.preventDefault();

        closeFabMenu();

        const searchInput =
          document.getElementById("searchInput") ||
          document.getElementById("globalSearchInput");

        const searchSection = document.getElementById("search");

        if (searchSection) {
          searchSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }

        if (searchInput) {
          setTimeout(function () {
            searchInput.focus();
          }, 500);
        }
      });
    }

    /* ==========================================
       BACK TO TOP
       ========================================== */

    if (fabBackToTop) {
      fabBackToTop.addEventListener("click", function (event) {
        event.preventDefault();

        closeFabMenu();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }

    /* ==========================================
       FEEDBACK
       ========================================== */

    if (fabFeedback) {
      fabFeedback.addEventListener("click", function (event) {
        event.preventDefault();

        closeFabMenu();

        window.location.href =
          "https://forms.gle/d7s2tebfezbqtuK68";
      });
    }

    /* ==========================================
       MENU LINKS
       ========================================== */

    menuItems.forEach(function (item) {
      if (item.tagName === "A") {
        item.addEventListener("click", function () {
          closeFabMenu();
        });
      }
    });

    /* ==========================================
       OUTSIDE CLICK
       ========================================== */

    document.addEventListener("click", function (event) {
      if (!fabContainer.classList.contains("active")) {
        return;
      }

      if (!fabContainer.contains(event.target)) {
        closeFabMenu();
      }
    });

    /* ==========================================
       ESCAPE KEY
       ========================================== */

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeFabMenu();
      }
    });

    /* ==========================================
       SCROLL PROGRESS + AUTO HIDE
       ========================================== */

    function updateFABOnScroll() {
      const currentScrollY = window.scrollY || 0;

      const documentHeight =
        document.documentElement.scrollHeight;

      const viewportHeight =
        window.innerHeight;

      const totalHeight =
        documentHeight - viewportHeight;

      /* Scroll Progress */
      if (fabProgressCircle && totalHeight > 0) {
        const progress = Math.min(
          Math.max(currentScrollY / totalHeight, 0),
          1
        );

        const circumference = 170;
        const dashOffset =
          circumference - progress * circumference;

        fabProgressCircle.style.strokeDashoffset =
          dashOffset.toFixed(2);
      }

      /* Auto Hide */
      if (!fabContainer.classList.contains("active")) {
        if (
          currentScrollY > lastScrollY &&
          currentScrollY > 150
        ) {
          fabContainer.classList.add("fab-hidden");
        } else {
          fabContainer.classList.remove("fab-hidden");
        }
      } else {
        fabContainer.classList.remove("fab-hidden");
      }

      lastScrollY = currentScrollY;
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(updateFABOnScroll);
          ticking = true;
        }
      },
      { passive: true }
    );

    /* ==========================================
       INITIAL STATE
       ========================================== */

    closeFabMenu();
    updateFABOnScroll();
  }

  /* ==========================================
     SAFE INITIALIZATION
     ========================================== */

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initFAB,
      { once: true }
    );
  } else {
    initFAB();
  }
})();


// ==========================================
// Forsko - Hero Section 3D Tilt & Spotlight
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const codeWindow = document.getElementById('heroCodeWindow');
  const codeSpotlight = document.getElementById('codeSpotlight');

  if (codeWindow) {
    codeWindow.addEventListener('mousemove', (e) => {
      const rect = codeWindow.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X inside window
      const y = e.clientY - rect.top;  // Mouse Y inside window

      // Update cursor light spotlight
      if (codeSpotlight) {
        codeWindow.style.setProperty('--code-x', `${x}px`);
        codeWindow.style.setProperty('--code-y', `${y}px`);
      }

      // Calculate 3D Parallax Tilt Angles
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7; // Max tilt 7 deg
      const rotateY = ((x - centerX) / centerX) * 7;

      codeWindow.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    // Reset transform on mouse leave
    codeWindow.addEventListener('mouseleave', () => {
      codeWindow.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  }
});

/* ==========================================================================
   5. Interactive Counter Stats & 3D Parallax Tilt
   ========================================================================== */
function initCounterStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  const statsSection = document.querySelector('.stats-section');
  const statCards = document.querySelectorAll('.stat-card[data-tilt]');

  if (!statsSection || statNumbers.length === 0) return;

  let animated = false;

  /* --------------------------------------------------------------------------
     A. Smooth Ease-Out Deceleration Counter Animation
     -------------------------------------------------------------------------- */
  function runCounterAnimation() {
    if (animated) return;
    animated = true;

    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'), 10) || 0;
      if (target === 0) return;

      const duration = 1600; // 1.6s total time
      const startTime = performance.now();

      // Cubic Ease-Out curve for smooth deceleration
      function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
      }

      function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = easeOutCubic(progress);

        const currentCount = Math.floor(easedProgress * target);

        if (progress < 1) {
          stat.innerText = currentCount + '+';
          requestAnimationFrame(updateCounter);
        } else {
          stat.innerText = target + '+';
          
          // Subtle completion pulse animation on completion
          stat.style.transform = 'scale(1.15)';
          setTimeout(() => {
            stat.style.transform = 'scale(1)';
          }, 200);
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  // Trigger animation using IntersectionObserver
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        runCounterAnimation();
      }
    }, { threshold: 0.15 });

    observer.observe(statsSection);
  } else {
    runCounterAnimation();
  }

  /* --------------------------------------------------------------------------
     B. Mouse Spotlight & 3D Tilt Parallax Effect
     -------------------------------------------------------------------------- */
  statCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X inside card
      const y = e.clientY - rect.top;  // Mouse Y inside card

      // Update cursor light spotlight position
      card.style.setProperty('--stat-x', `${x}px`);
      card.style.setProperty('--stat-y', `${y}px`);

      // Calculate 3D Parallax Tilt Angles
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg tilt
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    });

    // Reset card position smoothly on mouse leave
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
    });
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleUpdatesBtn');
  const gridWrapper = document.getElementById('updatesGridWrapper');
  const toggleText = document.getElementById('toggleUpdatesText');
  const toggleIcon = document.getElementById('toggleUpdatesIcon');

  if (!toggleBtn || !gridWrapper) return;

  toggleBtn.addEventListener('click', () => {
    const isCollapsed = gridWrapper.classList.toggle('collapsed');

    if (isCollapsed) {
      toggleText.textContent = 'Show';
      toggleIcon.className = 'fa-solid fa-chevron-down';
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      toggleText.textContent = 'Hide';
      toggleIcon.className = 'fa-solid fa-chevron-up';
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  });
});
// Call initializer
document.addEventListener('DOMContentLoaded', initCounterStats);



/* ==========================================================================
   FORSKO KNOWLEDGE UNIVERSE - High-Performance Controller
   ========================================================================== */

(function () {
  'use strict';

  function initForskoUniverse() {
    const stage = document.getElementById('fkKnowledgeUniverse');
    if (!stage) return;

    const nucleus = stage.querySelector('#fkCore');
    const nodes = stage.querySelectorAll('.fk-node-carrier');
    const tiers = stage.querySelectorAll('.fk-orbit-tier');

    // Accessibility: Reduced Motion Check
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    function checkReducedMotion() {
      if (motionQuery.matches) {
        tiers.forEach(t => (t.style.animation = 'none'));
        nodes.forEach(n => (n.style.animation = 'none'));
      }
    }
    checkReducedMotion();
    if (typeof motionQuery.addEventListener === 'function') {
      motionQuery.addEventListener('change', checkReducedMotion);
    }

    // High Performance Smooth Mouse Parallax (rAF)
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    let isHovered = false;
    let rafId = null;

    function lerp(start, end, factor) {
      return start + (end - start) * factor;
    }

    function updateParallax() {
      if (motionQuery.matches) return;

      currentX = lerp(currentX, mouseX, 0.08);
      currentY = lerp(currentY, mouseY, 0.08);

      stage.style.transform = `perspective(1200px) rotateX(${-currentY * 6}deg) rotateY(${currentX * 6}deg)`;

      if (nucleus) {
        nucleus.style.transform = `translate3d(${-currentX * 12}px, ${-currentY * 12}px, 20px)`;
      }

      if (isHovered || Math.abs(currentX) > 0.001 || Math.abs(currentY) > 0.001) {
        rafId = requestAnimationFrame(updateParallax);
      } else {
        stage.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
        if (nucleus) nucleus.style.transform = 'translate3d(0, 0, 0)';
        rafId = null;
      }
    }

    function onPointerMove(e) {
      const rect = stage.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      mouseX = Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width / 2)));
      mouseY = Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height / 2)));

      if (!rafId) rafId = requestAnimationFrame(updateParallax);
    }

    stage.addEventListener('mouseenter', () => {
      isHovered = true;
      if (!rafId) rafId = requestAnimationFrame(updateParallax);
    });

    stage.addEventListener('mousemove', onPointerMove, { passive: true });

    stage.addEventListener('mouseleave', () => {
      isHovered = false;
      mouseX = 0;
      mouseY = 0;
    });

    // Touch Support for Mobile
    let activeNode = null;

    nodes.forEach(node => {
      node.addEventListener('touchend', (e) => {
        if (activeNode !== node) {
          e.preventDefault();
          e.stopPropagation();

          if (activeNode) {
            const oldTooltip = activeNode.querySelector('.fk-hud-tooltip');
            if (oldTooltip) {
              oldTooltip.style.visibility = 'hidden';
              oldTooltip.style.opacity = '0';
            }
          }

          activeNode = node;
          const tooltip = node.querySelector('.fk-hud-tooltip');
          if (tooltip) {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
          }
        }
      });
    });

    document.addEventListener('touchstart', (e) => {
      if (activeNode && !stage.contains(e.target)) {
        const tooltip = activeNode.querySelector('.fk-hud-tooltip');
        if (tooltip) {
          tooltip.style.visibility = 'hidden';
          tooltip.style.opacity = '0';
        }
        activeNode = null;
      }
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initForskoUniverse, { once: true });
  } else {
    initForskoUniverse();
  }
})();


/* ==========================================================================
   FORSKO 3D HOLOGRAPHIC TILES - INTERACTION CONTROLLER
   ========================================================================== */

(() => {
  'use strict';

  function initHologramStage() {
    const stage = document.getElementById('fhHologramStage');
    if (!stage || stage.dataset.initialized === 'true') return;
    stage.dataset.initialized = 'true';

    const cluster = document.getElementById('fhTilesCluster');
    const logoCore = document.getElementById('fhHoloLogoCore');
    if (!cluster) return;

    let mouseX = 0, mouseY = 0;
    let currX = 0, currY = 0;
    let isHovering = false;
    let rafId = null;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    function renderParallax() {
      currX = lerp(currX, mouseX, 0.08);
      currY = lerp(currY, mouseY, 0.08);

      // Tilt entire holographic fan in 3D
      cluster.style.transform = `perspective(1200px) rotateX(${-currY * 9}deg) rotateY(${currX * 9}deg)`;

      // Logo shifts in opposite direction for visual depth
      if (logoCore) {
        logoCore.style.transform = `translate3d(calc(-50% + ${-currX * 12}px), ${-currY * 12}px, 110px)`;
      }

      if (isHovering || Math.abs(currX) > 0.001 || Math.abs(currY) > 0.001) {
        rafId = requestAnimationFrame(renderParallax);
      } else {
        cluster.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
        if (logoCore) {
          logoCore.style.transform = 'translate3d(-50%, 0, 110px)';
        }
        rafId = null;
      }
    }

    function onPointerMove(e) {
      const rect = stage.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      mouseX = Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width / 2)));
      mouseY = Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height / 2)));

      if (!rafId) rafId = requestAnimationFrame(renderParallax);
    }

    stage.addEventListener('mouseenter', () => {
      isHovering = true;
      if (!rafId) rafId = requestAnimationFrame(renderParallax);
    });

    stage.addEventListener('mousemove', onPointerMove, { passive: true });

    stage.addEventListener('mouseleave', () => {
      isHovering = false;
      mouseX = 0;
      mouseY = 0;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHologramStage, { once: true });
  } else {
    initHologramStage();
  }
})();



/* ==========================================================================
   FORSKO 3D HOLOGRAPHIC TILES - INTERACTION CONTROLLER
   ========================================================================== */

(() => {
  'use strict';

  function initHologramStage() {
    const stage = document.getElementById('fhHologramStage');
    if (!stage || stage.dataset.initialized === 'true') return;
    stage.dataset.initialized = 'true';

    const cluster = document.getElementById('fhTilesCluster');
    const logoCore = document.getElementById('fhHoloLogoCore');
    if (!cluster) return;

    let mouseX = 0, mouseY = 0;
    let currX = 0, currY = 0;
    let isHovering = false;
    let rafId = null;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    function renderParallax() {
      currX = lerp(currX, mouseX, 0.08);
      currY = lerp(currY, mouseY, 0.08);

      // Tilt entire holographic fan in 3D
      cluster.style.transform = `perspective(1200px) rotateX(${-currY * 9}deg) rotateY(${currX * 9}deg)`;

      // Logo shifts in opposite direction for visual depth
      if (logoCore) {
        logoCore.style.transform = `translate3d(calc(-50% + ${-currX * 12}px), ${-currY * 12}px, 110px)`;
      }

      if (isHovering || Math.abs(currX) > 0.001 || Math.abs(currY) > 0.001) {
        rafId = requestAnimationFrame(renderParallax);
      } else {
        cluster.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
        if (logoCore) {
          logoCore.style.transform = 'translate3d(-50%, 0, 110px)';
        }
        rafId = null;
      }
    }

    function onPointerMove(e) {
      const rect = stage.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      mouseX = Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width / 2)));
      mouseY = Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height / 2)));

      if (!rafId) rafId = requestAnimationFrame(renderParallax);
    }

    stage.addEventListener('mouseenter', () => {
      isHovering = true;
      if (!rafId) rafId = requestAnimationFrame(renderParallax);
    });

    stage.addEventListener('mousemove', onPointerMove, { passive: true });

    stage.addEventListener('mouseleave', () => {
      isHovering = false;
      mouseX = 0;
      mouseY = 0;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHologramStage, { once: true });
  } else {
    initHologramStage();
  }
})();




/* =========================================================
   FORSKO INDEX HERO VISUAL SWITCHER
   FH = Holographic Resource Tiles
   FK = Knowledge Universe
   IMPORTANT:
   Runs ONLY on index.html / root homepage.
   Contact page and every other page are untouched.
   ========================================================= */
(function () {
  'use strict';

  const path = window.location.pathname.toLowerCase();

  const isIndexPage =
    path === '/' ||
    path === '/index.html' ||
    path.endsWith('/index.html');

  if (!isIndexPage) return;

  const fh = document.getElementById('fhHeroVisual');
  const fk = document.getElementById('fkHeroVisual');

  if (!fh && !fk) return;

  const modes = [];
  if (fh) modes.push('fh');
  if (fk) modes.push('fk');

  if (!modes.length) return;

  const KEY = 'forskoIndexHeroVisualMode';
  let previous = null;

  try {
    previous = sessionStorage.getItem(KEY);
  } catch (e) {}

  let selected;

  if (modes.length === 1) {
    selected = modes[0];
  } else if (!modes.includes(previous)) {
    selected = modes[Math.floor(Math.random() * modes.length)];
  } else {
    const alternatives = modes.filter(mode => mode !== previous);
    selected = alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  try {
    sessionStorage.setItem(KEY, selected);
  } catch (e) {}

  function show(element, visible) {
    if (!element) return;

    element.setAttribute('aria-hidden', visible ? 'false' : 'true');
    element.style.display = visible ? 'block' : 'none';
  }

  show(fh, selected === 'fh');
  show(fk, selected === 'fk');

  document.documentElement.dataset.forskoHeroVisual = selected;
})();


/* =========================================================
   HOLOGRAPHIC RESOURCE TILES — EXISTING INTERACTION
   ========================================================= */
(function () {
  'use strict';

  function initHologramStage() {
    const stage = document.getElementById('fhHologramStage');
    if (!stage || stage.dataset.initialized === 'true') return;

    stage.dataset.initialized = 'true';

    const cluster = document.getElementById('fhTilesCluster');
    const logoCore = document.getElementById('fhHoloLogoCore');

    if (!cluster) return;

    let mouseX = 0;
    let mouseY = 0;
    let currX = 0;
    let currY = 0;
    let isHovering = false;
    let rafId = null;

    const lerp = (start, end, factor) =>
      start + (end - start) * factor;

    function renderParallax() {
      currX = lerp(currX, mouseX, 0.08);
      currY = lerp(currY, mouseY, 0.08);

      cluster.style.transform =
        `perspective(1200px) rotateX(${-currY * 9}deg) rotateY(${currX * 9}deg)`;

      if (logoCore) {
        logoCore.style.transform =
          `translate3d(calc(-50% + ${-currX * 12}px), ${-currY * 12}px, 110px)`;
      }

      if (
        isHovering ||
        Math.abs(currX) > 0.001 ||
        Math.abs(currY) > 0.001
      ) {
        rafId = requestAnimationFrame(renderParallax);
      } else {
        cluster.style.transform =
          'perspective(1200px) rotateX(0deg) rotateY(0deg)';

        if (logoCore) {
          logoCore.style.transform =
            'translate3d(-50%,0,110px)';
        }

        rafId = null;
      }
    }

    function onPointerMove(e) {
      const rect = stage.getBoundingClientRect();

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      mouseX = Math.max(
        -1,
        Math.min(
          1,
          (e.clientX - cx) / (rect.width / 2)
        )
      );

      mouseY = Math.max(
        -1,
        Math.min(
          1,
          (e.clientY - cy) / (rect.height / 2)
        )
      );

      if (!rafId) {
        rafId = requestAnimationFrame(renderParallax);
      }
    }

    stage.addEventListener('mouseenter', () => {
      isHovering = true;

      if (!rafId) {
        rafId = requestAnimationFrame(renderParallax);
      }
    });

    stage.addEventListener(
      'mousemove',
      onPointerMove,
      { passive: true }
    );

    stage.addEventListener('mouseleave', () => {
      isHovering = false;
      mouseX = 0;
      mouseY = 0;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      initHologramStage,
      { once: true }
    );
  } else {
    initHologramStage();
  }
})();


/* =========================================================
   KNOWLEDGE UNIVERSE — SAFE INTERACTION INIT
   ========================================================= */
(function () {
  'use strict';

  function initForskoUniverse() {
    const stage = document.getElementById('fkKnowledgeUniverse');
    if (!stage || stage.dataset.switcherInitialized === 'true') return;

    stage.dataset.switcherInitialized = 'true';

    const nucleus = stage.querySelector('#fkCore');
    const nodes = stage.querySelectorAll('.fk-node-carrier');
    const tiers = stage.querySelectorAll('.fk-orbit-tier');

    const motionQuery =
      window.matchMedia('(prefers-reduced-motion: reduce)');

    function checkReducedMotion() {
      if (motionQuery.matches) {
        tiers.forEach(tier => tier.style.animation = 'none');
        nodes.forEach(node => node.style.animation = 'none');
      }
    }

    checkReducedMotion();

    if (typeof motionQuery.addEventListener === 'function') {
      motionQuery.addEventListener('change', checkReducedMotion);
    }

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovered = false;
    let rafId = null;

    function lerp(start, end, factor) {
      return start + (end - start) * factor;
    }

    function updateParallax() {
      if (motionQuery.matches) return;

      currentX = lerp(currentX, mouseX, 0.08);
      currentY = lerp(currentY, mouseY, 0.08);

      stage.style.transform =
        `perspective(1200px) rotateX(${-currentY * 6}deg) rotateY(${currentX * 6}deg)`;

      if (nucleus) {
        nucleus.style.transform =
          `translate3d(${-currentX * 12}px, ${-currentY * 12}px, 20px)`;
      }

      if (
        isHovered ||
        Math.abs(currentX) > 0.001 ||
        Math.abs(currentY) > 0.001
      ) {
        rafId = requestAnimationFrame(updateParallax);
      } else {
        stage.style.transform =
          'perspective(1200px) rotateX(0deg) rotateY(0deg)';

        if (nucleus) {
          nucleus.style.transform =
            'translate3d(0,0,0)';
        }

        rafId = null;
      }
    }

    function onPointerMove(e) {
      const rect = stage.getBoundingClientRect();

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      mouseX = Math.max(
        -1,
        Math.min(
          1,
          (e.clientX - cx) / (rect.width / 2)
        )
      );

      mouseY = Math.max(
        -1,
        Math.min(
          1,
          (e.clientY - cy) / (rect.height / 2)
        )
      );

      if (!rafId) {
        rafId = requestAnimationFrame(updateParallax);
      }
    }

    stage.addEventListener('mouseenter', () => {
      isHovered = true;

      if (!rafId) {
        rafId = requestAnimationFrame(updateParallax);
      }
    });

    stage.addEventListener(
      'mousemove',
      onPointerMove,
      { passive: true }
    );

    stage.addEventListener('mouseleave', () => {
      isHovered = false;
      mouseX = 0;
      mouseY = 0;
    });

    let activeNode = null;

    nodes.forEach(node => {
      node.addEventListener('touchend', e => {
        if (activeNode !== node) {
          e.preventDefault();
          e.stopPropagation();

          if (activeNode) {
            const oldTooltip =
              activeNode.querySelector('.fk-hud-tooltip');

            if (oldTooltip) {
              oldTooltip.style.visibility = 'hidden';
              oldTooltip.style.opacity = '0';
            }
          }

          activeNode = node;

          const tooltip =
            node.querySelector('.fk-hud-tooltip');

          if (tooltip) {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
          }
        }
      });
    });

    document.addEventListener(
      'touchstart',
      e => {
        if (activeNode && !stage.contains(e.target)) {
          const tooltip =
            activeNode.querySelector('.fk-hud-tooltip');

          if (tooltip) {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
          }

          activeNode = null;
        }
      },
      { passive: true }
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      initForskoUniverse,
      { once: true }
    );
  } else {
    initForskoUniverse();
  }
})();

/* ==========================================================================
   FORSKO 3D HOLOGRAPHIC TILES - INTERACTION CONTROLLER
   ========================================================================== */

(() => {
  'use strict';

  function initHologramStage() {
    const stage = document.getElementById('fhHologramStage');
    if (!stage || stage.dataset.initialized === 'true') return;
    stage.dataset.initialized = 'true';

    const cluster = document.getElementById('fhTilesCluster');
    const logoCore = document.getElementById('fhHoloLogoCore');
    if (!cluster) return;

    let mouseX = 0, mouseY = 0;
    let currX = 0, currY = 0;
    let isHovering = false;
    let rafId = null;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    function renderParallax() {
      currX = lerp(currX, mouseX, 0.08);
      currY = lerp(currY, mouseY, 0.08);

      // Tilt entire holographic fan in 3D
      cluster.style.transform = `perspective(1200px) rotateX(${-currY * 9}deg) rotateY(${currX * 9}deg)`;

      // Logo shifts in opposite direction for visual depth
      if (logoCore) {
        logoCore.style.transform = `translate3d(calc(-50% + ${-currX * 12}px), ${-currY * 12}px, 110px)`;
      }

      if (isHovering || Math.abs(currX) > 0.001 || Math.abs(currY) > 0.001) {
        rafId = requestAnimationFrame(renderParallax);
      } else {
        cluster.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
        if (logoCore) {
          logoCore.style.transform = 'translate3d(-50%, 0, 110px)';
        }
        rafId = null;
      }
    }

    function onPointerMove(e) {
      const rect = stage.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      mouseX = Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width / 2)));
      mouseY = Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height / 2)));

      if (!rafId) rafId = requestAnimationFrame(renderParallax);
    }

    stage.addEventListener('mouseenter', () => {
      isHovering = true;
      if (!rafId) rafId = requestAnimationFrame(renderParallax);
    });

    stage.addEventListener('mousemove', onPointerMove, { passive: true });

    stage.addEventListener('mouseleave', () => {
      isHovering = false;
      mouseX = 0;
      mouseY = 0;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHologramStage, { once: true });
  } else {
    initHologramStage();
  }
})();


/* ==========================================================================
   FORSKO LEARNING DNA — ISOLATED INTERACTION CONTROLLER
   ========================================================================== */

(function () {
  'use strict';

  function initForskoLearningDNA() {
    const scope = document.getElementById('fldHeroScope');
    if (!scope || scope.dataset.fldInitialized === 'true') {
      return;
    }
    scope.dataset.fldInitialized = 'true';

    // 1. Cached Elements
    const stage = document.getElementById('fldDnaStage');
    const core = document.getElementById('fldDnaCore');
    const nodes = Array.from(scope.querySelectorAll('.fld-node'));
    const svgRungs = {
      syllabus: scope.querySelector('.fld-rung-1'),
      notes: scope.querySelector('.fld-rung-1'),
      pyqs: scope.querySelector('.fld-rung-2'),
      'question-bank': scope.querySelector('.fld-rung-2'),
      practicals: scope.querySelector('.fld-rung-4'),
      'paper-patterns': scope.querySelector('.fld-rung-4')
    };

    if (!stage || !core || nodes.length === 0) {
      return;
    }

    // 2. Reduced Motion Configuration
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = motionQuery.matches;

    const handleMotionChange = (e) => {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion) {
        targetX = 0;
        targetY = 0;
        currentX = 0;
        currentY = 0;
        stage.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
        if (core) core.style.transform = 'translate(-50%, -50%) translateZ(55px)';
      }
    };

    if (typeof motionQuery.addEventListener === 'function') {
      motionQuery.addEventListener('change', handleMotionChange);
    } else if (typeof motionQuery.addListener === 'function') {
      motionQuery.addListener(handleMotionChange);
    }

    // 3. Smooth Physical Parallax (Max ±2.5 deg)
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovered = false;
    let isVisible = true;
    let rafId = null;

    const MAX_TILT = 2.5; 
    const EASING = 0.05; // Calm physical glide

    const lerp = (start, end, factor) => start + (end - start) * factor;

    function renderParallax() {
      if (!isVisible) {
        rafId = requestAnimationFrame(renderParallax);
        return;
      }

      if (!prefersReducedMotion) {
        currentX = lerp(currentX, targetX, EASING);
        currentY = lerp(currentY, targetY, EASING);

        const tiltX = (-currentY * MAX_TILT).toFixed(2);
        const tiltY = (currentX * MAX_TILT).toFixed(2);

        stage.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

        // Counter-shift keeps central logo steady in 3D space
        if (core) {
          const coreOffsetX = (-currentX * 6).toFixed(2);
          const coreOffsetY = (-currentY * 6).toFixed(2);
          core.style.transform = `translate(calc(-50% + ${coreOffsetX}px), calc(-50% + ${coreOffsetY}px)) translateZ(55px)`;
        }

        if (!isHovered && Math.abs(currentX) < 0.0005 && Math.abs(currentY) < 0.0005) {
          stage.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
          if (core) core.style.transform = 'translate(-50%, -50%) translateZ(55px)';
        }
      }

      rafId = requestAnimationFrame(renderParallax);
    }

    function onPointerMove(e) {
      if (prefersReducedMotion) return;

      const rect = scope.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const midX = rect.left + rect.width / 2;
      const midY = rect.top + rect.height / 2;

      targetX = Math.max(-1, Math.min(1, (e.clientX - midX) / (rect.width / 2)));
      targetY = Math.max(-1, Math.min(1, (e.clientY - midY) / (rect.height / 2)));
    }

    scope.addEventListener('pointerenter', () => { isHovered = true; });
    scope.addEventListener('pointermove', onPointerMove, { passive: true });
    scope.addEventListener('pointerleave', () => {
      isHovered = false;
      targetX = 0;
      targetY = 0;
    });

    // 4. Resource Hover & Node Focus System
    let corePulseTimer = null;

    function activateNode(node) {
      const resourceKey = node.dataset.resource;

      // Highlight Connected Rung
      const connectedRung = svgRungs[resourceKey];
      if (connectedRung) {
        connectedRung.style.stroke = '#38bdf8';
        connectedRung.style.strokeWidth = '2.8px';
        connectedRung.style.strokeDasharray = 'none';
        connectedRung.style.filter = 'drop-shadow(0 0 8px #38bdf8)';
      }

      // Energy Pulse feedback into FORSKO Core
      if (core) {
        const capsule = core.querySelector('.fld-core-capsule');
        if (capsule) {
          capsule.style.borderColor = '#ffffff';
          capsule.style.boxShadow = '0 0 45px rgba(56, 189, 248, 0.85), inset 0 0 30px rgba(56, 189, 248, 0.5)';
        }

        if (corePulseTimer) clearTimeout(corePulseTimer);
        corePulseTimer = setTimeout(() => {
          if (capsule) {
            capsule.style.borderColor = '';
            capsule.style.boxShadow = '';
          }
        }, 420);
      }
    }

    function deactivateNode(node) {
      const resourceKey = node.dataset.resource;

      const connectedRung = svgRungs[resourceKey];
      if (connectedRung) {
        connectedRung.style.stroke = '';
        connectedRung.style.strokeWidth = '';
        connectedRung.style.strokeDasharray = '';
        connectedRung.style.filter = '';
      }
    }

    // Accessible Listeners
    nodes.forEach((node) => {
      node.addEventListener('mouseenter', () => activateNode(node));
      node.addEventListener('mouseleave', () => deactivateNode(node));
      node.addEventListener('focus', () => activateNode(node));
      node.addEventListener('blur', () => deactivateNode(node));

      // Mobile Touch Handling
      node.addEventListener('touchend', (e) => {
        if (!node.classList.contains('fld-node-active')) {
          e.preventDefault();
          nodes.forEach((n) => {
            n.classList.remove('fld-node-active');
            deactivateNode(n);
          });
          node.classList.add('fld-node-active');
          activateNode(node);
        }
      }, { passive: false });
    });

    document.addEventListener('touchstart', (e) => {
      if (!scope.contains(e.target)) {
        nodes.forEach((n) => {
          n.classList.remove('fld-node-active');
          deactivateNode(n);
        });
      }
    }, { passive: true });

    // 5. Visibility Detection
    let observer = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      }, { threshold: 0.1 });

      observer.observe(scope);
    }

    // 6. Start Loop
    rafId = requestAnimationFrame(renderParallax);
  }

  // Safe DOM Bootstrapper
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initForskoLearningDNA, { once: true });
  } else {
    initForskoLearningDNA();
  }
})();

/* ==========================================================================
   FORSKO LEARNING DNA — ISOLATED INTERACTION CONTROLLER
   ========================================================================== */

(function () {
  'use strict';

  function initForskoLearningDNA() {
    const scope = document.getElementById('fldHeroScope');
    if (!scope || scope.dataset.fldInitialized === 'true') {
      return;
    }
    scope.dataset.fldInitialized = 'true';

    // 1. Cached Elements
    const stage = document.getElementById('fldDnaStage');
    const core = document.getElementById('fldDnaCore');
    const nodes = Array.from(scope.querySelectorAll('.fld-node'));
    const svgRungs = {
      syllabus: scope.querySelector('.fld-rung-1'),
      notes: scope.querySelector('.fld-rung-1'),
      pyqs: scope.querySelector('.fld-rung-2'),
      'question-bank': scope.querySelector('.fld-rung-2'),
      practicals: scope.querySelector('.fld-rung-4'),
      'paper-patterns': scope.querySelector('.fld-rung-4')
    };

    if (!stage || !core || nodes.length === 0) {
      return;
    }

    // 2. Reduced Motion Configuration
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = motionQuery.matches;

    const handleMotionChange = (e) => {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion) {
        targetX = 0;
        targetY = 0;
        currentX = 0;
        currentY = 0;
        stage.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
        if (core) core.style.transform = 'translate(-50%, -50%) translateZ(55px)';
      }
    };

    if (typeof motionQuery.addEventListener === 'function') {
      motionQuery.addEventListener('change', handleMotionChange);
    } else if (typeof motionQuery.addListener === 'function') {
      motionQuery.addListener(handleMotionChange);
    }

    // 3. Smooth Physical Parallax (Max ±2.5 deg)
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovered = false;
    let isVisible = true;
    let rafId = null;

    const MAX_TILT = 2.5; 
    const EASING = 0.05; // Calm physical glide

    const lerp = (start, end, factor) => start + (end - start) * factor;

    function renderParallax() {
      if (!isVisible) {
        rafId = requestAnimationFrame(renderParallax);
        return;
      }

      if (!prefersReducedMotion) {
        currentX = lerp(currentX, targetX, EASING);
        currentY = lerp(currentY, targetY, EASING);

        const tiltX = (-currentY * MAX_TILT).toFixed(2);
        const tiltY = (currentX * MAX_TILT).toFixed(2);

        stage.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

        // Counter-shift keeps central logo steady in 3D space
        if (core) {
          const coreOffsetX = (-currentX * 6).toFixed(2);
          const coreOffsetY = (-currentY * 6).toFixed(2);
          core.style.transform = `translate(calc(-50% + ${coreOffsetX}px), calc(-50% + ${coreOffsetY}px)) translateZ(55px)`;
        }

        if (!isHovered && Math.abs(currentX) < 0.0005 && Math.abs(currentY) < 0.0005) {
          stage.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
          if (core) core.style.transform = 'translate(-50%, -50%) translateZ(55px)';
        }
      }

      rafId = requestAnimationFrame(renderParallax);
    }

    function onPointerMove(e) {
      if (prefersReducedMotion) return;

      const rect = scope.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const midX = rect.left + rect.width / 2;
      const midY = rect.top + rect.height / 2;

      targetX = Math.max(-1, Math.min(1, (e.clientX - midX) / (rect.width / 2)));
      targetY = Math.max(-1, Math.min(1, (e.clientY - midY) / (rect.height / 2)));
    }

    scope.addEventListener('pointerenter', () => { isHovered = true; });
    scope.addEventListener('pointermove', onPointerMove, { passive: true });
    scope.addEventListener('pointerleave', () => {
      isHovered = false;
      targetX = 0;
      targetY = 0;
    });

    // 4. Resource Hover & Node Focus System
    let corePulseTimer = null;

    function activateNode(node) {
      const resourceKey = node.dataset.resource;

      // Highlight Connected Rung
      const connectedRung = svgRungs[resourceKey];
      if (connectedRung) {
        connectedRung.style.stroke = '#38bdf8';
        connectedRung.style.strokeWidth = '2.8px';
        connectedRung.style.strokeDasharray = 'none';
        connectedRung.style.filter = 'drop-shadow(0 0 8px #38bdf8)';
      }

      // Energy Pulse feedback into FORSKO Core
      if (core) {
        const capsule = core.querySelector('.fld-core-capsule');
        if (capsule) {
          capsule.style.borderColor = '#ffffff';
          capsule.style.boxShadow = '0 0 45px rgba(56, 189, 248, 0.85), inset 0 0 30px rgba(56, 189, 248, 0.5)';
        }

        if (corePulseTimer) clearTimeout(corePulseTimer);
        corePulseTimer = setTimeout(() => {
          if (capsule) {
            capsule.style.borderColor = '';
            capsule.style.boxShadow = '';
          }
        }, 420);
      }
    }

    function deactivateNode(node) {
      const resourceKey = node.dataset.resource;

      const connectedRung = svgRungs[resourceKey];
      if (connectedRung) {
        connectedRung.style.stroke = '';
        connectedRung.style.strokeWidth = '';
        connectedRung.style.strokeDasharray = '';
        connectedRung.style.filter = '';
      }
    }

    // Accessible Listeners
    nodes.forEach((node) => {
      node.addEventListener('mouseenter', () => activateNode(node));
      node.addEventListener('mouseleave', () => deactivateNode(node));
      node.addEventListener('focus', () => activateNode(node));
      node.addEventListener('blur', () => deactivateNode(node));

      // Mobile Touch Handling
      node.addEventListener('touchend', (e) => {
        if (!node.classList.contains('fld-node-active')) {
          e.preventDefault();
          nodes.forEach((n) => {
            n.classList.remove('fld-node-active');
            deactivateNode(n);
          });
          node.classList.add('fld-node-active');
          activateNode(node);
        }
      }, { passive: false });
    });

    document.addEventListener('touchstart', (e) => {
      if (!scope.contains(e.target)) {
        nodes.forEach((n) => {
          n.classList.remove('fld-node-active');
          deactivateNode(n);
        });
      }
    }, { passive: true });

    // 5. Visibility Detection
    let observer = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      }, { threshold: 0.1 });

      observer.observe(scope);
    }

    // 6. Start Loop
    rafId = requestAnimationFrame(renderParallax);
  }

  // Safe DOM Bootstrapper
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initForskoLearningDNA, { once: true });
  } else {
    initForskoLearningDNA();
  }
})();

