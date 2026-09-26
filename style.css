
/* ==========================================
   Forsko - Mobile Screen Overflow Prevention
   ========================================== */
html, body {
  overflow-x: hidden !important; /* Horizontally bahar jane se rokega */
  width: 100% !important;
  max-width: 100% !important;
  margin: 0;
  padding: 0;
}

/* Force Box Sizing for All Elements */
*, *::before, *::after {
  box-sizing: border-box !important;
}

/* Images & Media max-width Fix */
img, video, iframe, svg {
  max-width: 100% !important;
  height: auto;
}

/* ==========================================================================
   Forsko - Master CSS Stylesheet
   Theme: Dark Slate (#0F172A) | Sky Blue (#3B82F6) | Accent Cyan (#60A5FA)
   ========================================================================== */

:root {
  --dark-blue: #0F172A;
  --dark-blue-card: #29497e;
  --dark-blue-deep: #0B1120;
  --sky-blue: #3B82F6;
  --sky-blue-hover: #2563EB;
  --sky-blue-light: rgba(59, 130, 246, 0.15);
  --white: #FFFFFF;
  --light-gray: #F8FAFC;
  --border-gray: #E2E8F0;
  --text-dark: #0F172A;
  --text-muted: #64748B;
  --text-light: #94A3B8;

  /* Shadows & Radius */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --shadow-sm: 0 4px 6px -1px rgba(15, 23, 42, 0.05);
  --shadow-md: 0 10px 20px -3px rgba(15, 23, 42, 0.08);
  --shadow-lg: 0 20px 25px -5px rgba(15, 23, 42, 0.12);
  --shadow-glow: 0 0 25px rgba(59, 130, 246, 0.35);

  --transition-fast: all 0.2s ease;
  --transition-smooth: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Base Resets */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background-color: var(--white);
  color: var(--text-dark);
  line-height: 1.6;
}

body {
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

.sub-badge {
  color: var(--sky-blue);
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  margin-bottom: 8px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-image {
    width: 150px;
    height: 150px;
    object-fit: contain;
}



/* 1. Fix Global Body Background (Prevents any white gaps on the page) */
body {
  background-color: #0b1120 !important; /* Matches dark hero theme */
  margin: 0;
  padding: 0;
}

/* 2. Seamless Section Transitions (Removes top/bottom margins) */
.hero {
  margin-bottom: 0 !important;
}

.search-section {
  margin-top: 0 !important;
  background-color: #0b1120 !important;
  padding-top: 50px; /* Gives nice spacing above the search bar */
}

/* Glowing Divider - Line and Dot Only (No Background) */
.glowing-divider {
  position: relative;
  width: 100%;
  height: 0.01rem; /* Reduced height for clean spacing */
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent !important; /* Removes dark box and dot pattern */
  overflow: visible;
  margin: 10px 0;
  padding: 0;
  border: none;
}


/* Horizontal Line with Glowing Blue Gradient */
.divider-line {
  position: absolute;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(59, 130, 246, 0.2) 15%,
    rgba(59, 130, 246, 0.7) 50%,
    rgba(59, 130, 246, 0.2) 85%,
    transparent 100%
  );
}





.logo span {
  font-family: "Exo 2", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--white);
}

/* Button UI */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 24px;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: var(--transition-fast);
  border: none;
}

.btn-primary {
  background-color: var(--sky-blue);
  color: var(--white);
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
}

.btn-primary:hover {
  background-color: var(--sky-blue-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

.btn-secondary {
  background-color: rgba(255, 255, 255, 0.08);
  color: var(--white);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.18);
  transform: translateY(-2px);
}

/* ==========================================================================
   1. Sticky Navbar
   ========================================================================== */
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(15, 23, 42, 0.92);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: var(--transition-fast);
}

.navbar.scrolled {
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.4);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-link {
  color: var(--text-light);
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  padding: 6px 0;
  transition: var(--transition-fast);
}

.nav-link:hover, .nav-link.active {
  color: var(--white);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: var(--sky-blue);
  transition: var(--transition-fast);
}

.nav-link:hover::after, .nav-link.active::after {
  width: 100%;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  color: var(--white);
  font-size: 1.5rem;
  cursor: pointer;
}


/* ==========================================================================
   Forsko - Glassmorphism Floating Action Button (FAB)
   ========================================================================== */

/* Main Container - Fixed Bottom Right */
.fab-container {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  pointer-events: none; /* Allows clicks through empty overlay spaces */
}

/* Main Blue Circular Button */
.fab-main-btn {
  pointer-events: auto;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3B82F6, #2563EB);
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.45), 0 0 15px rgba(59, 130, 246, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  position: relative;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.3s ease, 
              background-color 0.3s ease;
  outline: none;
}

.fab-main-btn:hover {
  transform: scale(1.08);
  box-shadow: 0 12px 30px rgba(59, 130, 246, 0.6), 0 0 25px rgba(59, 130, 246, 0.4);
}

.fab-main-btn:active {
  transform: scale(0.96);
}

/* Icon Rotation & Swap Transition */
.fab-icon-open,
.fab-icon-close {
  position: absolute;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
              opacity 0.25s ease;
}

.fab-icon-open {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

.fab-icon-close {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}

/* Active State Trigger Button */
.fab-container.active .fab-main-btn {
  background: linear-gradient(135deg, #1E293B, #0F172A);
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), 0 0 20px rgba(59, 130, 246, 0.3);
}

.fab-container.active .fab-icon-open {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}

.fab-container.active .fab-icon-close {
  opacity: 1;
  transform: rotate(0deg) scale(1);
  color: #3B82F6;
}

/* Expandable Menu Container */
.fab-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: 14px;
}

/* Individual Glassmorphism Menu Item */
.fab-menu-item {
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px) scale(0.88);
  transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  outline: none;
}

/* Staggered Entrance Delay when Active */
.fab-container.active .fab-menu-item {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.fab-container.active .fab-menu-item:nth-child(6) { transition-delay: 0.02s; }
.fab-container.active .fab-menu-item:nth-child(5) { transition-delay: 0.05s; }
.fab-container.active .fab-menu-item:nth-child(4) { transition-delay: 0.08s; }
.fab-container.active .fab-menu-item:nth-child(3) { transition-delay: 0.11s; }
.fab-container.active .fab-menu-item:nth-child(2) { transition-delay: 0.14s; }
.fab-container.active .fab-menu-item:nth-child(1) { transition-delay: 0.17s; }

/* Menu Item Text Label (Glassmorphism Pill) */
.fab-item-label {
  background: rgba(30, 41, 59, 0.85);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #FFFFFF;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 10px;
  white-space: nowrap;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

/* Menu Item Circular Icon Badge */
.fab-item-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(30, 41, 59, 0.85);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #3B82F6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
}

/* Item Hover Effects */
.fab-menu-item:hover .fab-item-label {
  background: rgba(59, 130, 246, 0.25);
  border-color: rgba(59, 130, 246, 0.5);
  color: #FFFFFF;
  transform: translateX(-3px);
}

.fab-menu-item:hover .fab-item-icon {
  background: #3B82F6;
  border-color: #3B82F6;
  color: #FFFFFF;
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

/* Responsive Touch Adjustments */
@media (max-width: 640px) {
  .fab-container {
    bottom: 20px;
    right: 20px;
  }

  .fab-main-btn {
    width: 52px;
    height: 52px;
    font-size: 1.15rem;
  }

  .fab-item-icon {
    width: 40px;
    height: 40px;
    font-size: 0.95rem;
  }

  .fab-item-label {
    font-size: 0.8rem;
    padding: 5px 12px;
  }
}

/* Fix Mobile Hamburger Drawer Layering */
@media (max-width: 768px) {
  .nav-menu {
    z-index: 10000 !important;
    position: fixed;
    top: 74px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 74px);
    background-color: #0F172A;
    display: flex;
    flex-direction: column;
    padding: 40px 24px;
    gap: 20px;
    transition: left 0.3s ease-in-out;
  }

  .nav-menu.active {
    left: 0 !important;
  }
}

/* Fix FAB Overlay Layering */
.fab-container {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 99999 !important;
  pointer-events: none;
}

.fab-main-btn {
  pointer-events: auto !important;
}

.fab-menu-item {
  pointer-events: none;
}

.fab-container.active .fab-menu-item {
  pointer-events: auto !important;
}

/* ==========================================================================
   Forsko - Ultra-Compact Mini Cards (4 Per Row - Extra Small Height)
   ========================================================================== */

.updates-section {
  padding: 50px 0; /* Reduced section padding */
  background-color: #0b1120;
  position: relative;
}

.updates-container {
  max-width: 94% !important; /* Screen ke pure corners tak stretch hoga */
  margin: 0 auto;
}

.updates-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
/* 2. Ultra-Compact Mini Card Structure */
.update-card {
  background: rgba(30, 41, 59, 0.55);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px; /* Sleeker rounded corners */
  padding: 12px 15px; /* Extra small padding */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  height: 100%;
  min-height: 145px; /* Extremely low height (Very Compact) */
  transition: transform 0.25s ease,
              border-color 0.25s ease,
              box-shadow 0.25s ease,
              background-color 0.25s ease;
  cursor: pointer;
}

/* Top Glow Line */
.update-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #3b82f6, #60a5fa, transparent);
  opacity: 0;
  transition: opacity 0.3s ease, left 0.3s ease, right 0.3s ease;
}

.update-card:hover::before {
  opacity: 1;
  left: 0;
  right: 0;
}

/* Card Hover */
.update-card:hover {
  transform: translateY(-4px);
  background: rgba(30, 41, 59, 0.8);
  border-color: rgba(59, 130, 246, 0.4);
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.5), 
              0 0 20px rgba(59, 130, 246, 0.2);
}

.update-card:active {
  transform: translateY(-1px);
}

/* 3. Header & Badges (Mini) */
.update-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}

.update-badge {
  font-size: 0.65rem; /* Extra small badge text */
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.badge-new {
  background-color: rgba(16, 185, 129, 0.15);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.badge-dot {
  width: 5px;
  height: 5px;
  background-color: #10b981;
  border-radius: 50%;
  animation: livePulse 1.8s infinite ease-in-out;
}

@keyframes livePulse {
  0% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { transform: scale(1.1); box-shadow: 0 0 0 5px rgba(16, 185, 129, 0); }
  100% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

.badge-announcement {
  background-color: rgba(168, 85, 247, 0.15);
  color: #c084fc;
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.update-date {
  color: #94a3b8;
  font-size: 0.75rem;
}

/* 4. Compact Body Typography */
.update-card-body {
  flex-grow: 1;
}

.update-title {
  color: #ffffff;
  font-size: 0.92rem; /* Small compact title */
  font-weight: 700;
  margin-bottom: 3px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Max 2 lines */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.update-card:hover .update-title {
  color: #60a5fa;
}

.update-desc {
  color: #94a3b8;
  font-size: 0.78rem; /* Small description text */
  line-height: 1.35;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Max 2 lines */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 5. Mini Footer Button */
.update-card-footer {
  margin-top: auto;
  padding-top: 6px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: flex-end;
}

.btn-update-open {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: #ffffff;
  padding: 5px 12px; /* Small button padding */
  border-radius: 6px;
  font-size: 0.75rem; /* Mini button text */
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
}

.btn-update-open:hover {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
}

.btn-update-open i {
  font-size: 0.7rem;
  transition: transform 0.2s ease;
}

.btn-update-open:hover i {
  transform: translateX(3px);
}

/* ==========================================================================
   Responsive Breakpoints
   ========================================================================== */
@media (max-width: 1100px) {
  .updates-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 per row on smaller laptops/tablets */
  }
}

@media (max-width: 580px) {
  .updates-grid {
    grid-template-columns: 1fr; /* 1 per row on mobile */
  }
}





/* ==========================================================================
   Forsko - Interactive Hero Section Stylesheet
   Features: 3D Parallax Tilt, Radar Pulse, Glass Shimmer & Button Micro-FX
   ========================================================================== */

.hero {
  background: radial-gradient(circle at top right, #1E293B, var(--dark-blue, #0f172a));
  color: var(--white, #ffffff);
  padding: 90px 24px 100px 24px;
  position: relative;
  overflow: hidden;
}

/* Ambient Aurora & Floating Light Blobs */
.hero-aurora-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.12) 0%,
    transparent 50%,
    rgba(37, 99, 235, 0.08) 100%
  );
  pointer-events: none;
}

.hero-ambient-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  pointer-events: none;
  opacity: 0.4;
}

.blob-left {
  top: 10%;
  left: -5%;
  width: 350px;
  height: 350px;
  background: rgba(59, 130, 246, 0.25);
  animation: blobFloat 10s ease-in-out infinite alternate;
}

.blob-right {
  bottom: 5%;
  right: -5%;
  width: 400px;
  height: 400px;
  background: rgba(37, 99, 235, 0.2);
  animation: blobFloat 12s ease-in-out infinite alternate-reverse;
}

@keyframes blobFloat {
  0% { transform: translateY(0) scale(1); }
  100% { transform: translateY(-30px) scale(1.1); }
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 50px;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* 1. Live Radar Pulse Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: rgba(59, 130, 246, 0.12);
  color: var(--sky-blue, #3b82f6);
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 6px 18px;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 22px;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.15);
  transition: transform 0.3s ease, border-color 0.3s ease;
  cursor: default;
}

.hero-badge:hover {
  transform: translateY(-2px);
  border-color: rgba(59, 130, 246, 0.5);
}

.pulse-dot {
  position: relative;
  width: 8px;
  height: 8px;
  background-color: var(--sky-blue, #3b82f6);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--sky-blue, #3b82f6);
}

.pulse-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid var(--sky-blue, #3b82f6);
  animation: radarPulse 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

@keyframes radarPulse {
  0% { transform: scale(0.6); opacity: 1; }
  100% { transform: scale(2.2); opacity: 0; }
}

/* Typography */
.hero-heading {
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -1px;
  margin-bottom: 20px;
  font-family: 'Exo 2', sans-serif;
}

.hero-heading .highlight {
  background: linear-gradient(135deg, #60A5FA 0%, var(--sky-blue, #3b82f6) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subheading {
  font-size: 1.12rem;
  color: var(--text-light, #94a3b8);
  line-height: 1.65;
  margin-bottom: 36px;
  max-width: 580px;
}

/* 2. Interactive Buttons */
.hero-buttons {
  display: flex;
  align-items: center;
  gap: 18px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 0.98rem;
  font-weight: 700;
  text-decoration: none !important;
  transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.hero-btn-primary {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35);
}

.hero-btn-primary:hover {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.6), 0 6px 20px rgba(37, 99, 235, 0.4);
  transform: translateY(-3px) scale(1.02);
}

.btn-arrow {
  font-size: 0.85rem;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hero-btn-primary:hover .btn-arrow {
  transform: translateX(6px) scale(1.15);
}

.hero-btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}

.hero-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(59, 130, 246, 0.4);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

.btn-rocket {
  font-size: 0.9rem;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hero-btn-secondary:hover .btn-rocket {
  transform: translateY(-3px) rotate(-12deg) scale(1.2);
  color: #60a5fa;
}

.btn:active {
  transform: translateY(0) scale(0.97) !important;
}

/* ==========================================================================
   3. Code Window Illustration & 3D Tilt Parallax
   ========================================================================== */

.hero-illustration {
  position: relative;
  display: flex;
  justify-content: center;
}

.illustration-glow {
  position: absolute;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  filter: blur(30px);
}

/* Glassmorphism Code Window */
.code-window {
  background-color: rgba(11, 17, 32, 0.85);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  width: 100%;
  max-width: 450px;
  overflow: hidden;
  position: relative;
  /* 3D Tilt */
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.3s ease, 
              border-color 0.3s ease;
  cursor: pointer;
}

.code-window:hover {
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(59, 130, 246, 0.3);
}

/* Glass Shimmer Sweep */
.code-glass-sweep {
  position: absolute;
  top: -50%;
  left: -150%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 45%,
    rgba(255, 255, 255, 0.08) 50%,
    transparent 55%
  );
  transform: rotate(30deg);
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
}

.code-window:hover .code-glass-sweep {
  transform: rotate(30deg) translate(100%, 100%);
}

/* Mouse Light Spotlight */
.code-spotlight-light {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    300px circle at var(--code-x, 50%) var(--code-y, 50%),
    rgba(59, 130, 246, 0.18),
    transparent 60%
  );
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.code-window:hover .code-spotlight-light {
  opacity: 1;
}

.window-header {
  background-color: rgba(255, 255, 255, 0.04);
  padding: 12px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.window-dots {
  display: flex;
  align-items: center;
  gap: 8px;
}

.window-dots .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.dot.red { background-color: #EF4444; }
.dot.yellow { background-color: #F59E0B; }
.dot.green { background-color: #10B981; }

.window-title {
  font-size: 0.8rem;
  color: var(--text-light, #94a3b8);
  font-family: monospace;
}

.window-body {
  padding: 22px;
  font-family: 'Consolas', 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.65;
}

.window-body pre {
  margin: 0;
  color: #E2E8F0;
}

.kwd { color: #38BDF8; font-weight: 600; }
.cls { color: #FACC15; font-weight: 600; }
.func { color: #4ADE80; }
.typ { color: #F472B6; }

/* 4. Micro-Interactive Floating Badges */
.float-badge {
  position: absolute;
  background: rgba(30, 41, 59, 0.85);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 10px 18px;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  animation: float 4s ease-in-out infinite;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  z-index: 3;
  cursor: pointer;
}

.badge-icon {
  color: var(--sky-blue, #3b82f6);
  font-size: 0.95rem;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.float-badge:hover {
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.4);
}

.float-badge:hover .badge-icon {
  transform: scale(1.25) rotate(10deg);
}

.badge-1 {
  top: 8%;
  right: -12px;
}

.badge-2 {
  bottom: 8%;
  left: -12px;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 60px;
  }

  .hero-subheading {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    justify-content: center;
  }

  .badge-1 { right: 5%; }
  .badge-2 { left: 5%; }
}

@media (max-width: 640px) {
  .hero-heading {
    font-size: 2.2rem;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
  }

  .float-badge {
    font-size: 0.78rem;
    padding: 8px 14px;
  }
  
  .badge-1 { top: -15px; right: 0; }
  .badge-2 { bottom: -15px; left: 0; }
}

/* ==========================================================================
   Forsko - Interactive Search Section & Dropdown Styles
   Theme: Dark Navy (#0F172A) | Sky Blue (#3B82F6) | Glassmorphism
   ========================================================================== */

.search-section {
  position: relative;
  background-color: var(--dark-blue, #0b1120);
  padding: 60px 0 80px 0;
  z-index: 100;
}

.search-container {
  max-width: 820px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
}

.search-header {
  text-align: center;
  margin-bottom: 28px;
}

.search-header .header-pill-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(59, 130, 246, 0.12);
  color: var(--sky-blue, #3b82f6);
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 6px 16px;
  border-radius: 30px;
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 10px;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.2);
}

.search-heading {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--white, #ffffff);
  font-family: 'Exo 2', sans-serif;
  letter-spacing: -0.5px;
}

/* Glassmorphic Search Card Bar */
.search-card {
  background: rgba(255, 255, 255, 0.96);
  border-radius: 60px;
  padding: 6px 6px 6px 22px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 10;
}

.search-card:focus-within {
  transform: translateY(-2px);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.45), 0 20px 40px rgba(0, 0, 0, 0.5);
}

.search-main-icon {
  color: #64748b;
  font-size: 1.25rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.search-card:focus-within .search-main-icon {
  color: var(--sky-blue, #3b82f6);
  transform: scale(1.1);
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 500;
  color: #0f172a;
  font-family: inherit;
  background: transparent;
  caret-color: var(--sky-blue, #3b82f6);
  min-width: 0;
}

.search-input::placeholder {
  color: #94a3b8;
}

/* Clear Input (X) Button */
.search-clear-btn {
  background: #e2e8f0;
  color: #475569;
  border: none;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.search-clear-btn:hover {
  background: #cbd5e1;
  color: #0f172a;
  transform: scale(1.1);
}

/* Ctrl + K Shortcut Badge */
.search-shortcut-badge {
  display: flex;
  align-items: center;
  gap: 3px;
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 3px 8px;
  font-size: 0.72rem;
  color: #64748b;
  font-weight: 600;
  -webkit-user-select: none;
  user-select: none;
  flex-shrink: 0;
}

.search-shortcut-badge kbd {
  font-family: inherit;
}

.search-shortcut-badge .plus {
  color: #94a3b8;
  font-size: 0.65rem;
}

/* Search Action Button */
.search-button {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #ffffff;
  border: none;
  padding: 12px 26px;
  border-radius: 40px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.35);
  flex-shrink: 0;
}

.search-button:hover {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
}

.search-button:active {
  transform: scale(0.96);
}

.search-btn-arrow {
  font-size: 0.85rem;
  transition: transform 0.25s ease;
}

.search-button:hover .search-btn-arrow {
  transform: translateX(4px);
}

/* ==========================================================================
   Live Glassmorphism Search Dropdown
   ========================================================================== */

.search-dropdown {
  position: absolute;
  top: calc(100% + 14px);
  left: 24px;
  right: 24px;
  background-color: rgba(30, 41, 59, 0.92);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 25px 50px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(59, 130, 246, 0.3);
  max-height: 420px;
  overflow-y: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1000;
  animation: dropdownSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes dropdownSlide {
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.search-dropdown.hidden {
  display: none !important;
}

.search-dropdown::-webkit-scrollbar {
  width: 6px;
}
.search-dropdown::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
}

/* Search Item Card */
.search-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  color: #ffffff !important;
  text-decoration: none !important;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

.search-item:hover,
.search-item.is-selected {
  background: rgba(59, 130, 246, 0.22);
  border-color: rgba(59, 130, 246, 0.5);
  transform: translateX(6px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.search-item-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(59, 130, 246, 0.15);
  color: var(--sky-blue, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  flex-shrink: 0;
  transition: transform 0.25s ease, background-color 0.25s ease, color 0.25s ease;
}

.search-item:hover .search-item-icon,
.search-item.is-selected .search-item-icon {
  background: var(--sky-blue, #3b82f6);
  color: #ffffff;
  transform: scale(1.1) rotate(5deg);
}

.search-item-content {
  flex: 1;
  min-width: 0;
}

.search-item-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
  flex-wrap: wrap;
}

.search-item-title {
  font-size: 0.98rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.3;
}

.search-item-desc {
  font-size: 0.85rem;
  color: #94a3b8;
  margin: 0;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.search-item-arrow {
  color: #64748b;
  font-size: 0.9rem;
  transition: transform 0.25s ease, color 0.25s ease;
}

.search-item:hover .search-item-arrow,
.search-item.is-selected .search-item-arrow {
  color: #60a5fa;
  transform: translateX(5px);
}

/* Text Search Matching Highlight */
mark.search-highlight {
  background-color: rgba(59, 130, 246, 0.4);
  color: #ffffff;
  border-radius: 3px;
  padding: 0 4px;
  font-weight: 700;
}

/* Category Badges */
.category-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-syllabus { background: rgba(59, 130, 246, 0.2); color: #60A5FA; border: 1px solid rgba(59, 130, 246, 0.4); }
.badge-notes { background: rgba(16, 185, 129, 0.2); color: #34D399; border: 1px solid rgba(16, 185, 129, 0.4); }
.badge-pyqs { background: rgba(249, 115, 22, 0.2); color: #FB923C; border: 1px solid rgba(249, 115, 22, 0.4); }
.badge-question-bank { background: rgba(168, 85, 247, 0.2); color: #C084FC; border: 1px solid rgba(168, 85, 247, 0.4); }
.badge-paper-pattern { background: rgba(239, 68, 68, 0.2); color: #F87171; border: 1px solid rgba(239, 68, 68, 0.4); }
.badge-practicals { background: rgba(20, 184, 166, 0.2); color: #2DD4BF; border: 1px solid rgba(20, 184, 166, 0.4); }
.badge-resources { background: rgba(148, 163, 184, 0.2); color: #CBD5E1; border: 1px solid rgba(148, 163, 184, 0.4); }

/* Empty Search State */
.search-empty-state {
  text-align: center;
  padding: 32px 16px;
  color: #94a3b8;
}

.search-empty-icon {
  font-size: 2.2rem;
  color: #3b82f6;
  margin-bottom: 12px;
  opacity: 0.8;
}

.search-empty-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
}

/* Responsive Styles */
@media (max-width: 640px) {
  .search-shortcut-badge {
    display: none; /* Hide Ctrl+K on mobile */
  }

  .search-heading {
    font-size: 1.8rem;
  }

  .search-card {
    padding: 6px 6px 6px 16px;
  }

  .search-button {
    padding: 10px 18px;
    font-size: 0.88rem;
  }

  .search-dropdown {
    left: 12px;
    right: 12px;
  }
}

/* ==========================================================================
   Forsko - Unique & Distinct Backgrounds for Every Section
   ========================================================================== */

/* 1. Hero Section - Deep Indigo / Violet Dark Gradient */
.hero {
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* 2. Search Section - Deep Navy */
.search-section {
  background-color: #0F172A !important;
}

/* 3. Explore Forsko (Bento Grid) - Dark Zinc / Charcoal Blue */
.bento-section {
  background-color: #111827 !important;
  background-image: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15), transparent 70%) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* 4. Latest Updates Timeline - Dark Purple / Violet Theme */
.updates-section {
  background-color: #16132A !important;
  background-image: radial-gradient(circle at 100% 50%, rgba(139, 92, 246, 0.15), transparent 60%) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* 5. Today's Study Tip - Dark Emerald / Teal Theme */
.study-tip-section {
  background-color: #022C22 !important;
  background-image: radial-gradient(circle at 0% 50%, rgba(16, 185, 129, 0.15), transparent 60%) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* 6. Statistics Section - Deep Blue-Gray */
.stats-section {
  background-color: #0B1120 !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.stats-section .stat-card {
  background-color: rgba(30, 41, 59, 0.7) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

/* ==========================================================================
   Forsko - Interactive About Section Styles
   Features: Glassmorphism, 3D Parallax Tilt, Gradient Text & Glowing Aura
   ========================================================================== */

.about-section {
  position: relative;
  background-color: #0b1120; /* Dark Navy background matching homepage */
  padding: 100px 24px;
  overflow: hidden;
}

/* Ambient Background Ambient Glow */
.about-ambient-glow {
  position: absolute;
  top: 50%;
  left: 0;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
  transform: translateY(-50%);
  pointer-events: none;
  filter: blur(60px);
}

.about-container {
  max-width: 1150px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 50px;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* Sub-Badge */
.sub-badge-wrapper {
  margin-bottom: 14px;
}

.sub-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(59, 130, 246, 0.12);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 6px 16px;
  border-radius: 30px;
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.sub-badge i {
  color: #60a5fa;
  font-size: 0.8rem;
}

/* Headings & Text */
.about-heading {
  font-size: 2.3rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 18px;
  line-height: 1.25;
  font-family: 'Exo 2', 'Inter', sans-serif;
  letter-spacing: -0.5px;
}

.title-gradient {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-text {
  color: #94a3b8;
  font-size: 1.02rem;
  line-height: 1.65;
  margin-bottom: 16px;
}

/* Interactive Glass Highlight Items */
.about-highlights {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.glass-chip {
  background: rgba(65, 120, 221, 0.5);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(37, 164, 199, 0.381);
  border-radius: 16px;
  padding: 18px 22px;
  display: flex;
  align-items: flex-start;
  gap: 18px;
  /* Spring transition for smooth hover feel */
  transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275),
              border-color 0.3s ease,
              box-shadow 0.3s ease,
              background-color 0.3s ease;
  cursor: pointer;
}

.glass-chip:hover {
  transform: translateY(-4px) translateX(6px);
  background: rgba(36, 169, 227, 0.8);
  border-color: rgba(15, 58, 127, 0.699);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.2);
}

.highlight-icon-box {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(59, 130, 246, 0.15);
  color: #0f3169;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease, color 0.3s ease;
}

.glass-chip:hover .highlight-icon-box {
  transform: scale(1.1) rotate(8deg);
  background: #154465;
  color: #ffffff;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
}

.highlight-info h4 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
  transition: color 0.3s ease;
}

.glass-chip:hover .highlight-info h4 {
  color: #3410d3;
}

.highlight-info p {
  font-size: 0.9rem;
  color: #94a3b8;
  margin-bottom: 0;
  line-height: 1.5;
}

/* ==========================================================================
   Right Column: 3D Interactive Visual Card
   ========================================================================== */

.about-card-visual {
  background: linear-gradient(135deg, rgba(74, 102, 147, 0.75), rgba(15, 23, 42, 0.9));
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 55px 36px;
  color: #ffffff;
  text-align: center;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
}

.about-card-visual:hover {
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 0 25px 50px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(59, 130, 246, 0.3);
}

/* Glass Reflection Sweep Beam */
.card-glass-reflection {
  position: absolute;
  top: -50%;
  left: -150%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 45%,
    rgba(255, 255, 255, 0.08) 50%,
    transparent 55%
  );
  transform: rotate(30deg);
  transition: transform 0.8s ease;
  pointer-events: none;
}

.about-card-visual:hover .card-glass-reflection {
  transform: rotate(30deg) translate(100%, 100%);
}

/* Mouse Light Spotlight */
.card-spotlight-light {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    300px circle at var(--spot-x, 50%) var(--spot-y, 50%),
    rgba(59, 130, 246, 0.2),
    transparent 60%
  );
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.about-card-visual:hover .card-spotlight-light {
  opacity: 1;
}

/* Floating Badges */
.about-float-badge {
  position: absolute;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #ffffff;
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 0.78rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  pointer-events: none;
  z-index: 3;
}

.about-float-badge i {
  color: #3b82f6;
  font-size: 0.82rem;
}

.badge-top-right {
  top: 18px;
  right: 18px;
  animation: floatTop 4s ease-in-out infinite alternate;
}

.badge-bottom-left {
  bottom: 18px;
  left: 18px;
  animation: floatBottom 4s ease-in-out infinite alternate-reverse;
}

@keyframes floatTop {
  0% { transform: translateY(0); }
  100% { transform: translateY(-6px); }
}

@keyframes floatBottom {
  0% { transform: translateY(0); }
  100% { transform: translateY(6px); }
}

/* Visual Box Main Icon Wrapper */
.main-icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 24px;
}

.about-card-visual .main-icon {
  font-size: 3.8rem;
  color: #3b82f6;
  position: relative;
  z-index: 2;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.3s ease;
}

.icon-aura-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  background: #3b82f6;
  filter: blur(30px);
  opacity: 0.4;
  border-radius: 50%;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.about-card-visual:hover .main-icon {
  transform: scale(1.12) translateY(-4px);
  color: #60a5fa;
}

.about-card-visual:hover .icon-aura-glow {
  opacity: 0.8;
  transform: translate(-50%, -50%) scale(1.3);
}

.about-card-visual h3 {
  font-size: 1.55rem;
  font-weight: 800;
  margin-bottom: 12px;
  font-family: 'Exo 2', 'Inter', sans-serif;
  color: #ffffff;
}

.about-card-visual p {
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Responsive Styles */
@media (max-width: 900px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .about-heading {
    font-size: 2rem;
  }

  .about-card-visual {
    padding: 40px 24px;
  }
}

/* ==========================================================================
   4. Bento Grid Section
   ========================================================================== */


.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.3rem;
  font-weight: 800;
  color: var(--white);
  font-family: 'Exo 2', sans-serif;
}

.section-subtitle {
  color: var(--text-light);
  font-size: 1.05rem;
  margin-top: 8px;
}

/* ==========================================================================
   4. Hyper-Interactive Bento Grid Section
   Features: 3D Parallax Tilt, Glass Shimmer Sweep, Light Spotlight & Spring FX
   ========================================================================== */

.bento-section {
  padding: 100px 24px;
  background-color: var(--dark-blue, #0b1120);
  position: relative;
  overflow: hidden;
}

/* Ambient Section Glow */
.bento-ambient-glow {
  position: absolute;
  top: 30%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
}

.bento-header {
  text-align: center;
  margin-bottom: 50px;
}

.header-pill-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(59, 130, 246, 0.12);
  color: var(--sky-blue, #3b82f6);
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 6px 16px;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.2);
}

.header-pill-badge i {
  color: #60a5fa;
  font-size: 0.85rem;
}

.bento-main-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--white, #ffffff);
  font-family: 'Exo 2', sans-serif;
  letter-spacing: -0.5px;
  margin-bottom: 8px;
}

.title-gradient {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  color: var(--text-light, #94a3b8);
  font-size: 1.05rem;
}

/* Bento Grid System */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.bento-span-1 { grid-column: span 1; }
.bento-span-2 { grid-column: span 2; }

/* Bento Glass Card */
.bento-card {
  background: rgba(30, 41, 59, 0.65);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-lg, 20px);
  padding: 34px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  color: var(--white, #ffffff);
  text-decoration: none !important;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
  /* Spring physics transition */
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
              border-color 0.3s ease,
              box-shadow 0.4s ease,
              background-color 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  cursor: pointer;
}

/* Top Border Accent Line */
.bento-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--sky-blue, #3b82f6), #60a5fa, transparent);
  opacity: 0;
  transition: opacity 0.35s ease, left 0.35s ease, right 0.35s ease;
}

/* Glass Radial Glow Effect */
.bento-glass-glow {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.4s ease;
}

/* Glass Reflection Sweep Beam */
.bento-shine-sweep {
  position: absolute;
  top: -50%;
  left: -150%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 45%,
    rgba(255, 255, 255, 0.08) 50%,
    transparent 55%
  );
  transform: rotate(30deg);
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
}

.bento-card:hover .bento-shine-sweep {
  transform: rotate(30deg) translate(100%, 100%);
}

/* Mouse Light Spotlight Overlay */
.bento-card-spotlight {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    300px circle at var(--bento-x, 50%) var(--bento-y, 50%),
    rgba(59, 130, 246, 0.18),
    transparent 60%
  );
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.bento-card:hover .bento-card-spotlight {
  opacity: 1;
}

/* Hover & Active Press States */
.bento-card:hover {
  transform: translateY(-8px) scale(1.015);
  background: rgba(30, 41, 59, 0.8);
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.5), 0 0 35px rgba(59, 130, 246, 0.3);
}

.bento-card:hover::before {
  opacity: 1;
  left: 0;
  right: 0;
}

.bento-card:hover .bento-glass-glow {
  transform: scale(1.4);
}

.bento-card:active {
  transform: translateY(-2px) scale(0.98); /* Click compression feedback */
}

/* Bento Top Header & Badge */
.bento-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
}

.bento-icon-wrapper {
  width: 54px;
  height: 54px;
  border-radius: var(--radius-md, 12px);
  background-color: rgba(59, 130, 246, 0.15);
  color: var(--sky-blue, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
              background-color 0.3s ease,
              color 0.3s ease,
              box-shadow 0.3s ease;
}

.bento-icon {
  font-size: 1.7rem;
}

.bento-card:hover .bento-icon-wrapper {
  background-color: var(--sky-blue, #3b82f6);
  color: var(--white, #ffffff);
  transform: scale(1.1) rotate(6deg);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

.bento-badge {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--sky-blue, #3b82f6);
  background-color: rgba(59, 130, 246, 0.12);
  padding: 5px 14px;
  border-radius: 20px;
  border: 1px solid rgba(59, 130, 246, 0.25);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.bento-card:hover .bento-badge {
  transform: scale(1.05);
  background-color: rgba(59, 130, 246, 0.2);
}

/* Bento Body */
.bento-card-body {
  margin-bottom: 24px;
  flex-grow: 1;
}

.bento-title {
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--white, #ffffff);
  margin-bottom: 10px;
  font-family: 'Exo 2', sans-serif;
  transition: color 0.3s ease;
}

.bento-card:hover .bento-title {
  color: #60a5fa;
}

.bento-desc {
  color: var(--text-light, #94a3b8);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Bento Footer Action Text & Arrow */
.bento-card-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--sky-blue, #3b82f6);
  font-weight: 700;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.bento-card:hover .bento-card-footer {
  color: #60a5fa;
}

.bento-arrow {
  font-size: 0.9rem;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.bento-card:hover .bento-arrow {
  transform: translateX(8px) scale(1.15);
  color: #60a5fa;
}

/* Responsive Grid Adjustments */
@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .bento-span-2 {
    grid-column: span 2;
  }
}

@media (max-width: 640px) {
  .bento-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .bento-span-1,
  .bento-span-2 {
    grid-column: span 1 !important;
  }

  .bento-card {
    padding: 26px 20px;
  }

  .bento-main-title {
    font-size: 2rem;
  }
}




/* ==========================================================================
   Forsko - Interactive Statistics Section Styles
   Features: Glassmorphism, 3D Parallax Tilt, Ease-Out Counters & Neon Glow
   ========================================================================== */

.stats-section {
  position: relative;
  background-color: var(--dark-blue-deep, #0b1120);
  padding: 90px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

/* Background Ambient Glow */
.stats-ambient-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(59, 130, 246, 0.12) 0%, transparent 70%);
  filter: blur(50px);
  pointer-events: none;
}

/* 4 Card Grid Container */
.stats-container {
  max-width: 1150px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  text-align: center;
  position: relative;
  z-index: 2;
}

/* Glassmorphic 3D Stat Card */
.stat-card {
  background: rgba(30, 41, 59, 0.65);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md, 16px);
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
  /* Spring physics transition for Apple/Framer feel */
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
              border-color 0.3s ease,
              box-shadow 0.4s ease,
              background-color 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
}

/* Top Border Accent Line */
.stat-top-border {
  position: absolute;
  top: 0;
  left: 15%;
  right: 15%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--sky-blue, #3b82f6), #60a5fa, transparent);
  opacity: 0;
  transition: opacity 0.35s ease, left 0.35s ease, right 0.35s ease;
}

/* Glass Reflection Sweep Beam */
.stat-shine-sweep {
  position: absolute;
  top: -50%;
  left: -150%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 45%,
    rgba(255, 255, 255, 0.08) 50%,
    transparent 55%
  );
  transform: rotate(30deg);
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
}

.stat-card:hover .stat-shine-sweep {
  transform: rotate(30deg) translate(100%, 100%);
}

/* Mouse Light Spotlight */
.stat-spotlight {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    250px circle at var(--stat-x, 50%) var(--stat-y, 50%),
    rgba(59, 130, 246, 0.18),
    transparent 60%
  );
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card:hover .stat-spotlight {
  opacity: 1;
}

/* Card Hover & Click Press States */
.stat-card:hover {
  transform: translateY(-8px) scale(1.02);
  background: rgba(30, 41, 59, 0.85);
  border-color: rgba(59, 130, 246, 0.45);
  box-shadow: 0 20px 35px -5px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.25);
}

.stat-card:hover .stat-top-border {
  opacity: 1;
  left: 0;
  right: 0;
}

.stat-card:active {
  transform: translateY(-2px) scale(0.97); /* Touch/click compression */
}

/* Icon & Aura Wrapper */
.stat-icon-wrapper {
  position: relative;
  width: 54px;
  height: 54px;
  border-radius: 14px;
  background-color: rgba(59, 130, 246, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
              background-color 0.3s ease;
}

.stat-icon {
  font-size: 1.6rem;
  color: var(--sky-blue, #3b82f6);
  position: relative;
  z-index: 2;
  transition: color 0.3s ease, transform 0.3s ease;
}

.icon-aura {
  position: absolute;
  inset: 0;
  border-radius: 14px;
  background: var(--sky-blue, #3b82f6);
  filter: blur(12px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card:hover .stat-icon-wrapper {
  transform: scale(1.12) rotate(6deg);
  background-color: var(--sky-blue, #3b82f6);
}

.stat-card:hover .stat-icon {
  color: #ffffff;
}

.stat-card:hover .icon-aura {
  opacity: 0.6;
}

/* Number Typography & Glow */
.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: var(--white, #ffffff);
  font-family: 'Exo 2', sans-serif;
  letter-spacing: -1px;
  line-height: 1.1;
  margin-bottom: 6px;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.stat-card:hover .stat-number {
  color: #60a5fa;
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
}

/* Label Styling */
.stat-label {
  color: var(--text-light, #94a3b8);
  font-size: 0.95rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

.stat-card:hover .stat-label {
  color: #ffffff;
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 580px) {
  .stats-container {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .stat-card {
    padding: 26px 18px;
  }

  .stat-number {
    font-size: 2.5rem;
  }
}

/* ==========================================================================
   6. About Section
   ========================================================================== */
.about-section {
  background-color: var(--border-gray);
  padding: 90px 24px;
}

.about-container {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;
}

.about-content h2 {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 16px;
  font-family: 'Exo 2', sans-serif;
}

.about-content p {
  color: var(--text-muted);
  font-size: 1.05rem;
  margin-bottom: 16px;
}

.about-highlights {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.highlight-item i {
  font-size: 1.3rem;
  color: var(--sky-blue);
  margin-top: 3px;
}

.highlight-item h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-dark);
}

.highlight-item p {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 0;
}

.about-card-visual {
  background: linear-gradient(135deg, var(--dark-blue), var(--dark-blue-card));
  padding: 50px 36px;
  border-radius: var(--radius-lg);
  color: var(--white);
  text-align: center;
  box-shadow: var(--shadow-lg);
}

.about-card-visual .main-icon {
  font-size: 3.5rem;
  color: var(--sky-blue);
  margin-bottom: 20px;
}

.about-card-visual h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-family: 'Exo 2', sans-serif;
}

.about-card-visual p {
  color: var(--text-light);
  font-size: 0.95rem;
}

/* ==========================================================================
   7. Footer Section
   ========================================================================== */
.footer {
  background-color: var(--dark-blue-deep);
  color: var(--white);
  padding: 80px 24px 30px 24px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.2fr 1.2fr;
  gap: 40px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-col.brand-col p {
  color: var(--text-light);
  margin-top: 16px;
  font-size: 0.95rem;
}

.footer-col h3 {
  font-size: 1.05rem;
  margin-bottom: 20px;
  color: var(--white);
}

.footer-col ul li {
  margin-bottom: 12px;
}

.footer-col ul a {
  color: var(--text-light);
  font-size: 0.95rem;
  transition: var(--transition-fast);
}

.footer-col ul a:hover {
  color: var(--sky-blue);
  padding-left: 4px;
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-light);
  font-size: 0.95rem;
}

.contact-list i { color: var(--sky-blue); }

.github-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.08);
  color: var(--white);
  padding: 10px 18px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: var(--transition-fast);
}

.github-btn:hover {
  background-color: var(--sky-blue);
  border-color: var(--sky-blue);
  transform: translateY(-2px);
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* ==========================================================================
   Responsive Breakpoints
   ========================================================================== */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-subheading {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    justify-content: center;
  }

  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .bento-span-2 {
    grid-column: span 2;
  }

  .about-container {
    grid-template-columns: 1fr;
  }

  .footer-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .nav-menu {
    position: fixed;
    top: 74px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 74px);
    background-color: var(--dark-blue);
    flex-direction: column;
    padding: 40px 24px;
    gap: 20px;
    transition: var(--transition-smooth);
  }

  .nav-menu.active {
    left: 0;
  }

  .hero-heading {
    font-size: 2.3rem;
  }

  .bento-grid {
    grid-template-columns: 1fr;
  }

  .bento-span-1, .bento-span-2 {
    grid-column: span 1;
  }

  .search-card {
    border-radius: var(--radius-md);
    flex-direction: column;
    padding: 12px;
    gap: 12px;
  }

  .search-card input {
    width: 100%;
  }

  .search-btn {
    width: 100%;
    justify-content: center;
  }

  .search-dropdown {
    left: 0;
    right: 0;
  }

  .footer-container {
    grid-template-columns: 1fr;
  }
}

/* ==========================================
   Mobile Screen Responsiveness Fix (Max Width 768px)
   ========================================== */
@media (max-width: 768px) {
  
  /* All Main Containers Mobile Fit */
  .nav-container,
  .hero-container,
  .section-container,
  .search-container,
  .updates-container,
  .about-container,
  .footer-container {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 16px !important;
    padding-right: 16px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    overflow: hidden;
  }

  /* Force Single Column for Grids so Cards don't spill out */
  .bento-grid,
  .updates-grid,
  .stats-container {
    grid-template-columns: 1fr !important;
    width: 100% !important;
  }

  .bento-span-1,
  .bento-span-2 {
    grid-column: span 1 !important;
  }

  /* Fix Hero Section Typography & Code Window for Mobile */
  .hero-heading {
    font-size: 2rem !important;
    line-height: 1.25 !important;
  }

  .code-window {
    width: 100% !important;
    max-width: 100% !important;
  }

  .window-body pre {
    white-space: pre-wrap !important; /* Code text screen se bahar nahi jayega */
    word-break: break-word !important;
  }

  /* Fix Floating Badges going outside screen */
  .float-badge {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;
    margin: 12px auto !important;
    display: inline-flex !important;
  }

  /* Search Card Mobile Fit */
  .search-card {
    width: 100% !important;
    max-width: 100% !important;
  }
}

/* ==========================================================================
   PERFECT MOBILE SCREEN FIX (Prevents Right Side Text Cutting)
   ========================================================================== */
@media screen and (max-width: 768px) {

  /* 1. Force Screen Width to 100% (No horizontal stretch) */
  html, body {
    width: 100% !important;
    max-width: 100% !important;
    overflow-x: hidden !important;
    position: relative;
  }

  /* 2. Fix Hero Section: Stacks Text on Top, Code Window on Bottom */
  .hero {
    padding: 30px 16px 50px 16px !important;
    overflow: hidden !important;
  }

  .hero-container {
    display: flex !important;
    flex-direction: column !important; /* Side-by-side se hata kar upar-niche karega */
    width: 100% !important;
    max-width: 100% !important;
    gap: 30px !important;
    padding: 0 !important;
    margin: 0 auto !important;
    text-align: center !important;
  }

  .hero-content {
    width: 100% !important;
    max-width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }

  /* 3. Hero Badge & Headings (Text size fit inside mobile) */
  .hero-badge {
    max-width: 90% !important;
    white-space: normal !important;
    font-size: 0.8rem !important;
    margin: 0 auto 16px auto !important;
  }

  .hero-heading {
    font-size: 1.85rem !important; /* Ab "Computer Science Students" poora aayega */
    line-height: 1.3 !important;
    margin-bottom: 14px !important;
    word-break: normal !important;
    overflow-wrap: break-word !important;
    width: 100% !important;
  }

  .hero-subheading {
    font-size: 0.92rem !important;
    line-height: 1.55 !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 auto 24px auto !important;
    padding: 0 4px !important;
  }

  /* 4. Full Width Buttons */
  .hero-buttons {
    display: flex !important;
    flex-direction: column !important;
    width: 100% !important;
    gap: 12px !important;
  }

  .hero-buttons .btn {
    width: 100% !important;
    padding: 13px 20px !important;
    font-size: 0.95rem !important;
  }

  /* 5. Fix Code Window & Floating Badges */
  .hero-illustration {
    width: 100% !important;
    max-width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    margin-top: 10px !important;
  }

  .code-window {
    width: 100% !important;
    max-width: 100% !important;
    transform: none !important; /* 3D tilt band karega taaki bahar na bhage */
  }

  .window-body {
    padding: 14px !important;
    overflow-x: auto !important;
  }

  .window-body pre {
    white-space: pre-wrap !important;
    word-break: break-word !important;
    font-size: 0.8rem !important;
  }

  /* Floating Badges ko screen ke andar set karega */
  .float-badge {
    position: static !important;
    margin: 8px auto 0 auto !important;
    transform: none !important;
    animation: none !important;
    display: inline-flex !important;
  }

  .illustration-glow {
    display: none !important; /* Phone par blur overflow hatayega */
  }
}

/* ==========================================================================
   🔥 PERFECT MOBILE SEARCH BAR FIX
   ========================================================================== */
@media screen and (max-width: 768px) {
  /* Box ko wapas ek line (row) me set karega aur pill shape dega */
  .search-card {
    flex-direction: row !important;
    align-items: center !important;
    padding: 6px 6px 6px 18px !important;
    border-radius: 50px !important;
    gap: 10px !important;
    height: auto !important;
  }

  /* Input area ko proper width dega without overflowing */
  .search-input {
    width: 100% !important;
    flex: 1 !important;
    font-size: 0.95rem !important;
    text-align: left !important;
  }

  /* Search button ke andar ka text hide karega taaki space bache */
  .search-btn-text {
    display: none !important;
  }

  /* Search button ko ek premium circular Arrow icon banayega */
  .search-button {
    width: 42px !important;
    height: 42px !important;
    padding: 0 !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex-shrink: 0 !important;
  }

  /* Arrow icon ki spacing fix karega */
  .search-btn-arrow {
    margin: 0 !important;
    font-size: 1rem !important;
  }
  
  /* Hover par arrow hilne ka fix */
  .search-button:hover .search-btn-arrow {
    transform: none !important;
  }

  /* Search main glass icon ki size thodi adjust karega */
  .search-main-icon {
    font-size: 1.1rem !important;
    margin: 0 !important;
  }
}


/* ==========================================================================
   🔥 FIX FOR SEARCH DROPDOWN CARDS & TEXT COLOR
   ========================================================================== */

/* Main Dropdown Container */
.search-dropdown {
  background-color: rgba(15, 23, 42, 0.98) !important;
  backdrop-filter: blur(25px) !important;
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  padding: 12px !important;
}

/* Individual Search Result Card */
.search-result-card {
  display: flex !important;
  flex-direction: column !important;
  padding: 14px 18px !important;
  background: rgba(30, 41, 59, 0.7) !important; /* Premium dark glass */
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 12px !important;
  margin-bottom: 8px !important;
  text-decoration: none !important;
  transition: all 0.3s ease !important;
}

/* Hover Effect for Card */
.search-result-card:hover {
  background: rgba(59, 130, 246, 0.25) !important; /* Blue glow on hover */
  border-color: rgba(59, 130, 246, 0.5) !important;
  transform: translateX(5px) !important;
}

/* Search Title (H4) - Forced to White */
.search-result-card h4 {
  color: #FFFFFF !important;
  font-size: 1.05rem !important;
  font-weight: 700 !important;
  margin: 0 0 6px 0 !important;
  font-family: 'Inter', sans-serif !important;
}

/* Search Description (P) - Forced to Light Grey */
.search-result-card p {
  color: #CBD5E1 !important;
  font-size: 0.88rem !important;
  line-height: 1.4 !important;
  margin: 0 !important;
  font-family: 'Inter', sans-serif !important;
}

/* Highlighted Match Text */
.search-result-card span {
  color: #60A5FA !important; /* Light blue highlight for matching words */
  font-weight: 800 !important;
}

.search-dropdown {
  position: absolute;
  top: 100%; /* Search bar ke thik neeche aane ke liye */
  left: 0;
  width: 100%;
  max-height: 300px; /* Mobile par keyboard aane ke baad scrollable area */
  overflow-y: auto;
  z-index: 99999 !important; /* Ye sabse zaroori hai mobile par upar dikhane ke liye */
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px); /* Aapka glassmorphic effect */
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  border-radius: 8px;
  margin-top: 8px;
}

/* Hidden class jo JS toggle kar raha hai */
.hidden {
  display: none !important;
}

/* Dropdown Box Styling */
.search-dropdown {
  position: absolute;
  top: 100%; /* Search bar ke thik niche lane ke liye */
  left: 0;
  width: 100%;
  max-height: 300px; /* Mobile par list jyada badi na ho (scrollable bane) */
  overflow-y: auto;
  z-index: 99999 !important; /* SABSE IMPORTANT: Isse ye sabke upar dikhega */
  background: rgba(255, 255, 255, 0.95); /* Glassmorphic background */
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  border-radius: 8px;
  margin-top: 8px;
  padding: 10px;
}

/* Hidden class jo JS use karta hai hide karne ke liye */
.hidden {
  display: none !important;
}

/* ==========================================
   MOBILE SEARCH DROPDOWN FIX
   ========================================== */

#searchCardBox {
    position: relative !important;
    z-index: 999999 !important;
    overflow: visible !important;
}

.search-section {
    position: relative !important;
    overflow: visible !important;
    z-index: 100 !important;
}

.search-container {
    position: relative !important;
    overflow: visible !important;
}

.search-card {
    position: relative !important;
    z-index: 1000000 !important;
}

.search-dropdown {
    position: absolute !important;
    z-index: 9999999 !important;
    pointer-events: auto !important;
    touch-action: manipulation !important;
}

.search-result-card,
.search-item {
    pointer-events: auto !important;
    touch-action: manipulation !important;
    -webkit-tap-highlight-color: transparent;
}

#searchInput {
    pointer-events: auto !important;
    touch-action: manipulation !important;
    position: relative !important;
    z-index: 1000001 !important;
}



/* ==========================================================================
   8. dropdown
   ========================================================================== */
/* Section Header Relative Position for Absolute Button */
.section-header {
  position: relative;
  text-align: center;
  margin-bottom: 30px;
}

/* Side-Positioned Compact (Chota) Button */
.updates-toggle-btn {
  position: absolute;
  top: 0;
  right: 0; /* Right side corner me place karega */
  background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.25);
  color: #3b82f6;
  padding: 5px 12px; /* Small compact padding */
  border-radius: 20px;
  font-family: inherit;
  font-size: 0.75rem; /* Small font size */
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 5;
}

.updates-toggle-btn:hover {
  background: #3b82f6;
  border-color: #3b82f6;
  color: #ffffff;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
  transform: translateY(-2px);
}

.updates-toggle-btn i {
  font-size: 0.7rem;
  transition: transform 0.3s ease;
}

/* Collapsible Grid Animation Wrapper */
.updates-grid-wrapper {
  max-height: 2000px;
  opacity: 1;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.4s ease,
              margin-top 0.4s ease;
}

.updates-grid-wrapper.collapsed {
  max-height: 0 !important;
  opacity: 0 !important;
  margin-top: 0 !important;
  pointer-events: none;
}

/* Mobile Responsive adjustment */
@media (max-width: 640px) {
  .updates-toggle-btn {
    position: relative;
    top: auto;
    right: auto;
    margin-bottom: 12px;
  }
}

/* ==========================================================================
   End of Forsko Stylesheet
   ========================================================================== */


   /* ==========================================================================
   FORSKO KNOWLEDGE UNIVERSE - COMPLETE MASTER STYLESHEET
   Features: Dual-Logo Circle Crossfade, Precision 6-Color Orbits, Anti-Buffer
   Theme: Dark Navy (#0B1120) | Sky Blue (#3B82F6) | Cyan (#00F2FE)
   ========================================================================== */

/* Main Canvas Stage */
.fk-universe-stage {
  position: relative;
  width: 580px;
  height: 580px;
  max-width: 100%;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  perspective: 1200px;
  -webkit-user-select: none;
  user-select: none;
}

/* 1. Deep Space Atmospheric Glow */
.fk-stage-backdrop {
  position: absolute;
  width: 96%;
  height: 96%;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(56, 189, 248, 0.22) 0%,
    rgba(30, 41, 59, 0.1) 45%,
    transparent 72%
  );
  filter: blur(55px);
  pointer-events: none;
  z-index: 1;
}

.fk-cosmic-grid {
  position: absolute;
  inset: 6%;
  border-radius: 50%;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.5;
  pointer-events: none;
  z-index: 1;
  mask-image: radial-gradient(circle, black 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(circle, black 30%, transparent 70%);
}

.fk-starfield {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.fk-spec {
  position: absolute;
  background-color: #ffffff;
  border-radius: 50%;
  opacity: 0.35;
  animation: fkStarBreathe 3.5s ease-in-out infinite alternate;
}

.fk-spec-1 { top: 16%; left: 24%; width: 2px; height: 2px; box-shadow: 0 0 7px #38bdf8; animation-delay: 0.2s; }
.fk-spec-2 { top: 20%; right: 18%; width: 3px; height: 3px; box-shadow: 0 0 8px #818cf8; animation-delay: 1.2s; }
.fk-spec-3 { bottom: 22%; left: 18%; width: 2.5px; height: 2.5px; box-shadow: 0 0 6px #34d399; animation-delay: 0.8s; }
.fk-spec-4 { bottom: 24%; right: 24%; width: 2px; height: 2px; box-shadow: 0 0 6px #fbbf24; animation-delay: 2.1s; }
.fk-spec-5 { top: 52%; left: 6%; width: 2px; height: 2px; box-shadow: 0 0 5px #f43f5e; animation-delay: 1.6s; }
.fk-spec-6 { top: 76%; right: 10%; width: 2.5px; height: 2.5px; box-shadow: 0 0 7px #a855f7; animation-delay: 0.5s; }

@keyframes fkStarBreathe {
  0% { opacity: 0.2; transform: scale(0.8); }
  100% { opacity: 0.95; transform: scale(1.4); }
}

/* 2. SVG Tracks (R1: 120px, R2: 185px, R3: 250px) */
.fk-svg-radar {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

.fk-radar-ring {
  fill: none;
  stroke-linecap: round;
  transition: stroke 0.4s ease;
}

.fk-ring-1 {
  stroke: rgba(56, 189, 248, 0.42);
  stroke-width: 1.5px;
  stroke-dasharray: 4 6;
}

.fk-ring-2 {
  stroke: rgba(99, 102, 241, 0.35);
  stroke-width: 1.5px;
  stroke-dasharray: 6 9;
}

.fk-ring-3 {
  stroke: rgba(168, 85, 247, 0.32);
  stroke-width: 1.5px;
  stroke-dasharray: 8 12;
}

.fk-radar-crosshairs line {
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 1.5px;
}

/* ==========================================================================
   3. CENTRAL GLOWING FORSKO CORE (Dual Logo Hover Crossfade inside Circle)
   ========================================================================== */
.fk-nucleus {
  position: absolute;
  width: 176px;
  height: 176px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
  pointer-events: auto;
}

/* Cybernetic Plasma Radial Background Glow */
.fk-nucleus-plasma-aura {
  position: absolute;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: radial-gradient(
    circle, 
    rgba(56, 189, 248, 0.75) 0%, 
    rgba(37, 99, 235, 0.45) 45%, 
    transparent 72%
  );
  filter: blur(18px);
  animation: fkPlasmaBreathe 4s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes fkPlasmaBreathe {
  0% { transform: scale(0.9); opacity: 0.65; }
  100% { transform: scale(1.22); opacity: 1; }
}

/* Circle Pedestal with STRICT OVERFLOW HIDDEN (Image can never spill out) */
.fk-nucleus-pedestal {
  position: relative;
  width: 148px;
  height: 148px;
  border-radius: 50%;
  overflow: hidden; /* STRICT CIRCLE BOUNDARY */
  background: radial-gradient(circle at 35% 30%, #1e293b 0%, #080d16 85%);
  border: 2px solid rgba(56, 189, 248, 0.75);
  box-shadow: 
    0 0 35px rgba(56, 189, 248, 0.55),
    0 16px 36px -8px rgba(0, 0, 0, 0.85),
    inset 0 0 25px rgba(56, 189, 248, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 3;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.4s ease, 
              border-color 0.4s ease;
}

.fk-nucleus:hover .fk-nucleus-pedestal {
  transform: scale(1.06);
  border-color: #38bdf8;
  box-shadow: 
    0 0 55px rgba(56, 189, 248, 0.9),
    0 20px 45px -8px rgba(0, 0, 0, 0.9),
    inset 0 0 35px rgba(56, 189, 248, 0.65);
}

/* Base Logo Setup */
.fk-nucleus-emblem {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 78%;
  height: 78%;
  transform: translate(-50%, -50%);
  object-fit: contain;
  pointer-events: none;
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              filter 0.4s ease;
  z-index: 2;
}

/* Primary Logo (Default State) */
.fk-emblem-primary {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
  filter: drop-shadow(0 0 14px rgba(56, 189, 248, 0.95));
}

/* Secondary Logo FORSKO2.png (Hover State) */
.fk-emblem-secondary {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.85);
  filter: drop-shadow(0 0 18px rgba(96, 165, 250, 0.95));
}

/* Hover Action: Perfect Crossfade */
.fk-nucleus-pedestal:hover .fk-emblem-primary {
  opacity: 0;
  transform: translate(-50%, -50%) scale(1.15);
}

.fk-nucleus-pedestal:hover .fk-emblem-secondary {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.fk-pedestal-specular {
  position: absolute;
  top: 4px;
  left: 16px;
  right: 16px;
  height: 38px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, transparent 100%);
  border-radius: 50% 50% 30% 30%;
  pointer-events: none;
  z-index: 5;
}

.fk-nucleus-energy-pulse {
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  border: 1.5px solid rgba(56, 189, 248, 0.45);
  pointer-events: none;
  animation: fkNucleusPulse 3.4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
}

.fk-nucleus-outer-rotor {
  position: absolute;
  inset: -24px;
  border-radius: 50%;
  border: 1px dashed rgba(99, 102, 241, 0.4);
  pointer-events: none;
  animation: fkRotorReverse 28s linear infinite;
}

.fk-nucleus-inner-shield {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.14);
  pointer-events: none;
}

@keyframes fkNucleusPulse {
  0% { transform: scale(0.92); opacity: 0.8; }
  100% { transform: scale(1.4); opacity: 0; }
}

@keyframes fkRotorReverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

/* ==========================================================================
   4. ORBIT TIERS (Dynamic Continuous Speed Kinematics)
   ========================================================================== */
.fk-orbit-tier {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  pointer-events: none;
  z-index: 10;
}

/* Tier 1 (R = 120px -> D = 240px) | Speed: 18s */
.fk-tier-1 {
  width: 240px;
  height: 240px;
  margin-top: -120px;
  margin-left: -120px;
  animation: fkOrbitTrack1 18s linear infinite;
}

/* Tier 2 (R = 185px -> D = 370px) | Speed: 26s */
.fk-tier-2 {
  width: 370px;
  height: 370px;
  margin-top: -185px;
  margin-left: -185px;
  animation: fkOrbitTrack2 26s linear infinite;
}

/* Tier 3 (R = 250px -> D = 500px) | Speed: 34s */
.fk-tier-3 {
  width: 500px;
  height: 500px;
  margin-top: -250px;
  margin-left: -250px;
  animation: fkOrbitTrack3 34s linear infinite;
}



@keyframes fkOrbitTrack1 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes fkOrbitTrack2 {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

@keyframes fkOrbitTrack3 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* ==========================================================================
   5. BUFFER-FREE RESOURCE NODES (Centered Exact Track Placement)
   ========================================================================== */
.fk-node-carrier {
  position: absolute;
  width: 54px;
  height: 54px;
  margin-top: -27px;
  margin-left: -27px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none !important;
  pointer-events: auto;
  cursor: pointer;
  z-index: 12;
}

/* Synchronized Counter-Rotations keep icons vertical */
.fk-tier-1 .fk-node-carrier {
  animation: fkCounterTier1 18s linear infinite;
}
.fk-tier-2 .fk-node-carrier {
  animation: fkCounterTier2 26s linear infinite;
}
.fk-tier-3 .fk-node-carrier {
  animation: fkCounterTier3 34s linear infinite;
}

@keyframes fkCounterTier1 {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

@keyframes fkCounterTier2 {
  from { transform: rotate(-360deg); }
  to { transform: rotate(0deg); }
}

@keyframes fkCounterTier3 {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

/* --------------------------------------------------------------------------
   EXACT 100% TRACK INTERSECTION POSITIONS (Radius Lock)
   -------------------------------------------------------------------------- */
/* Tier 1: R = 120px */
.fk-pos-1-top    { top: 0%; left: 50%; }
.fk-pos-1-bottom { top: 100%; left: 50%; }

/* Tier 2: R = 185px */
.fk-pos-2-left   { top: 50%; left: 0%; }
.fk-pos-2-right  { top: 50%; left: 100%; }

/* Tier 3: R = 250px (Angles: 50% ± 35.35%) */
.fk-pos-3-bl     { top: 85.35%; left: 14.65%; }
.fk-pos-3-tr     { top: 14.65%; left: 85.35%; }

/* 52px Glowing Capsule */
.fk-node-capsule {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #0b1120;
  border: 2px solid rgba(255, 255, 255, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8);
  transition: transform 0.25s ease-out,
              box-shadow 0.25s ease-out,
              border-color 0.25s ease-out;
  pointer-events: none; /* Stops mouse jitter/buffering completely */
}

.fk-ico {
  font-size: 1.35rem;
  transition: transform 0.25s ease-out;
}

/* ----------------------------------------------------
   INDIVIDUAL GLOW THEMES (All 6 Distinct Colors)
   ---------------------------------------------------- */
/* 1. Syllabus: Electric Cyan (#00F2FE) */
.fk-theme-cyan {
  color: #00f2fe;
  border-color: rgba(0, 242, 254, 0.6);
  box-shadow: 0 0 20px rgba(0, 242, 254, 0.45), 0 8px 20px rgba(0, 0, 0, 0.8);
}
.fk-node-carrier:hover .fk-theme-cyan {
  border-color: #00f2fe;
  box-shadow: 0 0 35px rgba(0, 242, 254, 0.95), 0 0 50px rgba(0, 242, 254, 0.5);
}

/* 2. Notes: Emerald Mint (#10B981) */
.fk-theme-mint {
  color: #34d399;
  border-color: rgba(52, 211, 153, 0.6);
  box-shadow: 0 0 20px rgba(52, 211, 153, 0.45), 0 8px 20px rgba(0, 0, 0, 0.8);
}
.fk-node-carrier:hover .fk-theme-mint {
  border-color: #34d399;
  box-shadow: 0 0 35px rgba(52, 211, 153, 0.95), 0 0 50px rgba(52, 211, 153, 0.5);
}

/* 3. PYQs: Solar Amber (#F59E0B) */
.fk-theme-amber {
  color: #fbbf24;
  border-color: rgba(251, 191, 36, 0.6);
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.45), 0 8px 20px rgba(0, 0, 0, 0.8);
}
.fk-node-carrier:hover .fk-theme-amber {
  border-color: #fbbf24;
  box-shadow: 0 0 35px rgba(251, 191, 36, 0.95), 0 0 50px rgba(251, 191, 36, 0.5);
}

/* 4. Question Bank: Electric Cobalt (#3B82F6) */
.fk-theme-cobalt {
  color: #60a5fa;
  border-color: rgba(96, 165, 250, 0.6);
  box-shadow: 0 0 20px rgba(96, 165, 250, 0.45), 0 8px 20px rgba(0, 0, 0, 0.8);
}
.fk-node-carrier:hover .fk-theme-cobalt {
  border-color: #60a5fa;
  box-shadow: 0 0 35px rgba(96, 165, 250, 0.95), 0 0 50px rgba(96, 165, 250, 0.5);
}

/* 5. Practicals: Ultraviolet Orchid (#A855F7) */
.fk-theme-orchid {
  color: #c084fc;
  border-color: rgba(192, 132, 252, 0.6);
  box-shadow: 0 0 20px rgba(192, 132, 252, 0.45), 0 8px 20px rgba(0, 0, 0, 0.8);
}
.fk-node-carrier:hover .fk-theme-orchid {
  border-color: #c084fc;
  box-shadow: 0 0 35px rgba(192, 132, 252, 0.95), 0 0 50px rgba(192, 132, 252, 0.5);
}

/* 6. Paper Patterns: Hyper Rose (#F43F5E) */
.fk-theme-rose {
  color: #fb7185;
  border-color: rgba(251, 113, 133, 0.6);
  box-shadow: 0 0 20px rgba(251, 113, 133, 0.45), 0 8px 20px rgba(0, 0, 0, 0.8);
}
.fk-node-carrier:hover .fk-theme-rose {
  border-color: #fb7185;
  box-shadow: 0 0 35px rgba(251, 113, 133, 0.95), 0 0 50px rgba(251, 113, 133, 0.5);
}

/* Hover Scale & Freeze Dynamics (Buffer-Free) */
.fk-node-carrier:hover .fk-node-capsule {
  transform: scale(1.2);
}

.fk-node-carrier:hover .fk-ico {
  transform: scale(1.08);
}

.fk-orbit-tier:hover {
  animation-play-state: paused;
}

.fk-orbit-tier:hover .fk-node-carrier {
  animation-play-state: paused;
}

.fk-universe-stage:hover .fk-node-carrier:not(:hover) {
  opacity: 0.42;
}

/* ==========================================================================
   6. STABLE HUD TOOLTIPS
   ========================================================================== */
.fk-hud-tooltip {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(8px) scale(0.92);
  background: rgba(11, 17, 32, 0.97);
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(56, 189, 248, 0.5);
  border-radius: 10px;
  padding: 6px 12px;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8), 0 0 16px rgba(56, 189, 248, 0.28);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
  z-index: 100;
}

.fk-tooltip-below {
  top: calc(100% + 10px);
}

.fk-tooltip-above {
  bottom: calc(100% + 10px);
  transform: translateX(-50%) translateY(-8px) scale(0.92);
}

.fk-hud-code {
  font-family: 'Consolas', 'Fira Code', monospace;
  font-size: 0.58rem;
  letter-spacing: 0.8px;
  color: #64748b;
}

.fk-hud-title {
  font-family: 'Exo 2', system-ui, sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.2px;
}

.fk-hud-sub {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.66rem;
  color: #94a3b8;
}

.fk-node-carrier:hover .fk-hud-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0) scale(1);
}

/* ==========================================================================
   7. RESPONSIVE MEDIA QUERIES (Mobile & Tablet)
   ========================================================================== */
@media (max-width: 768px) {
  .fk-universe-stage {
    width: 440px;
    height: 440px;
  }

  .fk-nucleus { width: 140px; height: 140px; }
  .fk-nucleus-pedestal { width: 120px; height: 120px; padding: 12px; }
  .fk-nucleus-plasma-aura { width: 135px; height: 135px; }

  /* 440px Scaled Tiers (R1: 90, R2: 140, R3: 190) */
  .fk-tier-1 { width: 180px; height: 180px; margin-top: -90px; margin-left: -90px; }
  .fk-tier-2 { width: 280px; height: 280px; margin-top: -140px; margin-left: -140px; }
  .fk-tier-3 { width: 380px; height: 380px; margin-top: -190px; margin-left: -190px; }

  .fk-node-carrier { width: 46px; height: 46px; margin-top: -23px; margin-left: -23px; }
  .fk-node-capsule { width: 46px; height: 46px; }
  .fk-ico { font-size: 1.15rem; }
}

@media (max-width: 480px) {
  .fk-universe-stage {
    width: 330px;
    height: 330px;
  }

  .fk-nucleus { width: 110px; height: 110px; }
  .fk-nucleus-pedestal { width: 92px; height: 92px; padding: 8px; }
  .fk-nucleus-plasma-aura { width: 105px; height: 105px; }

  /* 330px Scaled Tiers (R1: 68, R2: 105, R3: 142) */
  .fk-tier-1 { width: 136px; height: 136px; margin-top: -68px; margin-left: -68px; }
  .fk-tier-2 { width: 210px; height: 210px; margin-top: -105px; margin-left: -105px; }
  .fk-tier-3 { width: 284px; height: 284px; margin-top: -142px; margin-left: -142px; }

  .fk-node-carrier { width: 38px; height: 38px; margin-top: -19px; margin-left: -19px; }
  .fk-node-capsule { width: 38px; height: 38px; }
  .fk-ico { font-size: 0.95rem; }

  .fk-hud-tooltip { padding: 4px 8px; }
  .fk-hud-title { font-size: 0.76rem; }
  .fk-hud-sub, .fk-hud-code { display: none; }
}




/* ==========================================================================
   HD 3D PERSPECTIVE POSITIONS (Matching Reference Geometry)
   ========================================================================== */

/* 1. Center Hero: Syllabus (Prominent front position) */
.fh-pos-syllabus {
  top: 140px;
  left: 50%;
  transform: translate3d(-50%, 0, 70px) rotateY(-3deg);
  z-index: 12;
  animation: fhHeroFloat 5s ease-in-out infinite alternate;
}

@keyframes fhHeroFloat {
  0% { transform: translate3d(-50%, 0, 70px) rotateY(-3deg); }
  100% { transform: translate3d(-50%, -10px, 78px) rotateY(-1deg); }
}

.fh-pos-syllabus .fh-card-face {
  width: 146px;
  height: 146px;
  border-color: #38bdf8;
  box-shadow: 
    0 24px 48px -6px rgba(0, 0, 0, 0.9),
    0 0 42px rgba(56, 189, 248, 0.75),
    inset 0 0 28px rgba(56, 189, 248, 0.55);
}

.fh-pos-syllabus .fh-icon-box { font-size: 2.7rem; }
.fh-pos-syllabus .fh-tile-label { font-size: 1.08rem; }

/* 2. Left Top: Notes */
.fh-pos-notes {
  top: 30px;
  left: 65px;
  transform: translate3d(0, 0, 20px) rotateY(14deg) rotateX(4deg);
  z-index: 6;
  animation: fhFloatNotes 6.2s ease-in-out infinite alternate 0.4s;
}

@keyframes fhFloatNotes {
  0% { transform: translate3d(0, 0, 20px) rotateY(14deg) rotateX(4deg); }
  100% { transform: translate3d(4px, -8px, 28px) rotateY(12deg) rotateX(6deg); }
}

/* 3. Right Top: PYQs */
.fh-pos-pyqs {
  top: 20px;
  right: 60px;
  transform: translate3d(0, 0, 25px) rotateY(-16deg) rotateX(4deg);
  z-index: 6;
  animation: fhFloatPYQs 6.8s ease-in-out infinite alternate 0.8s;
}

@keyframes fhFloatPYQs {
  0% { transform: translate3d(0, 0, 25px) rotateY(-16deg) rotateX(4deg); }
  100% { transform: translate3d(-4px, -9px, 32px) rotateY(-13deg) rotateX(6deg); }
}

/* 4. Left Bottom: Question Bank */
.fh-pos-qb {
  top: 220px;
  left: 45px;
  transform: translate3d(0, 0, 35px) rotateY(16deg);
  z-index: 7;
  animation: fhFloatQB 7.2s ease-in-out infinite alternate 1.1s;
}

@keyframes fhFloatQB {
  0% { transform: translate3d(0, 0, 35px) rotateY(16deg); }
  100% { transform: translate3d(3px, 8px, 44px) rotateY(13deg); }
}

/* 5. Right Bottom: Practicals */
.fh-pos-practicals {
  top: 210px;
  right: 40px;
  transform: translate3d(0, 0, 40px) rotateY(-14deg);
  z-index: 7;
  animation: fhFloatPrac 7s ease-in-out infinite alternate 1.5s;
}

@keyframes fhFloatPrac {
  0% { transform: translate3d(0, 0, 40px) rotateY(-14deg); }
  100% { transform: translate3d(-3px, 8px, 48px) rotateY(-11deg); }
}

/* 6. Center Bottom: Paper Patterns */
.fh-pos-patterns {
  top: 335px;
  left: 50%;
  transform: translate3d(-50%, 0, 55px);
  z-index: 9;
  animation: fhFloatPatt 5.8s ease-in-out infinite alternate 0.7s;
}

@keyframes fhFloatPatt {
  0% { transform: translate3d(-50%, 0, 55px); }
  100% { transform: translate3d(-50%, 7px, 64px); }
}

.fh-pos-patterns .fh-card-face {
  width: 136px;
  height: 96px;
  padding: 8px 12px;
}

.fh-pos-patterns .fh-icon-box { font-size: 1.7rem; margin-bottom: 4px; }
.fh-pos-patterns .fh-tile-label { font-size: 0.86rem; }

/* ==========================================================================
   HOVER & INTERACTION
   ========================================================================== */
.fh-holo-tile:hover {
  z-index: 35;
  animation-play-state: paused;
}

.fh-holo-tile:hover .fh-card-face,
.fh-holo-tile:focus-visible .fh-card-face {
  transform: scale(1.1) translateY(-6px);
  border-color: #ffffff;
  box-shadow: 
    0 28px 55px -5px rgba(0, 0, 0, 0.95),
    0 0 55px rgba(56, 189, 248, 1),
    inset 0 0 35px rgba(56, 189, 248, 0.7);
}

.fh-holo-tile:hover .fh-icon-box {
  color: #ffffff;
  transform: scale(1.15);
  filter: drop-shadow(0 0 18px #38bdf8);
}

.fh-holo-tile:hover .fh-tile-beam {
  opacity: 1;
  filter: blur(2px);
}

/* ==========================================================================
   3. CENTRAL FORSKO LOGO ORB (Front-Stage Floating Identity)
   ========================================================================== */
.fh-holo-logo-core {
  position: absolute;
  top: 265px;
  left: 50%;
  transform: translate3d(-50%, 0, 110px); /* Highest Z-depth so it never hides */
  width: 82px;
  height: 82px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 30; /* Elevated above background cards */
  animation: fhLogoCoreHover 4.2s ease-in-out infinite alternate;
}

@keyframes fhLogoCoreHover {
  0% { transform: translate3d(-50%, 0, 110px) scale(0.96); }
  100% { transform: translate3d(-50%, -9px, 120px) scale(1.04); }
}

.fh-core-laser-column {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 3px;
  height: 80px;
  transform: translateX(-50%);
  background: linear-gradient(180deg, rgba(56, 189, 248, 0.8) 0%, transparent 100%);
  filter: drop-shadow(0 0 6px #38bdf8);
  pointer-events: none;
}

.fh-core-glow-aura {
  position: absolute;
  inset: -16px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.85) 0%, rgba(37, 99, 235, 0.35) 50%, transparent 75%);
  filter: blur(14px);
  pointer-events: none;
  animation: fhAuraPulse 3s ease-in-out infinite alternate;
}

@keyframes fhAuraPulse {
  0% { transform: scale(0.9); opacity: 0.65; }
  100% { transform: scale(1.25); opacity: 1; }
}

.fh-core-orbit-ring {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  border: 1.5px dashed rgba(56, 189, 248, 0.7);
  animation: fhCoreRingSpin 18s linear infinite;
  pointer-events: none;
}

@keyframes fhCoreRingSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.fh-core-badge-disc {
  position: relative;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #1e293b 0%, #080d16 85%);
  border: 2.2px solid rgba(56, 189, 248, 0.9);
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.9),
    0 0 32px rgba(56, 189, 248, 0.85),
    inset 0 0 20px rgba(56, 189, 248, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 8px;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.fh-holo-logo-core:hover .fh-core-badge-disc {
  transform: scale(1.15);
  border-color: #ffffff;
  box-shadow: 0 0 45px rgba(56, 189, 248, 1);
}

.fh-core-img {
  position: absolute;
  width: 80%;
  height: 80%;
  object-fit: contain;
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fh-core-primary {
  opacity: 1;
  filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.95));
}

.fh-core-hover {
  opacity: 0;
  transform: scale(0.85);
  filter: drop-shadow(0 0 12px #60a5fa);
}

.fh-holo-logo-core:hover .fh-core-primary {
  opacity: 0;
  transform: scale(1.15);
}

.fh-holo-logo-core:hover .fh-core-hover {
  opacity: 1;
  transform: scale(1);
}

/* ==========================================================================
   4. HOLOGRAPHIC 3D PROJECTION PEDESTAL (Bottom Base)
   ========================================================================== */
.fh-pedestal-platform {
  position: absolute;
  bottom: 25px;
  left: 50%;
  width: 380px;
  height: 125px;
  margin-left: -190px;
  transform: rotateX(72deg);
  transform-style: preserve-3d;
  pointer-events: none;
  z-index: 3;
}

.fh-pedestal-rim {
  position: absolute;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.fh-rim-3 {
  width: 380px;
  height: 380px;
  border: 4px solid #1e3a8a;
  background: radial-gradient(circle, #0284c7 0%, #0369a1 40%, #0f172a 75%, transparent 100%);
  box-shadow: 
    0 0 55px rgba(56, 189, 248, 0.75),
    0 15px 45px rgba(0, 0, 0, 0.95),
    inset 0 0 45px rgba(56, 189, 248, 0.65);
}

.fh-rim-2 {
  width: 300px;
  height: 300px;
  border: 2px solid #38bdf8;
  box-shadow: 0 0 28px rgba(56, 189, 248, 0.85), inset 0 0 22px rgba(56, 189, 248, 0.55);
  animation: fhPedestalRotate 22s linear infinite;
}

.fh-rim-1 {
  width: 230px;
  height: 230px;
  border: 2px dashed #93c5fd;
  box-shadow: 0 0 22px rgba(56, 189, 248, 0.95);
  animation: fhPedestalRotateRev 14s linear infinite;
}

.fh-pedestal-emitter {
  position: absolute;
  width: 145px;
  height: 145px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, #ffffff 0%, #38bdf8 45%, #0284c7 70%);
  box-shadow: 0 0 55px #38bdf8, 0 0 85px rgba(56, 189, 248, 0.95);
}

.fh-emitter-pulse {
  position: absolute;
  inset: -15px;
  border-radius: 50%;
  border: 2px solid #38bdf8;
  animation: fhPulseExpand 2.8s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
}

@keyframes fhPedestalRotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes fhPedestalRotateRev {
  from { transform: translate(-50%, -50%) rotate(360deg); }
  to { transform: translate(-50%, -50%) rotate(0deg); }
}

@keyframes fhPulseExpand {
  0% { transform: scale(0.9); opacity: 0.9; }
  100% { transform: scale(1.6); opacity: 0; }
}

/* ==========================================================================
   RESPONSIVE BREAKPOINTS (Mobile & Tablet Fit)
   ========================================================================== */
@media screen and (max-width: 992px) {
  .fh-hologram-stage {
    width: 470px;
    height: 480px;
    perspective: 1000px;
  }

  .fh-card-face { width: 110px; height: 110px; }
  .fh-pos-syllabus .fh-card-face { width: 126px; height: 126px; }
  .fh-pos-patterns .fh-card-face { width: 118px; height: 84px; }

  .fh-holo-logo-core {
    width: 68px;
    height: 68px;
    top: 235px;
  }
  .fh-core-badge-disc { width: 56px; height: 56px; }

  .fh-pedestal-platform { width: 320px; margin-left: -160px; }
  .fh-rim-3 { width: 320px; height: 320px; }
  .fh-rim-2 { width: 250px; height: 250px; }
  .fh-rim-1 { width: 190px; height: 190px; }
}

@media screen and (max-width: 768px) {
  .fh-hologram-stage {
    width: 380px;
    height: 420px;
    margin: 15px auto 0 auto;
  }

  .fh-card-face {
    width: 90px;
    height: 90px;
    border-radius: 14px;
    padding: 8px;
  }
  .fh-icon-box { font-size: 1.6rem; margin-bottom: 4px; }
  .fh-tile-label { font-size: 0.72rem; }

  .fh-pos-syllabus { top: 115px; }
  .fh-pos-syllabus .fh-card-face { width: 105px; height: 105px; }
  .fh-pos-syllabus .fh-icon-box { font-size: 2rem; }
  .fh-pos-syllabus .fh-tile-label { font-size: 0.82rem; }

  .fh-pos-notes { top: 25px; left: 35px; }
  .fh-pos-pyqs { top: 20px; right: 35px; }
  .fh-pos-qb { top: 175px; left: 25px; }
  .fh-pos-practicals { top: 165px; right: 20px; }
  .fh-pos-patterns { top: 270px; }
  .fh-pos-patterns .fh-card-face { width: 102px; height: 72px; }

  .fh-holo-logo-core {
    width: 58px;
    height: 58px;
    top: 205px;
  }
  .fh-core-badge-disc { width: 48px; height: 48px; }

  .fh-pedestal-platform {
    bottom: 20px;
    width: 260px;
    margin-left: -130px;
  }
  .fh-rim-3 { width: 260px; height: 260px; }
  .fh-rim-2 { width: 210px; height: 210px; }
  .fh-rim-1 { width: 160px; height: 160px; }
}

@media screen and (max-width: 480px) {
  .fh-hologram-stage {
    width: 320px;
    height: 360px;
  }

  .fh-card-face { width: 76px; height: 76px; border-radius: 12px; }
  .fh-icon-box { font-size: 1.3rem; }
  .fh-tile-label { font-size: 0.64rem; }

  .fh-pos-syllabus .fh-card-face { width: 90px; height: 90px; }
  .fh-pos-syllabus .fh-icon-box { font-size: 1.6rem; }
  .fh-pos-syllabus .fh-tile-label { font-size: 0.72rem; }

  .fh-pos-notes { top: 15px; left: 18px; }
  .fh-pos-pyqs { top: 12px; right: 18px; }
  .fh-pos-qb { top: 145px; left: 12px; }
  .fh-pos-practicals { top: 140px; right: 10px; }
  .fh-pos-patterns { top: 230px; }
  .fh-pos-patterns .fh-card-face { width: 88px; height: 62px; }

  .fh-holo-logo-core {
    width: 50px;
    height: 50px;
    top: 175px;
  }
  .fh-core-badge-disc { width: 40px; height: 40px; }

  .fh-pedestal-platform {
    bottom: 15px;
    width: 210px;
    margin-left: -105px;
  }
  .fh-rim-3 { width: 210px; height: 210px; }
  .fh-rim-2 { width: 165px; height: 165px; }
  .fh-rim-1 { width: 125px; height: 125px; }
}

/* ==========================================================================
   FORSKO HD 3D HOLOGRAPHIC PROJECTOR (Front Logo + Beveled Glass Dynamics)
   Theme: Cyan Laser (#38BDF8) | Deep Glow Blue (#2563EB) | Pure Glass Bevel
   ========================================================================== */

/* Main Stage Canvas */
.fh-hologram-stage {
  position: relative;
  width: 540px;
  height: 560px;
  max-width: 100%;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1200px;
  transform-style: preserve-3d;
  user-select: none;
  -webkit-user-select: none;
}

.fh-hologram-stage *,
.fh-hologram-stage *::before,
.fh-hologram-stage *::after {
  box-sizing: border-box;
}

/* 1. Volumetric Light Cone & Ambient Laser Glow */
.fh-ambient-cone {
  position: absolute;
  bottom: 45px;
  left: 50%;
  width: 480px;
  height: 420px;
  transform: translateX(-50%);
  background: radial-gradient(
    ellipse at 50% 100%,
    rgba(56, 189, 248, 0.4) 0%,
    rgba(37, 99, 235, 0.18) 40%,
    transparent 75%
  );
  filter: blur(32px);
  pointer-events: none;
  z-index: 1;
  animation: fhConeBreathe 4.5s ease-in-out infinite alternate;
}

@keyframes fhConeBreathe {
  0% { opacity: 0.65; transform: translateX(-50%) scale(0.95); }
  100% { opacity: 1; transform: translateX(-50%) scale(1.06); }
}

.fh-vertical-laser {
  position: absolute;
  top: 10px;
  bottom: 75px;
  left: 50%;
  width: 2.5px;
  transform: translateX(-50%);
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(56, 189, 248, 0.2) 15%,
    rgba(56, 189, 248, 0.85) 60%,
    rgba(224, 242, 254, 1) 100%
  );
  filter: drop-shadow(0 0 10px #38bdf8);
  pointer-events: none;
  z-index: 2;
  animation: fhLaserPulse 3s ease-in-out infinite alternate;
}

@keyframes fhLaserPulse {
  0% { opacity: 0.65; filter: drop-shadow(0 0 8px #38bdf8); }
  100% { opacity: 1; filter: drop-shadow(0 0 16px #38bdf8); }
}

.fh-stream-ray {
  position: absolute;
  bottom: 80px;
  width: 1.5px;
  height: 300px;
  background: linear-gradient(180deg, transparent 0%, rgba(56, 189, 248, 0.6) 50%, transparent 100%);
  filter: drop-shadow(0 0 8px #38bdf8);
  pointer-events: none;
  z-index: 2;
  opacity: 0.55;
}

.fh-ray-left { left: 30%; transform: rotate(16deg); animation: fhRayFloat 3.8s ease-in-out infinite alternate 0.4s; }
.fh-ray-right { right: 30%; transform: rotate(-16deg); animation: fhRayFloat 3.8s ease-in-out infinite alternate 1.8s; }

@keyframes fhRayFloat {
  0% { opacity: 0.3; transform: scaleY(0.9) rotate(14deg); }
  100% { opacity: 0.85; transform: scaleY(1.05) rotate(16deg); }
}

/* 2. Floating Tiles Cluster (Interactive 3D Layer) */
.fh-tiles-cluster {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  z-index: 5;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Base Card (HD 3D Holographic Beveled Glass Tile) */
.fh-holo-tile {
  position: absolute;
  text-decoration: none !important;
  color: #ffffff !important;
  transform-style: preserve-3d;
  cursor: pointer;
  outline: none;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease;
}

/* HD Beveled Glass Card Face */
.fh-card-face {
  position: relative;
  width: 128px;
  height: 128px;
  border-radius: 20px;
  background: linear-gradient(
    140deg,
    rgba(56, 189, 248, 0.38) 0%,
    rgba(37, 99, 235, 0.22) 40%,
    rgba(15, 23, 42, 0.88) 100%
  );
  border: 2px solid rgba(56, 189, 248, 0.75);
  box-shadow: 
    0 20px 40px -10px rgba(0, 0, 0, 0.85),
    0 0 28px rgba(56, 189, 248, 0.45),
    inset 0 0 24px rgba(56, 189, 248, 0.35),
    inset 0 2px 3px rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  text-align: center;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* HD 3D Glass Inner Bevel */
.fh-glass-bevel {
  position: absolute;
  inset: 2px;
  border-radius: 17px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  pointer-events: none;
}

/* Specular Curve Glare */
.fh-glass-specular {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 48%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.05) 75%, transparent 100%);
  border-radius: 18px 18px 50% 50%;
  pointer-events: none;
}

/* Scanning Beam */
.fh-card-scanline {
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 0%, rgba(56, 189, 248, 0.22) 50%, transparent 100%);
  animation: fhScanMove 4s linear infinite;
  pointer-events: none;
}

@keyframes fhScanMove {
  0% { top: -100%; }
  100% { top: 100%; }
}

/* Upward Projection Light Beams */
.fh-tile-beam {
  position: absolute;
  bottom: -46px;
  left: 50%;
  width: 82%;
  height: 46px;
  transform: translateX(-50%);
  background: linear-gradient(180deg, rgba(56, 189, 248, 0.4) 0%, transparent 100%);
  clip-path: polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);
  filter: blur(4px);
  pointer-events: none;
  opacity: 0.65;
  transition: opacity 0.3s ease;
}

/* Icon & Label */
.fh-icon-box {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #38bdf8;
  font-size: 2.2rem;
  margin-bottom: 8px;
  filter: drop-shadow(0 0 14px rgba(56, 189, 248, 1));
  transition: transform 0.3s ease, color 0.3s ease;
}

.fh-tile-label {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.92rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.3px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.9), 0 0 14px rgba(56, 189, 248, 0.7);
  line-height: 1.2;
}

/* ==========================================================================
   HD 3D PERSPECTIVE POSITIONS (Matching Reference Geometry)
   ========================================================================== */

/* 1. Center Hero: Syllabus (Prominent front position) */
.fh-pos-syllabus {
  top: 140px;
  left: 50%;
  transform: translate3d(-50%, 0, 70px) rotateY(-3deg);
  z-index: 12;
  animation: fhHeroFloat 5s ease-in-out infinite alternate;
}

@keyframes fhHeroFloat {
  0% { transform: translate3d(-50%, 0, 70px) rotateY(-3deg); }
  100% { transform: translate3d(-50%, -10px, 78px) rotateY(-1deg); }
}

.fh-pos-syllabus .fh-card-face {
  width: 146px;
  height: 146px;
  border-color: #38bdf8;
  box-shadow: 
    0 24px 48px -6px rgba(0, 0, 0, 0.9),
    0 0 42px rgba(56, 189, 248, 0.75),
    inset 0 0 28px rgba(56, 189, 248, 0.55);
}

.fh-pos-syllabus .fh-icon-box { font-size: 2.7rem; }
.fh-pos-syllabus .fh-tile-label { font-size: 1.08rem; }

/* 2. Left Top: Notes */
.fh-pos-notes {
  top: 30px;
  left: 65px;
  transform: translate3d(0, 0, 20px) rotateY(14deg) rotateX(4deg);
  z-index: 6;
  animation: fhFloatNotes 6.2s ease-in-out infinite alternate 0.4s;
}

@keyframes fhFloatNotes {
  0% { transform: translate3d(0, 0, 20px) rotateY(14deg) rotateX(4deg); }
  100% { transform: translate3d(4px, -8px, 28px) rotateY(12deg) rotateX(6deg); }
}

/* 3. Right Top: PYQs */
.fh-pos-pyqs {
  top: 20px;
  right: 60px;
  transform: translate3d(0, 0, 25px) rotateY(-16deg) rotateX(4deg);
  z-index: 6;
  animation: fhFloatPYQs 6.8s ease-in-out infinite alternate 0.8s;
}

@keyframes fhFloatPYQs {
  0% { transform: translate3d(0, 0, 25px) rotateY(-16deg) rotateX(4deg); }
  100% { transform: translate3d(-4px, -9px, 32px) rotateY(-13deg) rotateX(6deg); }
}

/* 4. Left Bottom: Question Bank */
.fh-pos-qb {
  top: 220px;
  left: 45px;
  transform: translate3d(0, 0, 35px) rotateY(16deg);
  z-index: 7;
  animation: fhFloatQB 7.2s ease-in-out infinite alternate 1.1s;
}

@keyframes fhFloatQB {
  0% { transform: translate3d(0, 0, 35px) rotateY(16deg); }
  100% { transform: translate3d(3px, 8px, 44px) rotateY(13deg); }
}

/* 5. Right Bottom: Practicals */
.fh-pos-practicals {
  top: 210px;
  right: 40px;
  transform: translate3d(0, 0, 40px) rotateY(-14deg);
  z-index: 7;
  animation: fhFloatPrac 7s ease-in-out infinite alternate 1.5s;
}

@keyframes fhFloatPrac {
  0% { transform: translate3d(0, 0, 40px) rotateY(-14deg); }
  100% { transform: translate3d(-3px, 8px, 48px) rotateY(-11deg); }
}

/* 6. Center Bottom: Paper Patterns */
.fh-pos-patterns {
  top: 335px;
  left: 50%;
  transform: translate3d(-50%, 0, 55px);
  z-index: 9;
  animation: fhFloatPatt 5.8s ease-in-out infinite alternate 0.7s;
}

@keyframes fhFloatPatt {
  0% { transform: translate3d(-50%, 0, 55px); }
  100% { transform: translate3d(-50%, 7px, 64px); }
}

.fh-pos-patterns .fh-card-face {
  width: 136px;
  height: 96px;
  padding: 8px 12px;
}

.fh-pos-patterns .fh-icon-box { font-size: 1.7rem; margin-bottom: 4px; }
.fh-pos-patterns .fh-tile-label { font-size: 0.86rem; }

/* ==========================================================================
   HOVER & INTERACTION
   ========================================================================== */
.fh-holo-tile:hover {
  z-index: 35;
  animation-play-state: paused;
}

.fh-holo-tile:hover .fh-card-face,
.fh-holo-tile:focus-visible .fh-card-face {
  transform: scale(1.1) translateY(-6px);
  border-color: #ffffff;
  box-shadow: 
    0 28px 55px -5px rgba(0, 0, 0, 0.95),
    0 0 55px rgba(56, 189, 248, 1),
    inset 0 0 35px rgba(56, 189, 248, 0.7);
}

.fh-holo-tile:hover .fh-icon-box {
  color: #ffffff;
  transform: scale(1.15);
  filter: drop-shadow(0 0 18px #38bdf8);
}

.fh-holo-tile:hover .fh-tile-beam {
  opacity: 1;
  filter: blur(2px);
}

/* ==========================================================================
   3. CENTRAL FORSKO LOGO ORB (Front-Stage Floating Identity)
   ========================================================================== */
.fh-holo-logo-core {
  position: absolute;
  top: 265px;
  left: 50%;
  transform: translate3d(-50%, 0, 110px); /* Highest Z-depth so it never hides */
  width: 82px;
  height: 82px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 30; /* Elevated above background cards */
  animation: fhLogoCoreHover 4.2s ease-in-out infinite alternate;
}

@keyframes fhLogoCoreHover {
  0% { transform: translate3d(-50%, 0, 110px) scale(0.96); }
  100% { transform: translate3d(-50%, -9px, 120px) scale(1.04); }
}

.fh-core-laser-column {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 3px;
  height: 80px;
  transform: translateX(-50%);
  background: linear-gradient(180deg, rgba(56, 189, 248, 0.8) 0%, transparent 100%);
  filter: drop-shadow(0 0 6px #38bdf8);
  pointer-events: none;
}

.fh-core-glow-aura {
  position: absolute;
  inset: -16px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.85) 0%, rgba(37, 99, 235, 0.35) 50%, transparent 75%);
  filter: blur(14px);
  pointer-events: none;
  animation: fhAuraPulse 3s ease-in-out infinite alternate;
}

@keyframes fhAuraPulse {
  0% { transform: scale(0.9); opacity: 0.65; }
  100% { transform: scale(1.25); opacity: 1; }
}

.fh-core-orbit-ring {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  border: 1.5px dashed rgba(56, 189, 248, 0.7);
  animation: fhCoreRingSpin 18s linear infinite;
  pointer-events: none;
}

@keyframes fhCoreRingSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.fh-core-badge-disc {
  position: relative;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #1e293b 0%, #080d16 85%);
  border: 2.2px solid rgba(56, 189, 248, 0.9);
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.9),
    0 0 32px rgba(56, 189, 248, 0.85),
    inset 0 0 20px rgba(56, 189, 248, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 8px;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.fh-holo-logo-core:hover .fh-core-badge-disc {
  transform: scale(1.15);
  border-color: #ffffff;
  box-shadow: 0 0 45px rgba(56, 189, 248, 1);
}

.fh-core-img {
  position: absolute;
  width: 80%;
  height: 80%;
  object-fit: contain;
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fh-core-primary {
  opacity: 1;
  filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.95));
}

.fh-core-hover {
  opacity: 0;
  transform: scale(0.85);
  filter: drop-shadow(0 0 12px #60a5fa);
}

.fh-holo-logo-core:hover .fh-core-primary {
  opacity: 0;
  transform: scale(1.15);
}

.fh-holo-logo-core:hover .fh-core-hover {
  opacity: 1;
  transform: scale(1);
}

/* ==========================================================================
   4. HOLOGRAPHIC 3D PROJECTION PEDESTAL (Bottom Base)
   ========================================================================== */
.fh-pedestal-platform {
  position: absolute;
  bottom: 25px;
  left: 50%;
  width: 380px;
  height: 125px;
  margin-left: -190px;
  transform: rotateX(72deg);
  transform-style: preserve-3d;
  pointer-events: none;
  z-index: 3;
}

.fh-pedestal-rim {
  position: absolute;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.fh-rim-3 {
  width: 380px;
  height: 380px;
  border: 4px solid #1e3a8a;
  background: radial-gradient(circle, #0284c7 0%, #0369a1 40%, #0f172a 75%, transparent 100%);
  box-shadow: 
    0 0 55px rgba(56, 189, 248, 0.75),
    0 15px 45px rgba(0, 0, 0, 0.95),
    inset 0 0 45px rgba(56, 189, 248, 0.65);
}

.fh-rim-2 {
  width: 300px;
  height: 300px;
  border: 2px solid #38bdf8;
  box-shadow: 0 0 28px rgba(56, 189, 248, 0.85), inset 0 0 22px rgba(56, 189, 248, 0.55);
  animation: fhPedestalRotate 22s linear infinite;
}

.fh-rim-1 {
  width: 230px;
  height: 230px;
  border: 2px dashed #93c5fd;
  box-shadow: 0 0 22px rgba(56, 189, 248, 0.95);
  animation: fhPedestalRotateRev 14s linear infinite;
}

.fh-pedestal-emitter {
  position: absolute;
  width: 145px;
  height: 145px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, #ffffff 0%, #38bdf8 45%, #0284c7 70%);
  box-shadow: 0 0 55px #38bdf8, 0 0 85px rgba(56, 189, 248, 0.95);
}

.fh-emitter-pulse {
  position: absolute;
  inset: -15px;
  border-radius: 50%;
  border: 2px solid #38bdf8;
  animation: fhPulseExpand 2.8s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
}

@keyframes fhPedestalRotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes fhPedestalRotateRev {
  from { transform: translate(-50%, -50%) rotate(360deg); }
  to { transform: translate(-50%, -50%) rotate(0deg); }
}

@keyframes fhPulseExpand {
  0% { transform: scale(0.9); opacity: 0.9; }
  100% { transform: scale(1.6); opacity: 0; }
}

/* ==========================================================================
   RESPONSIVE BREAKPOINTS (Mobile & Tablet Fit)
   ========================================================================== */
@media screen and (max-width: 992px) {
  .fh-hologram-stage {
    width: 470px;
    height: 480px;
    perspective: 1000px;
  }

  .fh-card-face { width: 110px; height: 110px; }
  .fh-pos-syllabus .fh-card-face { width: 126px; height: 126px; }
  .fh-pos-patterns .fh-card-face { width: 118px; height: 84px; }

  .fh-holo-logo-core {
    width: 68px;
    height: 68px;
    top: 235px;
  }
  .fh-core-badge-disc { width: 56px; height: 56px; }

  .fh-pedestal-platform { width: 320px; margin-left: -160px; }
  .fh-rim-3 { width: 320px; height: 320px; }
  .fh-rim-2 { width: 250px; height: 250px; }
  .fh-rim-1 { width: 190px; height: 190px; }
}

@media screen and (max-width: 768px) {
  .fh-hologram-stage {
    width: 380px;
    height: 420px;
    margin: 15px auto 0 auto;
  }

  .fh-card-face {
    width: 90px;
    height: 90px;
    border-radius: 14px;
    padding: 8px;
  }
  .fh-icon-box { font-size: 1.6rem; margin-bottom: 4px; }
  .fh-tile-label { font-size: 0.72rem; }

  .fh-pos-syllabus { top: 115px; }
  .fh-pos-syllabus .fh-card-face { width: 105px; height: 105px; }
  .fh-pos-syllabus .fh-icon-box { font-size: 2rem; }
  .fh-pos-syllabus .fh-tile-label { font-size: 0.82rem; }

  .fh-pos-notes { top: 25px; left: 35px; }
  .fh-pos-pyqs { top: 20px; right: 35px; }
  .fh-pos-qb { top: 175px; left: 25px; }
  .fh-pos-practicals { top: 165px; right: 20px; }
  .fh-pos-patterns { top: 270px; }
  .fh-pos-patterns .fh-card-face { width: 102px; height: 72px; }

  .fh-holo-logo-core {
    width: 58px;
    height: 58px;
    top: 205px;
  }
  .fh-core-badge-disc { width: 48px; height: 48px; }

  .fh-pedestal-platform {
    bottom: 20px;
    width: 260px;
    margin-left: -130px;
  }
  .fh-rim-3 { width: 260px; height: 260px; }
  .fh-rim-2 { width: 210px; height: 210px; }
  .fh-rim-1 { width: 160px; height: 160px; }
}

@media screen and (max-width: 480px) {
  .fh-hologram-stage {
    width: 320px;
    height: 360px;
  }

  .fh-card-face { width: 76px; height: 76px; border-radius: 12px; }
  .fh-icon-box { font-size: 1.3rem; }
  .fh-tile-label { font-size: 0.64rem; }

  .fh-pos-syllabus .fh-card-face { width: 90px; height: 90px; }
  .fh-pos-syllabus .fh-icon-box { font-size: 1.6rem; }
  .fh-pos-syllabus .fh-tile-label { font-size: 0.72rem; }

  .fh-pos-notes { top: 15px; left: 18px; }
  .fh-pos-pyqs { top: 12px; right: 18px; }
  .fh-pos-qb { top: 145px; left: 12px; }
  .fh-pos-practicals { top: 140px; right: 10px; }
  .fh-pos-patterns { top: 230px; }
  .fh-pos-patterns .fh-card-face { width: 88px; height: 62px; }

  .fh-holo-logo-core {
    width: 50px;
    height: 50px;
    top: 175px;
  }
  .fh-core-badge-disc { width: 40px; height: 40px; }

  .fh-pedestal-platform {
    bottom: 15px;
    width: 210px;
    margin-left: -105px;
  }
  .fh-rim-3 { width: 210px; height: 210px; }
  .fh-rim-2 { width: 165px; height: 165px; }
  .fh-rim-1 { width: 125px; height: 125px; }
}


/* ==========================================================================
   FORSKO LEARNING DNA — HERO RIGHT-SIDE VISUAL SYSTEM
   Scope Prefix: .fld-
   Theme: Transparent Stage / Cyan (#38BDF8) / Electric Blue (#2563EB)
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. ISOLATED ROOT STAGE
   -------------------------------------------------------------------------- */
.fld-hero-scope {
  --fld-cyan: #38bdf8;
  --fld-cyan-glow: rgba(56, 189, 248, 0.45);
  --fld-electric: #2563eb;
  --fld-bright-blue: #60a5fa;
  --fld-navy-glass: rgba(15, 23, 42, 0.82);
  --fld-navy-deep: #0b1120;
  --fld-text-bright: #ffffff;
  --fld-text-muted: rgba(255, 255, 255, 0.65);
  --fld-text-dim: #94a3b8;
  --fld-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --fld-ease-smooth: all 0.35s var(--fld-ease-out);

  position: relative;
  width: 100%;
  max-width: 540px;
  height: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent !important;
  perspective: 1200px;
  transform-style: preserve-3d;
  box-sizing: border-box;
  overflow: visible;
  isolation: isolate;
  user-select: none;
  -webkit-user-select: none;
}

.fld-hero-scope *,
.fld-hero-scope *::before,
.fld-hero-scope *::after {
  box-sizing: border-box;
}

.fld-dna-stage {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  background: transparent;
}

/* --------------------------------------------------------------------------
   2. AMBIENT ATMOSPHERE & QUANTUM AXIS
   -------------------------------------------------------------------------- */
.fld-dna-atmosphere {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  transform: translateZ(-60px);
}

.fld-ambient-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 380px;
  height: 480px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center,
    rgba(56, 189, 248, 0.16) 0%,
    rgba(37, 99, 235, 0.08) 45%,
    transparent 72%
  );
  filter: blur(48px);
  animation: fldAmbientBreathe 7s ease-in-out infinite alternate;
}

@keyframes fldAmbientBreathe {
  0% { transform: translate(-50%, -50%) scale(0.92); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(1.08); opacity: 1; }
}

.fld-vertical-axis {
  position: absolute;
  top: 30px;
  bottom: 30px;
  left: 50%;
  width: 1.5px;
  transform: translateX(-50%);
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(56, 189, 248, 0.25) 20%,
    rgba(56, 189, 248, 0.6) 50%,
    rgba(56, 189, 248, 0.25) 80%,
    transparent 100%
  );
  filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.6));
}

.fld-projection-beam {
  position: absolute;
  bottom: 20px;
  left: 50%;
  width: 180px;
  height: 120px;
  transform: translateX(-50%);
  background: radial-gradient(
    ellipse at center bottom,
    rgba(56, 189, 248, 0.25) 0%,
    rgba(37, 99, 235, 0.1) 45%,
    transparent 75%
  );
  filter: blur(14px);
}

/* --------------------------------------------------------------------------
   3. FLOATING QUANTUM PARTICLES (Gentle Wandering)
   -------------------------------------------------------------------------- */
.fld-dna-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  transform: translateZ(-20px);
}

.fld-particle {
  position: absolute;
  border-radius: 50%;
  background-color: var(--fld-cyan);
  box-shadow: 0 0 8px var(--fld-cyan);
  opacity: 0.35;
}

.fld-p-1 { top: 12%; left: 24%; width: 2.5px; height: 2.5px; animation: fldParticleWander 6.2s ease-in-out infinite alternate 0.2s; }
.fld-p-2 { top: 22%; right: 22%; width: 3px; height: 3px; box-shadow: 0 0 8px #60a5fa; animation: fldParticleWander 7.4s ease-in-out infinite alternate 1.5s; }
.fld-p-3 { top: 48%; left: 16%; width: 2px; height: 2px; animation: fldParticleWander 8.1s ease-in-out infinite alternate 0.9s; }
.fld-p-4 { top: 68%; right: 18%; width: 3px; height: 3px; animation: fldParticleWander 6.8s ease-in-out infinite alternate 2.3s; }
.fld-p-5 { bottom: 18%; left: 28%; width: 2px; height: 2px; animation: fldParticleWander 7.7s ease-in-out infinite alternate 1.1s; }
.fld-p-6 { bottom: 10%; right: 26%; width: 2.5px; height: 2.5px; animation: fldParticleWander 8.5s ease-in-out infinite alternate 0.4s; }

@keyframes fldParticleWander {
  0% { transform: translate3d(0, 0, 0) scale(0.85); opacity: 0.2; }
  100% { transform: translate3d(3px, -11px, 0) scale(1.15); opacity: 0.65; }
}

/* --------------------------------------------------------------------------
   4. TERMINAL EMITTER RINGS
   -------------------------------------------------------------------------- */
.fld-dna-rings {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  transform-style: preserve-3d;
}

.fld-terminal-ring {
  position: absolute;
  left: 50%;
  width: 90px;
  height: 24px;
  margin-left: -45px;
  border-radius: 50%;
  border: 1.5px dashed rgba(56, 189, 248, 0.45);
  box-shadow: 0 0 14px rgba(56, 189, 248, 0.3), inset 0 0 10px rgba(56, 189, 248, 0.2);
  transform: rotateX(72deg);
}

.fld-ring-top {
  top: 24px;
  animation: fldRingSpin 24s linear infinite;
}

.fld-ring-bottom {
  bottom: 24px;
  animation: fldRingSpin 24s linear infinite reverse;
}

@keyframes fldRingSpin {
  from { transform: rotateX(72deg) rotateZ(0deg); }
  to { transform: rotateX(72deg) rotateZ(360deg); }
}

/* --------------------------------------------------------------------------
   5. VECTOR HELIX: STRANDS, RUNGS & DATA FLOW
   -------------------------------------------------------------------------- */
.fld-dna-helix {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 3;
}

.fld-dna-svg {
  width: 100%;
  height: 100%;
  display: block;
  overflow: visible;
  filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.35));
}

.fld-dna-strand {
  fill: none;
  stroke-width: 3.2px;
  stroke-linecap: round;
  stroke-dasharray: 600;
  stroke-dashoffset: 0;
  will-change: stroke-dashoffset, filter;
}

.fld-strand-a {
  stroke: url(#fldStrandGradA);
  animation: fldStrandStreamA 16s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.fld-strand-b {
  stroke: url(#fldStrandGradB);
  animation: fldStrandStreamB 18s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes fldStrandStreamA {
  0% { stroke-dashoffset: 0; stroke-opacity: 0.85; }
  50% { stroke-opacity: 1; }
  100% { stroke-dashoffset: -600; stroke-opacity: 0.85; }
}

@keyframes fldStrandStreamB {
  0% { stroke-dashoffset: 0; stroke-opacity: 0.8; }
  50% { stroke-opacity: 0.95; }
  100% { stroke-dashoffset: 600; stroke-opacity: 0.8; }
}

/* Base-Pair Connecting Bars */
.fld-rung {
  stroke: rgba(56, 189, 248, 0.32);
  stroke-width: 1.6px;
  stroke-dasharray: 4 5;
  stroke-linecap: round;
  transition: stroke 0.35s ease, stroke-width 0.35s ease, filter 0.35s ease;
}

.fld-rung-1 { animation: fldRungBreathe 5.2s ease-in-out infinite alternate 0.3s; }
.fld-rung-2 { animation: fldRungBreathe 6.1s ease-in-out infinite alternate 1.1s; }
.fld-rung-core { stroke: rgba(56, 189, 248, 0.55); stroke-width: 2px; stroke-dasharray: none; animation: fldRungBreathe 4.4s ease-in-out infinite alternate 0.6s; }
.fld-rung-4 { animation: fldRungBreathe 5.7s ease-in-out infinite alternate 1.8s; }
.fld-rung-5 { animation: fldRungBreathe 6.5s ease-in-out infinite alternate 0.9s; }

@keyframes fldRungBreathe {
  0% { stroke-opacity: 0.25; stroke-width: 1.4px; }
  100% { stroke-opacity: 0.65; stroke-width: 1.8px; }
}

/* Synaptic Transmission Packets */
.fld-pulse-dot {
  fill: #ffffff;
  filter: drop-shadow(0 0 6px #38bdf8);
}

.fld-pulse-1 { animation: fldPulseSlide 4.6s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite; }
.fld-pulse-2 { animation: fldPulseSlide 5.4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite 1.4s; }
.fld-pulse-3 { animation: fldPulseSlide 4.9s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite 2.2s; }
.fld-pulse-4 { animation: fldPulseSlide 5.8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite 0.8s; }

@keyframes fldPulseSlide {
  0% { transform: translateX(-110px); opacity: 0; }
  15% { opacity: 0.9; }
  85% { opacity: 0.9; }
  100% { transform: translateX(110px); opacity: 0; }
}

/* --------------------------------------------------------------------------
   6. CENTRAL FORSKO LOGO NUCLEUS (Enlarged & Prominent)
   -------------------------------------------------------------------------- */
.fld-dna-core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 168px;
  height: 168px;
  transform: translate(-50%, -50%) translateZ(55px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20; /* Elevated above strands & nodes */
  pointer-events: auto;
  cursor: pointer;
  outline: none;
}

.fld-core-wave {
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  border: 1.5px solid rgba(56, 189, 248, 0.35);
  pointer-events: none;
  animation: fldQuantumWaveRelease 5.8s cubic-bezier(0.16, 0.85, 0.45, 1) infinite;
}

.fld-core-wave-2 {
  animation: fldQuantumWaveRelease 5.8s cubic-bezier(0.16, 0.85, 0.45, 1) infinite 2.9s;
}

@keyframes fldQuantumWaveRelease {
  0% { transform: scale(0.88); opacity: 0.75; border-color: rgba(56, 189, 248, 0.65); }
  40% { opacity: 0.4; }
  100% { transform: scale(1.42); opacity: 0; border-color: rgba(37, 99, 235, 0); }
}

.fld-core-rotor {
  position: absolute;
  inset: -22px;
  border-radius: 50%;
  border: 1.2px dashed rgba(56, 189, 248, 0.4);
  animation: fldRotorGentleSpin 44s linear infinite;
  pointer-events: none;
}

@keyframes fldRotorGentleSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.fld-core-capsule {
  position: relative;
  width: 152px;
  height: 152px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 28%, #1e293b 0%, #0f172a 60%, #070d18 100%);
  border: 1.8px solid rgba(56, 189, 248, 0.65);
  box-shadow: 
    0 18px 40px -8px rgba(0, 0, 0, 0.9),
    0 0 35px rgba(56, 189, 248, 0.38),
    inset 0 0 28px rgba(56, 189, 248, 0.28),
    inset 0 1px 2px rgba(255, 255, 255, 0.45);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  text-align: center;
  overflow: hidden;
  z-index: 3;
  animation: fldCoreDrift 6.4s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate;
  transition: transform 0.4s var(--fld-ease-out), border-color 0.4s ease, box-shadow 0.4s ease;
  will-change: transform;
}

@keyframes fldCoreDrift {
  0% { transform: translateY(0) scale(0.99); }
  50% { transform: translateY(-3px) scale(1.01); }
  100% { transform: translateY(-6px) scale(1.005); }
}

.fld-dna-core:hover .fld-core-capsule {
  border-color: #38bdf8;
  box-shadow: 
    0 24px 50px -8px rgba(0, 0, 0, 0.95),
    0 0 52px rgba(56, 189, 248, 0.75),
    inset 0 0 36px rgba(56, 189, 248, 0.55);
}

.fld-core-glare {
  position: absolute;
  top: 3px;
  left: 20px;
  right: 20px;
  height: 42px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.28) 0%, transparent 100%);
  border-radius: 50% 50% 35% 35%;
  pointer-events: none;
  z-index: 5;
}

.fld-core-emblem-wrap {
  position: relative;
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  margin-bottom: 2px;
  z-index: 4;
}

.fld-core-emblem-wrap::before {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.55) 0%, rgba(37, 99, 235, 0.25) 50%, transparent 75%);
  filter: blur(10px);
  pointer-events: none;
  z-index: 1;
  animation: fldCoreBacklightBreathe 5.2s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate;
}

@keyframes fldCoreBacklightBreathe {
  0% { transform: scale(0.88); opacity: 0.45; filter: blur(9px); }
  100% { transform: scale(1.14); opacity: 0.85; filter: blur(13px); }
}

.fld-core-logo {
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 58px;
  max-height: 58px;
  object-fit: contain;
  pointer-events: none;
  z-index: 2;
  transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), filter 0.45s ease;
}

.fld-logo-primary {
  opacity: 1;
  transform: scale(1);
  filter: drop-shadow(0 0 12px rgba(56, 189, 248, 0.85));
  animation: fldLogoGlowBreathe 4.6s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate;
}

@keyframes fldLogoGlowBreathe {
  0% { filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.75)); }
  100% { filter: drop-shadow(0 0 18px rgba(56, 189, 248, 0.98)); }
}

.fld-logo-secondary {
  opacity: 0;
  transform: scale(0.88);
  filter: drop-shadow(0 0 16px rgba(96, 165, 250, 0.9));
}

.fld-dna-core:hover .fld-logo-primary {
  opacity: 0;
  transform: scale(1.12);
}

.fld-dna-core:hover .fld-logo-secondary {
  opacity: 1;
  transform: scale(1.04);
}

.fld-core-title {
  margin: 0;
  font-family: 'Exo 2', system-ui, -apple-system, sans-serif;
  font-size: 1.28rem;
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 1.1;
  color: var(--fld-text-bright);
  text-shadow: 0 0 14px rgba(56, 189, 248, 0.85);
  z-index: 4;
}

.fld-core-tagline {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.48rem;
  font-weight: 700;
  letter-spacing: 0.7px;
  color: var(--fld-text-muted);
  text-transform: uppercase;
  margin-top: 2px;
  z-index: 4;
}

.fld-core-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  background: rgba(11, 17, 32, 0.88);
  border: 1px solid rgba(56, 189, 248, 0.35);
  border-radius: 12px;
  padding: 1px 7px;
  z-index: 4;
}

.fld-status-spark {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--fld-cyan);
  box-shadow: 0 0 6px var(--fld-cyan);
  animation: fldSparkPulse 2.2s ease-in-out infinite;
}

@keyframes fldSparkPulse {
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50% { opacity: 1; transform: scale(1.3); }
}

.fld-status-text {
  font-family: 'Consolas', 'Fira Code', monospace;
  font-size: 0.42rem;
  font-weight: 800;
  letter-spacing: 0.8px;
  color: var(--fld-cyan);
}

/* --------------------------------------------------------------------------
   7. SIX HOLOGRAPHIC RESOURCE NODES (3D Asynchronous Staging)
   -------------------------------------------------------------------------- */
.fld-nodes-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 8;
  transform-style: preserve-3d;
}

.fld-node {
  position: absolute;
  display: inline-flex;
  align-items: center;
  text-decoration: none !important;
  color: #ffffff !important;
  pointer-events: auto;
  cursor: pointer;
  outline: none;
  transform-style: preserve-3d;
  transition: transform 0.35s var(--fld-ease-out), filter 0.35s ease;
  will-change: transform;
}

/* Asynchronous Harmonic Tiers */
.fld-node-syllabus {
  top: 72px;
  left: 20px;
  transform: translateZ(30px);
  animation: fldFloatTierSyllabus 7.3s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate;
}
@keyframes fldFloatTierSyllabus {
  0% { transform: translate3d(0, 0, 30px); }
  100% { transform: translate3d(0, -6px, 35px); }
}

.fld-node-notes {
  top: 72px;
  right: 20px;
  transform: translateZ(30px);
  animation: fldFloatTierNotes 8.4s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate 0.7s;
}
@keyframes fldFloatTierNotes {
  0% { transform: translate3d(0, 0, 30px); }
  100% { transform: translate3d(0, 7px, 36px); }
}

.fld-node-pyqs {
  top: 172px;
  left: 36px;
  transform: translateZ(45px);
  animation: fldFloatTierPYQs 7.9s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate 1.4s;
}
@keyframes fldFloatTierPYQs {
  0% { transform: translate3d(0, 0, 42px); }
  100% { transform: translate3d(0, -7px, 48px); }
}

.fld-node-qb {
  top: 172px;
  right: 36px;
  transform: translateZ(45px);
  animation: fldFloatTierQB 9.1s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate 0.4s;
}
@keyframes fldFloatTierQB {
  0% { transform: translate3d(0, 0, 42px); }
  100% { transform: translate3d(0, 6px, 46px); }
}

.fld-node-practicals {
  top: 372px;
  left: 32px;
  transform: translateZ(40px);
  animation: fldFloatTierPracticals 8.1s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate 1.9s;
}
@keyframes fldFloatTierPracticals {
  0% { transform: translate3d(0, 0, 38px); }
  100% { transform: translate3d(0, -6px, 44px); }
}

.fld-node-patterns {
  top: 372px;
  right: 32px;
  transform: translateZ(40px);
  animation: fldFloatTierPatterns 8.8s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate 1.1s;
}
@keyframes fldFloatTierPatterns {
  0% { transform: translate3d(0, 0, 38px); }
  100% { transform: translate3d(0, 7px, 43px); }
}

/* Synaptic Anchor Pin */
.fld-node-anchor-pin {
  position: absolute;
  top: 50%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--fld-cyan);
  box-shadow: 0 0 8px var(--fld-cyan);
  transform: translateY(-50%);
  pointer-events: none;
  transition: var(--fld-ease-smooth);
}

.fld-node-syllabus .fld-node-anchor-pin,
.fld-node-pyqs .fld-node-anchor-pin,
.fld-node-practicals .fld-node-anchor-pin {
  right: -12px;
}

.fld-node-notes .fld-node-anchor-pin,
.fld-node-qb .fld-node-anchor-pin,
.fld-node-patterns .fld-node-anchor-pin {
  left: -12px;
}

/* Glassmorphic Capsule Card */
.fld-node-capsule {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px 8px 10px;
  border-radius: 14px;
  background: var(--fld-navy-glass);
  border: 1.5px solid rgba(56, 189, 248, 0.4);
  box-shadow: 
    0 12px 28px -6px rgba(0, 0, 0, 0.75),
    0 0 20px rgba(56, 189, 248, 0.25),
    inset 0 0 14px rgba(56, 189, 248, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  overflow: hidden;
  transition: transform 0.24s cubic-bezier(0.16, 1, 0.3, 1), background 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease;
}

.fld-node-specular {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 48%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, transparent 100%);
  border-radius: 14px 14px 40% 40%;
  pointer-events: none;
}

.fld-node-icon-box {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: rgba(56, 189, 248, 0.15);
  border: 1px solid rgba(56, 189, 248, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--fld-cyan);
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.3);
  transition: var(--fld-ease-smooth);
}

.fld-node-icon {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.fld-node-text-wrap {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.fld-node-title {
  font-family: 'Exo 2', system-ui, -apple-system, sans-serif;
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.6px;
  color: var(--fld-text-bright);
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.9);
  transition: color 0.3s ease;
}

.fld-node-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.62rem;
  font-weight: 500;
  color: var(--fld-text-dim);
  letter-spacing: 0.2px;
  margin-top: 2px;
}

/* --------------------------------------------------------------------------
   8. HOVER, ACTIVE & INTERACTION DYNAMICS
   -------------------------------------------------------------------------- */
.fld-node:hover {
  z-index: 25;
  animation-play-state: paused;
}

.fld-node:hover .fld-node-capsule,
.fld-node:focus-visible .fld-node-capsule {
  transform: scale(1.08) translateY(-4px);
  background: rgba(15, 23, 42, 0.92);
  border-color: #38bdf8;
  box-shadow: 
    0 18px 36px -6px rgba(0, 0, 0, 0.9),
    0 0 35px var(--fld-cyan-glow),
    inset 0 0 20px rgba(56, 189, 248, 0.45);
}

.fld-node:hover .fld-node-icon-box,
.fld-node:focus-visible .fld-node-icon-box {
  background: rgba(56, 189, 248, 0.3);
  border-color: #ffffff;
  color: #ffffff;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.8);
  transform: scale(1.1);
}

.fld-node:hover .fld-node-title,
.fld-node:focus-visible .fld-node-title {
  color: var(--fld-cyan);
  text-shadow: 0 0 12px var(--fld-cyan-glow);
}

.fld-node:hover .fld-node-anchor-pin,
.fld-node:focus-visible .fld-node-anchor-pin {
  background-color: #ffffff;
  box-shadow: 0 0 14px var(--fld-cyan);
  transform: translateY(-50%) scale(1.4);
}

/* Connected Rung Highlight Hooks */
.fld-hero-scope:has(.fld-node-syllabus:hover) .fld-rung-1,
.fld-hero-scope:has(.fld-node-notes:hover) .fld-rung-1 {
  stroke: #38bdf8 !important;
  stroke-width: 2.8px !important;
  stroke-dasharray: none !important;
  filter: drop-shadow(0 0 8px #38bdf8);
}

.fld-hero-scope:has(.fld-node-pyqs:hover) .fld-rung-2,
.fld-hero-scope:has(.fld-node-qb:hover) .fld-rung-2 {
  stroke: #38bdf8 !important;
  stroke-width: 2.8px !important;
  stroke-dasharray: none !important;
  filter: drop-shadow(0 0 8px #38bdf8);
}

.fld-hero-scope:has(.fld-node-practicals:hover) .fld-rung-4,
.fld-hero-scope:has(.fld-node-patterns:hover) .fld-rung-4 {
  stroke: #38bdf8 !important;
  stroke-width: 2.8px !important;
  stroke-dasharray: none !important;
  filter: drop-shadow(0 0 8px #38bdf8);
}

/* --------------------------------------------------------------------------
   9. RESPONSIVE BREAKPOINT MATRICES
   -------------------------------------------------------------------------- */
@media screen and (max-width: 992px) {
  .fld-hero-scope {
    max-width: 480px;
    height: 540px;
    perspective: 1000px;
  }
  .fld-dna-core { width: 148px; height: 148px; }
  .fld-core-capsule { width: 134px; height: 134px; }
  .fld-core-emblem-wrap { width: 50px; height: 50px; }
  .fld-core-title { font-size: 1.15rem; }
  .fld-node-capsule { padding: 6px 12px 6px 8px; border-radius: 12px; }
  .fld-node-icon-box { width: 30px; height: 30px; }
  .fld-node-icon { font-size: 0.9rem; }
  .fld-node-title { font-size: 0.78rem; }
  .fld-node-desc { font-size: 0.56rem; }
  .fld-node-syllabus { top: 65px; left: 14px; }
  .fld-node-notes { top: 65px; right: 14px; }
  .fld-node-pyqs { top: 155px; left: 26px; }
  .fld-node-qb { top: 155px; right: 26px; }
  .fld-node-practicals { top: 335px; left: 22px; }
  .fld-node-patterns { top: 335px; right: 22px; }
}

@media screen and (max-width: 768px) {
  .fld-hero-scope {
    max-width: 410px;
    height: 500px;
    margin: 15px auto 0 auto;
    perspective: 800px;
  }
  .fld-ambient-glow { width: 300px; height: 360px; }
  .fld-p-4, .fld-p-5, .fld-p-6 { display: none; }
  .fld-dna-core { width: 126px; height: 126px; }
  .fld-core-capsule { width: 114px; height: 114px; padding: 8px; }
  .fld-core-emblem-wrap { width: 42px; height: 42px; }
  .fld-core-title { font-size: 1.05rem; }
  .fld-core-tagline, .fld-core-status-pill, .fld-node-desc { display: none; }
  .fld-node-capsule { padding: 5px 10px 5px 6px; gap: 7px; }
  .fld-node-icon-box { width: 26px; height: 26px; border-radius: 8px; }
  .fld-node-icon { font-size: 0.8rem; }
  .fld-node-title { font-size: 0.72rem; }
  .fld-node-anchor-pin { width: 5px; height: 5px; }
  .fld-node-syllabus { top: 60px; left: 8px; }
  .fld-node-notes { top: 60px; right: 8px; }
  .fld-node-pyqs { top: 145px; left: 16px; }
  .fld-node-qb { top: 145px; right: 16px; }
  .fld-node-practicals { top: 310px; left: 14px; }
  .fld-node-patterns { top: 310px; right: 14px; }
}

@media screen and (max-width: 480px) {
  .fld-hero-scope {
    max-width: 320px;
    height: 440px;
    overflow-x: hidden;
  }
  .fld-terminal-ring { width: 70px; margin-left: -35px; }
  .fld-dna-core { width: 104px; height: 104px; }
  .fld-core-capsule { width: 94px; height: 94px; padding: 6px; }
  .fld-core-emblem-wrap { width: 34px; height: 34px; }
  .fld-core-title { font-size: 0.9rem; }
  .fld-node-capsule { padding: 4px 8px 4px 5px; gap: 5px; }
  .fld-node-icon-box { width: 22px; height: 22px; }
  .fld-node-icon { font-size: 0.7rem; }
  .fld-node-title { font-size: 0.65rem; }
  .fld-node-syllabus { top: 52px; left: 4px; }
  .fld-node-notes { top: 52px; right: 4px; }
  .fld-node-pyqs { top: 130px; left: 10px; }
  .fld-node-qb { top: 130px; right: 10px; }
  .fld-node-practicals { top: 275px; left: 8px; }
  .fld-node-patterns { top: 275px; right: 8px; }
}

/* --------------------------------------------------------------------------
   10. REDUCED MOTION SAFEGUARD
   -------------------------------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  .fld-ambient-glow,
  .fld-particle,
  .fld-ring-top,
  .fld-ring-bottom,
  .fld-strand-a,
  .fld-strand-b,
  .fld-rung,
  .fld-pulse-dot,
  .fld-core-wave,
  .fld-core-rotor,
  .fld-core-capsule,
  .fld-core-emblem-wrap::before,
  .fld-logo-primary,
  .fld-status-spark,
  .fld-node-syllabus,
  .fld-node-notes,
  .fld-node-pyqs,
  .fld-node-qb,
  .fld-node-practicals,
  .fld-node-patterns {
    animation: none !important;
  }

  .fld-hero-scope,
  .fld-node,
  .fld-node-capsule,
  .fld-core-capsule {
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease !important;
  }
}

/* ==========================================================================
   FORSKO LEARNING DNA — HERO RIGHT-SIDE VISUAL SYSTEM
   Scope Prefix: .fld-
   Theme: Transparent Stage / Cyan (#38BDF8) / Electric Blue (#2563EB)
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. ISOLATED ROOT STAGE
   -------------------------------------------------------------------------- */
.fld-hero-scope {
  --fld-cyan: #38bdf8;
  --fld-cyan-glow: rgba(56, 189, 248, 0.45);
  --fld-electric: #2563eb;
  --fld-bright-blue: #60a5fa;
  --fld-navy-glass: rgba(15, 23, 42, 0.82);
  --fld-navy-deep: #0b1120;
  --fld-text-bright: #ffffff;
  --fld-text-muted: rgba(255, 255, 255, 0.65);
  --fld-text-dim: #94a3b8;
  --fld-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --fld-ease-smooth: all 0.35s var(--fld-ease-out);

  position: relative;
  width: 100%;
  max-width: 540px;
  height: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent !important;
  perspective: 1200px;
  transform-style: preserve-3d;
  box-sizing: border-box;
  overflow: visible;
  isolation: isolate;
  user-select: none;
  -webkit-user-select: none;
}

.fld-hero-scope *,
.fld-hero-scope *::before,
.fld-hero-scope *::after {
  box-sizing: border-box;
}

.fld-dna-stage {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  background: transparent;
}

/* --------------------------------------------------------------------------
   2. AMBIENT ATMOSPHERE & QUANTUM AXIS
   -------------------------------------------------------------------------- */
.fld-dna-atmosphere {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  transform: translateZ(-60px);
}

.fld-ambient-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 380px;
  height: 480px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center,
    rgba(56, 189, 248, 0.16) 0%,
    rgba(37, 99, 235, 0.08) 45%,
    transparent 72%
  );
  filter: blur(48px);
  animation: fldAmbientBreathe 7s ease-in-out infinite alternate;
}

@keyframes fldAmbientBreathe {
  0% { transform: translate(-50%, -50%) scale(0.92); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(1.08); opacity: 1; }
}

.fld-vertical-axis {
  position: absolute;
  top: 30px;
  bottom: 30px;
  left: 50%;
  width: 1.5px;
  transform: translateX(-50%);
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(56, 189, 248, 0.25) 20%,
    rgba(56, 189, 248, 0.6) 50%,
    rgba(56, 189, 248, 0.25) 80%,
    transparent 100%
  );
  filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.6));
}

.fld-projection-beam {
  position: absolute;
  bottom: 20px;
  left: 50%;
  width: 180px;
  height: 120px;
  transform: translateX(-50%);
  background: radial-gradient(
    ellipse at center bottom,
    rgba(56, 189, 248, 0.25) 0%,
    rgba(37, 99, 235, 0.1) 45%,
    transparent 75%
  );
  filter: blur(14px);
}

/* --------------------------------------------------------------------------
   3. FLOATING QUANTUM PARTICLES (Gentle Wandering)
   -------------------------------------------------------------------------- */
.fld-dna-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  transform: translateZ(-20px);
}

.fld-particle {
  position: absolute;
  border-radius: 50%;
  background-color: var(--fld-cyan);
  box-shadow: 0 0 8px var(--fld-cyan);
  opacity: 0.35;
}

.fld-p-1 { top: 12%; left: 24%; width: 2.5px; height: 2.5px; animation: fldParticleWander 6.2s ease-in-out infinite alternate 0.2s; }
.fld-p-2 { top: 22%; right: 22%; width: 3px; height: 3px; box-shadow: 0 0 8px #60a5fa; animation: fldParticleWander 7.4s ease-in-out infinite alternate 1.5s; }
.fld-p-3 { top: 48%; left: 16%; width: 2px; height: 2px; animation: fldParticleWander 8.1s ease-in-out infinite alternate 0.9s; }
.fld-p-4 { top: 68%; right: 18%; width: 3px; height: 3px; animation: fldParticleWander 6.8s ease-in-out infinite alternate 2.3s; }
.fld-p-5 { bottom: 18%; left: 28%; width: 2px; height: 2px; animation: fldParticleWander 7.7s ease-in-out infinite alternate 1.1s; }
.fld-p-6 { bottom: 10%; right: 26%; width: 2.5px; height: 2.5px; animation: fldParticleWander 8.5s ease-in-out infinite alternate 0.4s; }

@keyframes fldParticleWander {
  0% { transform: translate3d(0, 0, 0) scale(0.85); opacity: 0.2; }
  100% { transform: translate3d(3px, -11px, 0) scale(1.15); opacity: 0.65; }
}

/* --------------------------------------------------------------------------
   4. TERMINAL EMITTER RINGS
   -------------------------------------------------------------------------- */
.fld-dna-rings {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  transform-style: preserve-3d;
}

.fld-terminal-ring {
  position: absolute;
  left: 50%;
  width: 90px;
  height: 24px;
  margin-left: -45px;
  border-radius: 50%;
  border: 1.5px dashed rgba(56, 189, 248, 0.45);
  box-shadow: 0 0 14px rgba(56, 189, 248, 0.3), inset 0 0 10px rgba(56, 189, 248, 0.2);
  transform: rotateX(72deg);
}

.fld-ring-top {
  top: 24px;
  animation: fldRingSpin 24s linear infinite;
}

.fld-ring-bottom {
  bottom: 24px;
  animation: fldRingSpin 24s linear infinite reverse;
}

@keyframes fldRingSpin {
  from { transform: rotateX(72deg) rotateZ(0deg); }
  to { transform: rotateX(72deg) rotateZ(360deg); }
}

/* --------------------------------------------------------------------------
   5. VECTOR HELIX: STRANDS, RUNGS & DATA FLOW
   -------------------------------------------------------------------------- */
.fld-dna-helix {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 3;
}

.fld-dna-svg {
  width: 100%;
  height: 100%;
  display: block;
  overflow: visible;
  filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.35));
}

.fld-dna-strand {
  fill: none;
  stroke-width: 3.2px;
  stroke-linecap: round;
  stroke-dasharray: 600;
  stroke-dashoffset: 0;
  will-change: stroke-dashoffset, filter;
}

.fld-strand-a {
  stroke: url(#fldStrandGradA);
  animation: fldStrandStreamA 16s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.fld-strand-b {
  stroke: url(#fldStrandGradB);
  animation: fldStrandStreamB 18s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes fldStrandStreamA {
  0% { stroke-dashoffset: 0; stroke-opacity: 0.85; }
  50% { stroke-opacity: 1; }
  100% { stroke-dashoffset: -600; stroke-opacity: 0.85; }
}

@keyframes fldStrandStreamB {
  0% { stroke-dashoffset: 0; stroke-opacity: 0.8; }
  50% { stroke-opacity: 0.95; }
  100% { stroke-dashoffset: 600; stroke-opacity: 0.8; }
}

/* Base-Pair Connecting Bars */
.fld-rung {
  stroke: rgba(56, 189, 248, 0.32);
  stroke-width: 1.6px;
  stroke-dasharray: 4 5;
  stroke-linecap: round;
  transition: stroke 0.35s ease, stroke-width 0.35s ease, filter 0.35s ease;
}

.fld-rung-1 { animation: fldRungBreathe 5.2s ease-in-out infinite alternate 0.3s; }
.fld-rung-2 { animation: fldRungBreathe 6.1s ease-in-out infinite alternate 1.1s; }
.fld-rung-core { stroke: rgba(56, 189, 248, 0.55); stroke-width: 2px; stroke-dasharray: none; animation: fldRungBreathe 4.4s ease-in-out infinite alternate 0.6s; }
.fld-rung-4 { animation: fldRungBreathe 5.7s ease-in-out infinite alternate 1.8s; }
.fld-rung-5 { animation: fldRungBreathe 6.5s ease-in-out infinite alternate 0.9s; }

@keyframes fldRungBreathe {
  0% { stroke-opacity: 0.25; stroke-width: 1.4px; }
  100% { stroke-opacity: 0.65; stroke-width: 1.8px; }
}

/* Synaptic Transmission Packets */
.fld-pulse-dot {
  fill: #ffffff;
  filter: drop-shadow(0 0 6px #38bdf8);
}

.fld-pulse-1 { animation: fldPulseSlide 4.6s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite; }
.fld-pulse-2 { animation: fldPulseSlide 5.4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite 1.4s; }
.fld-pulse-3 { animation: fldPulseSlide 4.9s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite 2.2s; }
.fld-pulse-4 { animation: fldPulseSlide 5.8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite 0.8s; }

@keyframes fldPulseSlide {
  0% { transform: translateX(-110px); opacity: 0; }
  15% { opacity: 0.9; }
  85% { opacity: 0.9; }
  100% { transform: translateX(110px); opacity: 0; }
}

/* --------------------------------------------------------------------------
   6. CENTRAL FORSKO LOGO NUCLEUS (Enlarged & Prominent)
   -------------------------------------------------------------------------- */
.fld-dna-core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 168px;
  height: 168px;
  transform: translate(-50%, -50%) translateZ(55px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20; /* Elevated above strands & nodes */
  pointer-events: auto;
  cursor: pointer;
  outline: none;
}

.fld-core-wave {
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  border: 1.5px solid rgba(56, 189, 248, 0.35);
  pointer-events: none;
  animation: fldQuantumWaveRelease 5.8s cubic-bezier(0.16, 0.85, 0.45, 1) infinite;
}

.fld-core-wave-2 {
  animation: fldQuantumWaveRelease 5.8s cubic-bezier(0.16, 0.85, 0.45, 1) infinite 2.9s;
}

@keyframes fldQuantumWaveRelease {
  0% { transform: scale(0.88); opacity: 0.75; border-color: rgba(56, 189, 248, 0.65); }
  40% { opacity: 0.4; }
  100% { transform: scale(1.42); opacity: 0; border-color: rgba(37, 99, 235, 0); }
}

.fld-core-rotor {
  position: absolute;
  inset: -22px;
  border-radius: 50%;
  border: 1.2px dashed rgba(56, 189, 248, 0.4);
  animation: fldRotorGentleSpin 44s linear infinite;
  pointer-events: none;
}

@keyframes fldRotorGentleSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.fld-core-capsule {
  position: relative;
  width: 152px;
  height: 152px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 28%, #1e293b 0%, #0f172a 60%, #070d18 100%);
  border: 1.8px solid rgba(56, 189, 248, 0.65);
  box-shadow: 
    0 18px 40px -8px rgba(0, 0, 0, 0.9),
    0 0 35px rgba(56, 189, 248, 0.38),
    inset 0 0 28px rgba(56, 189, 248, 0.28),
    inset 0 1px 2px rgba(255, 255, 255, 0.45);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  text-align: center;
  overflow: hidden;
  z-index: 3;
  animation: fldCoreDrift 6.4s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate;
  transition: transform 0.4s var(--fld-ease-out), border-color 0.4s ease, box-shadow 0.4s ease;
  will-change: transform;
}

@keyframes fldCoreDrift {
  0% { transform: translateY(0) scale(0.99); }
  50% { transform: translateY(-3px) scale(1.01); }
  100% { transform: translateY(-6px) scale(1.005); }
}

.fld-dna-core:hover .fld-core-capsule {
  border-color: #38bdf8;
  box-shadow: 
    0 24px 50px -8px rgba(0, 0, 0, 0.95),
    0 0 52px rgba(56, 189, 248, 0.75),
    inset 0 0 36px rgba(56, 189, 248, 0.55);
}

.fld-core-glare {
  position: absolute;
  top: 3px;
  left: 20px;
  right: 20px;
  height: 42px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.28) 0%, transparent 100%);
  border-radius: 50% 50% 35% 35%;
  pointer-events: none;
  z-index: 5;
}

.fld-core-emblem-wrap {
  position: relative;
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  margin-bottom: 2px;
  z-index: 4;
}

.fld-core-emblem-wrap::before {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.55) 0%, rgba(37, 99, 235, 0.25) 50%, transparent 75%);
  filter: blur(10px);
  pointer-events: none;
  z-index: 1;
  animation: fldCoreBacklightBreathe 5.2s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate;
}

@keyframes fldCoreBacklightBreathe {
  0% { transform: scale(0.88); opacity: 0.45; filter: blur(9px); }
  100% { transform: scale(1.14); opacity: 0.85; filter: blur(13px); }
}

.fld-core-logo {
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 58px;
  max-height: 58px;
  object-fit: contain;
  pointer-events: none;
  z-index: 2;
  transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), filter 0.45s ease;
}

.fld-logo-primary {
  opacity: 1;
  transform: scale(1);
  filter: drop-shadow(0 0 12px rgba(56, 189, 248, 0.85));
  animation: fldLogoGlowBreathe 4.6s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate;
}

@keyframes fldLogoGlowBreathe {
  0% { filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.75)); }
  100% { filter: drop-shadow(0 0 18px rgba(56, 189, 248, 0.98)); }
}

.fld-logo-secondary {
  opacity: 0;
  transform: scale(0.88);
  filter: drop-shadow(0 0 16px rgba(96, 165, 250, 0.9));
}

.fld-dna-core:hover .fld-logo-primary {
  opacity: 0;
  transform: scale(1.12);
}

.fld-dna-core:hover .fld-logo-secondary {
  opacity: 1;
  transform: scale(1.04);
}

.fld-core-title {
  margin: 0;
  font-family: 'Exo 2', system-ui, -apple-system, sans-serif;
  font-size: 1.28rem;
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 1.1;
  color: var(--fld-text-bright);
  text-shadow: 0 0 14px rgba(56, 189, 248, 0.85);
  z-index: 4;
}

.fld-core-tagline {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.48rem;
  font-weight: 700;
  letter-spacing: 0.7px;
  color: var(--fld-text-muted);
  text-transform: uppercase;
  margin-top: 2px;
  z-index: 4;
}

.fld-core-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  background: rgba(11, 17, 32, 0.88);
  border: 1px solid rgba(56, 189, 248, 0.35);
  border-radius: 12px;
  padding: 1px 7px;
  z-index: 4;
}

.fld-status-spark {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--fld-cyan);
  box-shadow: 0 0 6px var(--fld-cyan);
  animation: fldSparkPulse 2.2s ease-in-out infinite;
}

@keyframes fldSparkPulse {
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50% { opacity: 1; transform: scale(1.3); }
}

.fld-status-text {
  font-family: 'Consolas', 'Fira Code', monospace;
  font-size: 0.42rem;
  font-weight: 800;
  letter-spacing: 0.8px;
  color: var(--fld-cyan);
}

/* --------------------------------------------------------------------------
   7. SIX HOLOGRAPHIC RESOURCE NODES (3D Asynchronous Staging)
   -------------------------------------------------------------------------- */
.fld-nodes-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 8;
  transform-style: preserve-3d;
}

.fld-node {
  position: absolute;
  display: inline-flex;
  align-items: center;
  text-decoration: none !important;
  color: #ffffff !important;
  pointer-events: auto;
  cursor: pointer;
  outline: none;
  transform-style: preserve-3d;
  transition: transform 0.35s var(--fld-ease-out), filter 0.35s ease;
  will-change: transform;
}

/* Asynchronous Harmonic Tiers */
.fld-node-syllabus {
  top: 72px;
  left: 20px;
  transform: translateZ(30px);
  animation: fldFloatTierSyllabus 7.3s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate;
}
@keyframes fldFloatTierSyllabus {
  0% { transform: translate3d(0, 0, 30px); }
  100% { transform: translate3d(0, -6px, 35px); }
}

.fld-node-notes {
  top: 72px;
  right: 20px;
  transform: translateZ(30px);
  animation: fldFloatTierNotes 8.4s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate 0.7s;
}
@keyframes fldFloatTierNotes {
  0% { transform: translate3d(0, 0, 30px); }
  100% { transform: translate3d(0, 7px, 36px); }
}

.fld-node-pyqs {
  top: 172px;
  left: 36px;
  transform: translateZ(45px);
  animation: fldFloatTierPYQs 7.9s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate 1.4s;
}
@keyframes fldFloatTierPYQs {
  0% { transform: translate3d(0, 0, 42px); }
  100% { transform: translate3d(0, -7px, 48px); }
}

.fld-node-qb {
  top: 172px;
  right: 36px;
  transform: translateZ(45px);
  animation: fldFloatTierQB 9.1s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate 0.4s;
}
@keyframes fldFloatTierQB {
  0% { transform: translate3d(0, 0, 42px); }
  100% { transform: translate3d(0, 6px, 46px); }
}

.fld-node-practicals {
  top: 372px;
  left: 32px;
  transform: translateZ(40px);
  animation: fldFloatTierPracticals 8.1s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate 1.9s;
}
@keyframes fldFloatTierPracticals {
  0% { transform: translate3d(0, 0, 38px); }
  100% { transform: translate3d(0, -6px, 44px); }
}

.fld-node-patterns {
  top: 372px;
  right: 32px;
  transform: translateZ(40px);
  animation: fldFloatTierPatterns 8.8s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate 1.1s;
}
@keyframes fldFloatTierPatterns {
  0% { transform: translate3d(0, 0, 38px); }
  100% { transform: translate3d(0, 7px, 43px); }
}

/* Synaptic Anchor Pin */
.fld-node-anchor-pin {
  position: absolute;
  top: 50%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--fld-cyan);
  box-shadow: 0 0 8px var(--fld-cyan);
  transform: translateY(-50%);
  pointer-events: none;
  transition: var(--fld-ease-smooth);
}

.fld-node-syllabus .fld-node-anchor-pin,
.fld-node-pyqs .fld-node-anchor-pin,
.fld-node-practicals .fld-node-anchor-pin {
  right: -12px;
}

.fld-node-notes .fld-node-anchor-pin,
.fld-node-qb .fld-node-anchor-pin,
.fld-node-patterns .fld-node-anchor-pin {
  left: -12px;
}

/* Glassmorphic Capsule Card */
.fld-node-capsule {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px 8px 10px;
  border-radius: 14px;
  background: var(--fld-navy-glass);
  border: 1.5px solid rgba(56, 189, 248, 0.4);
  box-shadow: 
    0 12px 28px -6px rgba(0, 0, 0, 0.75),
    0 0 20px rgba(56, 189, 248, 0.25),
    inset 0 0 14px rgba(56, 189, 248, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  overflow: hidden;
  transition: transform 0.24s cubic-bezier(0.16, 1, 0.3, 1), background 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease;
}

.fld-node-specular {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 48%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, transparent 100%);
  border-radius: 14px 14px 40% 40%;
  pointer-events: none;
}

.fld-node-icon-box {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: rgba(56, 189, 248, 0.15);
  border: 1px solid rgba(56, 189, 248, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--fld-cyan);
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.3);
  transition: var(--fld-ease-smooth);
}

.fld-node-icon {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.fld-node-text-wrap {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.fld-node-title {
  font-family: 'Exo 2', system-ui, -apple-system, sans-serif;
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.6px;
  color: var(--fld-text-bright);
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.9);
  transition: color 0.3s ease;
}

.fld-node-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.62rem;
  font-weight: 500;
  color: var(--fld-text-dim);
  letter-spacing: 0.2px;
  margin-top: 2px;
}

/* --------------------------------------------------------------------------
   8. HOVER, ACTIVE & INTERACTION DYNAMICS
   -------------------------------------------------------------------------- */
.fld-node:hover {
  z-index: 25;
  animation-play-state: paused;
}

.fld-node:hover .fld-node-capsule,
.fld-node:focus-visible .fld-node-capsule {
  transform: scale(1.08) translateY(-4px);
  background: rgba(15, 23, 42, 0.92);
  border-color: #38bdf8;
  box-shadow: 
    0 18px 36px -6px rgba(0, 0, 0, 0.9),
    0 0 35px var(--fld-cyan-glow),
    inset 0 0 20px rgba(56, 189, 248, 0.45);
}

.fld-node:hover .fld-node-icon-box,
.fld-node:focus-visible .fld-node-icon-box {
  background: rgba(56, 189, 248, 0.3);
  border-color: #ffffff;
  color: #ffffff;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.8);
  transform: scale(1.1);
}

.fld-node:hover .fld-node-title,
.fld-node:focus-visible .fld-node-title {
  color: var(--fld-cyan);
  text-shadow: 0 0 12px var(--fld-cyan-glow);
}

.fld-node:hover .fld-node-anchor-pin,
.fld-node:focus-visible .fld-node-anchor-pin {
  background-color: #ffffff;
  box-shadow: 0 0 14px var(--fld-cyan);
  transform: translateY(-50%) scale(1.4);
}

/* Connected Rung Highlight Hooks */
.fld-hero-scope:has(.fld-node-syllabus:hover) .fld-rung-1,
.fld-hero-scope:has(.fld-node-notes:hover) .fld-rung-1 {
  stroke: #38bdf8 !important;
  stroke-width: 2.8px !important;
  stroke-dasharray: none !important;
  filter: drop-shadow(0 0 8px #38bdf8);
}

.fld-hero-scope:has(.fld-node-pyqs:hover) .fld-rung-2,
.fld-hero-scope:has(.fld-node-qb:hover) .fld-rung-2 {
  stroke: #38bdf8 !important;
  stroke-width: 2.8px !important;
  stroke-dasharray: none !important;
  filter: drop-shadow(0 0 8px #38bdf8);
}

.fld-hero-scope:has(.fld-node-practicals:hover) .fld-rung-4,
.fld-hero-scope:has(.fld-node-patterns:hover) .fld-rung-4 {
  stroke: #38bdf8 !important;
  stroke-width: 2.8px !important;
  stroke-dasharray: none !important;
  filter: drop-shadow(0 0 8px #38bdf8);
}

/* --------------------------------------------------------------------------
   9. RESPONSIVE BREAKPOINT MATRICES
   -------------------------------------------------------------------------- */
@media screen and (max-width: 992px) {
  .fld-hero-scope {
    max-width: 480px;
    height: 540px;
    perspective: 1000px;
  }
  .fld-dna-core { width: 148px; height: 148px; }
  .fld-core-capsule { width: 134px; height: 134px; }
  .fld-core-emblem-wrap { width: 50px; height: 50px; }
  .fld-core-title { font-size: 1.15rem; }
  .fld-node-capsule { padding: 6px 12px 6px 8px; border-radius: 12px; }
  .fld-node-icon-box { width: 30px; height: 30px; }
  .fld-node-icon { font-size: 0.9rem; }
  .fld-node-title { font-size: 0.78rem; }
  .fld-node-desc { font-size: 0.56rem; }
  .fld-node-syllabus { top: 65px; left: 14px; }
  .fld-node-notes { top: 65px; right: 14px; }
  .fld-node-pyqs { top: 155px; left: 26px; }
  .fld-node-qb { top: 155px; right: 26px; }
  .fld-node-practicals { top: 335px; left: 22px; }
  .fld-node-patterns { top: 335px; right: 22px; }
}

@media screen and (max-width: 768px) {
  .fld-hero-scope {
    max-width: 410px;
    height: 500px;
    margin: 15px auto 0 auto;
    perspective: 800px;
  }
  .fld-ambient-glow { width: 300px; height: 360px; }
  .fld-p-4, .fld-p-5, .fld-p-6 { display: none; }
  .fld-dna-core { width: 126px; height: 126px; }
  .fld-core-capsule { width: 114px; height: 114px; padding: 8px; }
  .fld-core-emblem-wrap { width: 42px; height: 42px; }
  .fld-core-title { font-size: 1.05rem; }
  .fld-core-tagline, .fld-core-status-pill, .fld-node-desc { display: none; }
  .fld-node-capsule { padding: 5px 10px 5px 6px; gap: 7px; }
  .fld-node-icon-box { width: 26px; height: 26px; border-radius: 8px; }
  .fld-node-icon { font-size: 0.8rem; }
  .fld-node-title { font-size: 0.72rem; }
  .fld-node-anchor-pin { width: 5px; height: 5px; }
  .fld-node-syllabus { top: 60px; left: 8px; }
  .fld-node-notes { top: 60px; right: 8px; }
  .fld-node-pyqs { top: 145px; left: 16px; }
  .fld-node-qb { top: 145px; right: 16px; }
  .fld-node-practicals { top: 310px; left: 14px; }
  .fld-node-patterns { top: 310px; right: 14px; }
}

@media screen and (max-width: 480px) {
  .fld-hero-scope {
    max-width: 320px;
    height: 440px;
    overflow-x: hidden;
  }
  .fld-terminal-ring { width: 70px; margin-left: -35px; }
  .fld-dna-core { width: 104px; height: 104px; }
  .fld-core-capsule { width: 94px; height: 94px; padding: 6px; }
  .fld-core-emblem-wrap { width: 34px; height: 34px; }
  .fld-core-title { font-size: 0.9rem; }
  .fld-node-capsule { padding: 4px 8px 4px 5px; gap: 5px; }
  .fld-node-icon-box { width: 22px; height: 22px; }
  .fld-node-icon { font-size: 0.7rem; }
  .fld-node-title { font-size: 0.65rem; }
  .fld-node-syllabus { top: 52px; left: 4px; }
  .fld-node-notes { top: 52px; right: 4px; }
  .fld-node-pyqs { top: 130px; left: 10px; }
  .fld-node-qb { top: 130px; right: 10px; }
  .fld-node-practicals { top: 275px; left: 8px; }
  .fld-node-patterns { top: 275px; right: 8px; }
}

/* --------------------------------------------------------------------------
   10. REDUCED MOTION SAFEGUARD
   -------------------------------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  .fld-ambient-glow,
  .fld-particle,
  .fld-ring-top,
  .fld-ring-bottom,
  .fld-strand-a,
  .fld-strand-b,
  .fld-rung,
  .fld-pulse-dot,
  .fld-core-wave,
  .fld-core-rotor,
  .fld-core-capsule,
  .fld-core-emblem-wrap::before,
  .fld-logo-primary,
  .fld-status-spark,
  .fld-node-syllabus,
  .fld-node-notes,
  .fld-node-pyqs,
  .fld-node-qb,
  .fld-node-practicals,
  .fld-node-patterns {
    animation: none !important;
  }

  .fld-hero-scope,
  .fld-node,
  .fld-node-capsule,
  .fld-core-capsule {
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease !important;
  }
}

/* ==========================================================================
   FORSKO LEARNING DNA — TILTED STAGE & LOGO-ONLY CORE
   ========================================================================== */

/* 1. Base 3D Tilted Stage (-12deg Diagonal Slant) */
.fld-dna-stage {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  background: transparent;
  transform: perspective(1200px) rotateZ(-12deg) rotateY(8deg);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 2. Central Logo-Only Core (Compact, Clean Circular Orb) */
.fld-dna-core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 116px;
  height: 116px;
  transform: translate(-50%, -50%) translateZ(60px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  pointer-events: auto;
  cursor: pointer;
}

.fld-core-capsule {
  position: relative;
  width: 104px;
  height: 104px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 28%, #1e293b 0%, #0f172a 65%, #070d18 100%);
  border: 2px solid rgba(56, 189, 248, 0.75);
  box-shadow: 
    0 16px 36px -6px rgba(0, 0, 0, 0.9),
    0 0 32px rgba(56, 189, 248, 0.45),
    inset 0 0 24px rgba(56, 189, 248, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* Counter-rotate taaki logo strand ke tilt ke sath tedha na dikhe */
  transform: rotateZ(12deg);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
              border-color 0.35s ease, 
              box-shadow 0.35s ease;
}

.fld-dna-core:hover .fld-core-capsule {
  transform: rotateZ(12deg) scale(1.1);
  border-color: #38bdf8;
  box-shadow: 
    0 20px 45px -6px rgba(0, 0, 0, 0.95),
    0 0 48px rgba(56, 189, 248, 0.8),
    inset 0 0 30px rgba(56, 189, 248, 0.55);
}

.fld-core-glare {
  position: absolute;
  top: 2px;
  left: 12px;
  right: 12px;
  height: 28px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);
  border-radius: 50% 50% 40% 40%;
  pointer-events: none;
  z-index: 5;
}

.fld-core-emblem-wrap {
  position: relative;
  width: 68px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}

.fld-core-logo {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
  transition: opacity 0.4s ease, transform 0.4s ease, filter 0.4s ease;
}

.fld-logo-primary {
  opacity: 1;
  transform: scale(1);
  filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.85));
}

.fld-logo-secondary {
  opacity: 0;
  transform: scale(0.85);
  filter: drop-shadow(0 0 14px rgba(96, 165, 250, 0.9));
}

/* Hover Crossfade */
.fld-dna-core:hover .fld-logo-primary {
  opacity: 0;
  transform: scale(1.15);
}

.fld-dna-core:hover .fld-logo-secondary {
  opacity: 1;
  transform: scale(1);
}

/* 3. Node Capsules Counter-Rotation (Cards Seedhi Dikhengi) */
.fld-node-capsule {
  transform: rotateZ(12deg);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
              background 0.25s ease, 
              border-color 0.25s ease, 
              box-shadow 0.25s ease;
}

.fld-node:hover .fld-node-capsule,
.fld-node:focus-visible .fld-node-capsule {
  transform: rotateZ(12deg) scale(1.08) translateY(-4px) !important;
}
